import request from "supertest";
import app from "../../../app"



it("return a 200 on currentUser",async() => {
     const response = await request(app).post("/api/auth/signup").send({
        name: "broki",
        lastName: "Test",
        email:"broki@test.com",
        password:"1234"
    }).expect(201);

    const cookie = response.get("Set-Cookie");

    if(!cookie) {
        throw new Error("Cookie not found");
    }


    const currentUser = await request(app).get("/api/users/currentUser").set("Cookie",cookie);

    console.log(currentUser.get("Cookie"));

    expect(currentUser.body.data.user.email).toEqual("broki@test.com");
});

