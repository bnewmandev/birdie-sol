import app from "../src/app";
import request from "supertest";

describe("Fetch User Controller", () => {
	it("Requests data for a valid user", async () => {
		await request(app)
			.get("/fetchUser?id=df50cac5-293c-490d-a06c-ee26796f850d")
			.expect(200)
			.expect((res) => {
				expect(res.body.events[0]).toEqual({
					id: "2b234dfa-86d8-403a-bd2d-ad1a3499114c",
					title: "Mental Health Observation",
					allDay: false,
					start: 1557687185099,
					end: 1557687185099,
					color: "purple",
				});
				expect(res.body.lastEventDate).toEqual(1557689407000);
			});
	});
});
