import express from "express";

console.log("📄 app.ts loaded");

const app = express();

app.get("/", (_req, res) => {
  res.send("Root route works");
});

app.get("/health", (_req, res) => {
  console.log("✅ /health called");
  res.json({
    status: "ok",
    message: "Backend is working!",
  });
});

console.log("Routes registered");

export default app;