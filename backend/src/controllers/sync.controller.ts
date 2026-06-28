import { Request, Response } from "express";

import { syncRepository } from "../sync/sync.service.js";

export async function sync(req: Request, res: Response) {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Missing token",
      });
    }

    const { owner, repository, payload } = req.body;

    await syncRepository(
      payload,
      token,
      owner,
      repository
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Sync failed",
    });
  }
}