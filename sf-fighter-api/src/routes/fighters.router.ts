import express, { Request, Response } from 'express';
import * as fightersService from '../services/fighters.service';

export const fighterRouter = express.Router();

fighterRouter.get('/', async (
  _req: Request,
  res: Response,
) => {
  try {
    const { data } = await fightersService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
});