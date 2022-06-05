import { rest } from "msw";
import data from "./data";

export const handlers = [
	rest.get("http://localhost/validateUser", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (data.recipients.includes(recipientId)) {
			return res(ctx.status(200), ctx.json({ recipientId, code: 200 }));
		} else {
			return res(ctx.status(200), ctx.json({ recipientId, code: 404 }));
		}
	}),

	rest.get("http://localhost/fetchUser", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (recipientId === "test") {
			return res(
				ctx.status(200),
				ctx.json({
					events: data.events,
					lastEventDate: data.events[0].start.getTime(),
				})
			);
		} else {
			return res(
				ctx.status(200),
				ctx.json({
					events: [],
					lastEventDate: new Date(),
				})
			);
		}
	}),

	rest.get("http://localhost/visits", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (recipientId === "test") {
			return res(ctx.status(200), ctx.json({ visits: data.visits }));
		} else {
			return res(ctx.status(404));
		}
	}),
];
