import express from 'express';
import { fighterRouter } from './routes/fighters.router';

const app = express();

app.use(express.json());
app.use("/fighter" ,fighterRouter);

export default app;