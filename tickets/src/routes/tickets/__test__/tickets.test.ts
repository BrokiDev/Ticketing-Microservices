import request from "supertest"
import app from "../../../app"

it("only should return all tickets by a user logged in",async ()  => {
    return request(app).get("/api/tickets").expect(401);
})