import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "./../../app";

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
        res.should.have.status(200);
        res.body.should.have.property("status");
        res.body.should.have.property("data");

        done();
      });
  });
});
