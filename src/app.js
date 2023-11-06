import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import habitacionesRoutes from "./routes/habitaciones.route.js"


const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", authRoutes);
app.use ("/api/habitaciones", habitacionesRoutes);


export default app;

