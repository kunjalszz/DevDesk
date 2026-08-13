import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health",(_req, res)=>{
    res.json({
    success: true,
    message: "DevDesk backend is running 🚀",
    });
});

app.use("/api/users",usersRouter);

export default app;