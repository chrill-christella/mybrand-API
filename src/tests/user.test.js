import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import { expect } from "chai";
chai.should();
chai.use(chaiHttp);

//login

describe("Login", () => {
  it("should be able to login", (done) => {
    chai
      .request(app)
      .post("/api/user/signin")
      .send({ email: "admin@gmail.com", password: "12345678" })
      .end((err, res) => {
        if (err) return done(err);

        expect(res.status).to.equal(200);

        res.body.should.have.property("status").eql("success");
        res.body.should.have.property("successMessage");
        res.body.should.have.property("token");

        done();
      });
  });
});
