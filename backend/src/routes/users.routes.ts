import { Router} from "express"
import prisma from "../lib/prisma.js"

const router =Router();

router.post("/",async(req, res)=>{
    try{
        const { name, email, password} = req.body;

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