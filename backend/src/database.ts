import { createPool } from "mysql";
import dotenv from "dotenv";
dotenv.config();

const pool = createPool({
	host: process.env.DB_HOST!,
	database: process.env.DB_NAME!,
	user: process.env.DB_USER!,
	password: process.env.DB_PWORD!,
	port: Number(process.env.DB_PORT!),
});

export default pool;
