import app from "../src/app";
import request from "supertest";

describe("Ping Controller", () => {
	it("Check that server is online", async () => {
		await request(app)
			.get("/hello")
			.expect(200)
			.expect((res) => {
				expect(res.body.greetings).toContain("Thank you");
			});
	});
});
