import { rest } from "msw";
import data from "./data";

export const handlers = [
	rest.get("/api/validateUser", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (data.recipients.includes(recipientId)) {
			return res(ctx.status(200), ctx.json({ recipientId, code: 200 }));
		} else {
			return res(ctx.status(200), ctx.json({ recipientId, code: 404 }));
		}
	}),

	rest.get("/api/fetchUser", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (recipientId === "df50cac5-293c-490d-a06c-ee26796f850d") {
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

	rest.get("/api/visits", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (recipientId === "df50cac5-293c-490d-a06c-ee26796f850d") {
			return res(ctx.status(200), ctx.json({ visits: data.visits }));
		} else {
			return res(ctx.status(404));
		}
	}),

	rest.get("/api/visit", (req, res, ctx) => {
		const recipientId = req.url.searchParams.get("id")!;
		if (recipientId === "df50cac5-293c-490d-a06c-ee26796f850d") {
			const result: any[] = [];
			data.eventData.forEach((item) => {
				const payload = JSON.parse(item.payload);
				result.push({ ...item, payload });
			});

			return res(ctx.status(200), ctx.json({ events: result }));
		} else {
			return res(ctx.status(404));
		}
	}),
];
