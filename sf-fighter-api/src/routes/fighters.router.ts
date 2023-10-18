import express, { Request, Response } from 'express';
import * as fController from '../controllers/Fighters.controller';

export const fighterRouter = express.Router();

fighterRouter.get('/', (_req, res) => fController.getAll(_req, res));
fighterRouter.get('/:id', (req, res) => fController.getById(req, res));