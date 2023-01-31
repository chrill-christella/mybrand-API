import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "./../../app";

chai.should();
chai.use(chaiHttp);

//create comments test
describe("comments", () => {
  it("should create  comments", (done) => {
    chai
      .request(app)
      .post("/api/comment/")
      .send({
        Comment: "hi and how are you? I am fine and you?",
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

// //get all comments

// describe("Get all comments", () => {
//   it("It Should get all comments", (done) => {
//     chai
//       .request(app)
//       .get("/api/comment")
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.have.property("status");
//         res.body.should.have.property("data");

//         done();
//       });
//   });
// });
