import express from "express";
import { pingController } from "./controllers/ping";
import { validateUserController } from "./controllers/validateUser";
import { fetchUserController } from "./controllers/fetchUser";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(pingController);
app.use(validateUserController);
app.use(fetchUserController);

export default app;
