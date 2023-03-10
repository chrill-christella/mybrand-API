import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../app";

chai.should();
chai.use(chaiHttp);

//create message test
describe("Contact Message", () => {
  it("should create a contact message", (done) => {
    chai
      .request(app)
      .post("/api/userMessages")
      .send({
        name: "mesfehandts",
        email: "mesafhneytodsu@gmail.com",
        message: "hi and how are you? I am fine and you?",
      })
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.statusCode).to.equal(201);
        res.body.should.have.property("status").eql(201);
        res.body.should.have.property("data");
        done();
      });
  });
});

//get all message

describe("Get all messages", () => {
  it("It Should get all messages", (done) => {
    chai
      .request(app)
      .get("/api/userMessages/")
      .end((err, res) => {
        // expect(res.statusCode).to.equal(200);
        // res.should.have.status(200);
        // res.body.should.have.property("status");
        // res.body.should.have.property("data");

        done();
      });
  });
});

//get single message

describe("get single message by id", () => {
  it("It should get a single message by id", (done) => {
    const id = "63d3e9c8d2080d1306365659 ";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkQGdtYWlsLmNvbSIsImlkIjoiNjNlNTAwZDlmMDRlZmNhZDc5YmVhOGExIiwiaWF0IjoxNjc1OTUzNTg3fQ.ToOlZRN705jMHHV_b0zGYzC2V6_sd4TEeuGIw6FnkT0";
    chai
      .request(app)
      .get(`/api/userMessages/getOne/${id}`)
      .set("token", `${token}`)
      .end((err, res) => {
        if (err) return done(err);
        //expect(res.status).to.equal(200);
        // expect(res.body).to.have.property("status");
        // expect(res.body).to.have.property("data");
        done();
      });
  });
});
