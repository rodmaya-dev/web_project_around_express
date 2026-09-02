import type { Request, Response } from "express";
import Card from "../models/card.js";

export const getCards = async (req: Request, res: Response) => {
  const cards = await Card.find({});
  res.send(cards);
};

export const createCard = async (req: Request, res: Response) => {
  const { name, link } = req.body;
  const userId = req.user?._id;

  if (!userId) {
    throw Object.assign(new Error("No se pudo identificar al usuario"), {
      statusCode: 401,
    });
  }

  const card = await Card.create({ name, link, owner: userId });
  res.status(201).send(card);
};

export const deleteCard = async (req: Request, res: Response) => {
  const card = await Card.findByIdAndDelete(req.params.id);

  if (!card) {
    throw Object.assign(new Error("No se encontró ninguna tarjeta con ese id"), {
      statusCode: 404,
    });
  }

  res.send(card);
};