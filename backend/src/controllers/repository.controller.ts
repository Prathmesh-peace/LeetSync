import { Request, Response } from "express";

import {
  getOrCreateRepository,
} from "../github/repository.service.js";

export async function repository(
  req: Request,
  res: Response
) {

  try {

    const token =
      req.headers.authorization?.replace(
        "Bearer ",
        ""
      );

    if (!token) {
      return res.status(401).json({
        message: "Missing token",
      });
    }

    const repo =
      await getOrCreateRepository(
        token,
        "leetcode"
      );

    res.json(repo);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Repository Error",
    });

  }
}