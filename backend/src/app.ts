import express from "express";
import { pingController } from "./controllers/ping";
import { validateUserController } from "./controllers/validateUser";
import { fetchUserController } from "./controllers/fetchUser";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use((_, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(pingController);
app.use(validateUserController);
app.use(fetchUserController);

export default app;
