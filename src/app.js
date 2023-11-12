import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import reservasRoutes from "./routes/reservas.routes.js";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import habitacionesRoutes from "./routes/habitaciones.route.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);

app.use("/api/reservas", reservasRoutes);
app.use("/api/habitaciones", habitacionesRoutes);

export default app;
