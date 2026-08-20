import { Router} from "express";
import { Prisma } from "../generated/prisma/client.js";
import argon2 from "argon2";

import prisma from "../lib/prisma.js"
import { createUserSchema } from '../validation/user.validation.js';


const router =Router();

router.post("/",async(req, res)=>{
    try{
        const result = createUserSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                success: false,
                message: " Invalid request data",
                errors: result.error.issues,
            });
        }

        const { name, email, password} = result.data;

        const hashedPassword = await argon2.hash(password);

        const user = await prisma.user.create({
            data: {
            name,
            email,
            password: hashedPassword,
            },
        });

        res.status(201).json({
            success: true,
            data: {
                id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
            },
        });
    }
    catch(error){
        if(
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ){
            return res.status(409).json({
                success: false,
        message: "Email is already registered",

            })
        }

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to create user"
        });
    }
});

export default router;