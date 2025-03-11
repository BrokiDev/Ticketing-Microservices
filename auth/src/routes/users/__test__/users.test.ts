import request from "supertest";
import app from "../../../app"



it("return a 200 on currentUser",async() => {
    const response = await request(app).post("/api/auth/signup").send({
        name: "broki",
        lastName: "Test",
        email: "broki@test.com",
        password: "1234"
    }).expect(201);

    const cookies = response.get("Set-Cookie");
    const cookie = cookies?.toString().split(";")[0];

    if (!cookie) {
        throw new Error("Cookie not found");
    }

    const currentUser = await request(app).get("/api/users/currentUser").set("Cookie", cookie).expect(200);
    expect(currentUser.body.data.user.email).toEqual("broki@test.com");
});

