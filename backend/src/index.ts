import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
