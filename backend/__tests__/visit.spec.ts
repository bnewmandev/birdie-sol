import app from "../src/app";
import request from "supertest";

it("Requests list of visits for a valid user", async () => {
	await request(app)
		.get("/visits?id=df50cac5-293c-490d-a06c-ee26796f850d")
		.expect(200)
		.expect((res) => {
			expect(res.body.visits).toHaveProperty("2ddc3653-521f-11e9-b63f-06a80bfbb33e");
		});
});
