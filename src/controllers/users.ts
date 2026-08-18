import type { RequestHandler } from "express";
import { readJsonFile } from "../utils/readJsonFile.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import type { IUser } from "../types/index.js";

const USERS_FILE = "users.json";

export const getUsers: RequestHandler = async (_req, res, next) => {
  try {
    const users = await readJsonFile<IUser[]>(USERS_FILE);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const users = await readJsonFile<IUser[]>(USERS_FILE);
    const user = users.find((candidate) => candidate._id === userId);

    if (!user) {
      throw new NotFoundError("User ID not found");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};