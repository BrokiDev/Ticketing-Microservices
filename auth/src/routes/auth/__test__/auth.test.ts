import request from "supertest";
import app from "../../../app";

it('return a 201 on successful signup',async () => {
    return request(app).post("/api/auth/signup").send({
        name: "brokiT",
        lastName: "Using Test",
        email: "test@supertest.com",
        password: "1234567"
    }).expect(201);
});


it('return a 400 on invalid input', async () => {
    await request(app).post("/api/auth/signup").send({
        name: "brokiT",
        lastName: "Using Test",
        email: "test@supertest.com",
        password: ""
    }).expect(400);

    await request(app).post("/api/auth/signup").send({
        name: "",
        lastName: "Using Test",
        email: "test@supertest.com",
        password: ""
    }).expect(400);

    await request(app).post("/api/auth/signup").send({}).expect(400);
});

it("return a 200 on login successful on signin",async () => {
     await request(app).post("/api/auth/signup").send({
        name: "brokiT",
        lastName: "Using Test",
        email: "test@supertest.com",
        password: "1234567"
    }).expect(201);

    return await request(app).post("/api/auth/signin").send({
        email: "test@supertest.com",
        password: "1234567"
    }).expect(200);
});

it("return a 200 on logout successful on signout", async () => {
    await request(app).post("/api/auth/signup").send({
        name: "brokiT",
        lastName: "Using Test",
        email: "test@supertest.com",
        password: "1234567"
    }).expect(201);

    await request(app).post("/api/auth/signin").send({
        email: "test@supertest.com",
        password: "1234567"
    }).expect(200);
    return await request(app).get("/api/auth/signout").expect(200);
});