import { rest } from "msw";
import data from "./data";

export const handlers = [
	rest.get("http://localhost/validateUser", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (recipientId in data.recipients) {
			return res(ctx.status(200), ctx.json({ recipientId, code: 200 }));
		} else {
			return res(ctx.status(200), ctx.json({ recipientId, code: 404 }));
		}
	}),
];
