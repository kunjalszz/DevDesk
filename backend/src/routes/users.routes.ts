import { Router} from "express"
import prisma from "../lib/prisma.js"
import { createUserSchema } from '../validation/user.validation';


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

        const user = await prisma.user.create({
            data: {
            name,
            email,
            password,
            },
        });

        res.status(201).json({
            success: true,
            data: user,
        });
    }
    catch(error){
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to create user"
        });
    }
});

export default router;