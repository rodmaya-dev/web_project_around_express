import type { RequestHandler } from "express";
import { readJsonFile } from "../utils/readJsonFile.js";
import type { ICard } from "../types/index.js";

const CARDS_FILE = "cards.json";

export const getCards: RequestHandler = async (_req, res, next) => {
  try {
    const cards = await readJsonFile<ICard[]>(CARDS_FILE);
    res.json(cards);
  } catch (error) {
    next(error);
  }
};