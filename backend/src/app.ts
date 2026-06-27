import express from "express";
import cors from "cors";
import repositoryRoutes from "./routes/repository.routes.js";
import authRoutes from "./routes/auth.routes.js";
import syncRoutes from "./routes/sync.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Backend is working!",
  });
});

app.use("/auth", authRoutes);
app.use("/repositories", repositoryRoutes);
app.use("/sync", syncRoutes);
export default app;