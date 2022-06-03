import app from "../src/app";
import request from "supertest";

describe("Fetch User Controller", () => {
	it("Requests data for a valid user", async () => {
		await request(app)
			.get("/fetchUser?id=df50cac5-293c-490d-a06c-ee26796f850d")
			.expect(200)
			.expect((res) => {
				expect(res.body.events[0]).toEqual({
					id: "31c03a75-01bd-4f8c-8a0a-bc343adb622e",
					title: "Regular Medication Taken",
					allDay: false,
					start: 1557689407000,
					end: 1557689407000,
					color: "blue",
				});
				expect(res.body.lastEventDate).toEqual(1557689407000);
			});
	});
});
