import express from "express";
import { pingController } from "./controllers/ping";
import { validateUserController } from "./controllers/validateUser";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(pingController);
app.use(validateUserController);

export default app;
