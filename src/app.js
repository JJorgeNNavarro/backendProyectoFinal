import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import reservasRoutes from "./routes/reservas.routes.js"

import authRoutes from "./routes/auth.routes.js";
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);


app.use ("/api/reservas" , reservasRoutes)
export default app;
