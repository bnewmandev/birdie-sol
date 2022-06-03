import app from "../src/app";
import request from "supertest";

describe("Validate User Controller", () => {
	it("Requests an invalid user", async () => {
		await request(app)
			.get("/fetchUser?id=INVALID")
			.expect(200)
			.expect((res) => {
				expect(res.body.code).toEqual(404);
			});
	}),
		it("Requests a valid user", async () => {
			await request(app)
				.get("/fetchUser?id=df50cac5-293c-490d-a06c-ee26796f850d")
				.expect(200)
				.expect((res) => {
					expect(res.body.code).toEqual(200);
					expect(res.body.recipientId).toEqual("df50cac5-293c-490d-a06c-ee26796f850d");
				});
		});
});
