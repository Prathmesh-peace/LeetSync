import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/github/login", (_req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;

  const url =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&scope=repo,user`;

  res.redirect(url);
});

router.get("/github/callback", async (req, res) => {
  const code = req.query.code as string;

  try {
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const accessToken = response.data.access_token;

    res.json({
      success: true,
      accessToken,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
    });
  }
});

export default router;