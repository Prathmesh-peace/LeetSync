import { Router } from "express";
import axios from "axios";
import { getGitHubUser } from "../github/github.service.js";

const router = Router();

router.get("/github/login", (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID!;

  // Chrome extension redirect URL
  const extensionRedirectUri = req.query.redirect_uri as string;

  const githubUrl =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${clientId}` +
    `&scope=repo,user` +
    `&redirect_uri=${encodeURIComponent(
      "http://localhost:5000/auth/github/callback"
    )}` +
    `&state=${encodeURIComponent(extensionRedirectUri)}`;

  res.redirect(githubUrl);
});

router.get("/github/callback", async (req, res) => {
  const code = req.query.code as string;

  // Chrome extension redirect URL passed through state
  const extensionRedirectUri = req.query.state as string;

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

    const user = await getGitHubUser(accessToken);

    // Redirect back to Chrome extension
    const redirectUrl = new URL(extensionRedirectUri);

    redirectUrl.searchParams.set("token", accessToken);
    redirectUrl.searchParams.set("login", user.login);
    redirectUrl.searchParams.set("name", user.name ?? "");

    res.redirect(redirectUrl.toString());

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "GitHub OAuth failed",
    });
  }
});

export default router;