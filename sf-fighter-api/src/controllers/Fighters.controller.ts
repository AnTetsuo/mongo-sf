import { Request, Response } from 'express';
import * as fightersService from '../services/fighters.service';
import getErr from '../utils/errMap';

export async function getAll(
  _req: Request,
  res: Response,
) {
  try {
    const { data } = await fightersService.getAll();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" })
  }
}

export async function getById(
  req: Request,
  res: Response,
) {
  try {
    const { id } = req.params;
    const { status, data } = await fightersService.getById(id);

    if (status !== 'OK') return res.status(getErr(status)).json(data);

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" })
  }
}