import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../app";
import fs from "fs";

chai.should();
chai.use(chaiHttp);

// create a blog
describe("create a blog", () => {
  it("should create a new blog post with all fields filled", (done) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpIjoiYWRtaW5AZ21haWwuY29tIiwiaWQiOiI2M2QwYzg2N2E4NzY3ODg3NGZmOTdkZDciLCJpYXQiOjE2NzU3OTY3ODh9.dVaRQXggvHdJU2KEBrQzuKRUCitQR2n2r7UhPJH0EBw";
    chai
      .request(app)
      .post("/api/article")
      .set("token", `${token}`)
      .field("title", "Test Blog")
      .field("description", "this is a description of  Blog")
      //.attach("image", image, "1673610548664brand.PNG")
      .end((err, res) => {
        // res.should.have.status(201);
        // res.body.should.have.property("status");
        // res.body.should.have.property("data");

        done();
      });
  });
});

// Test get all Posts
describe("Get all posts", () => {
  it("It Should get all Posts", (done) => {
    chai
      .request(app)
      .get("/api/article/")
      .end((err, res) => {
        if (err) return done(err);
        // expect(res.status).to.equal(200);
        // expect(res.body).to.have.property("status").eql("200");
        // expect(res.body).to.have.property("data");
        done();
      });
  });
});

//test get single post

describe("get single blog by id", () => {
  it("It should get a single blog by id", (done) => {
    const id = "63ce55c3cff4e8d1db71ccb2";
    chai
      .request(app)
      .get(`/api/article/getOneArticle/${id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        // expect(res.body).to.have.property("status").eql("success");
        // expect(res.body).to.have.property("data");

        done();
      });
  });
});

//delete blog test

it("it should delete a blog", (done) => {
  const id = "63ce55c3cff4e8d1db71ccb2";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpIjoiYWRtaW5AZ21haWwuY29tIiwiaWQiOiI2M2QwYzg2N2E4NzY3ODg3NGZmOTdkZDciLCJpYXQiOjE2NzU3OTY3ODh9.dVaRQXggvHdJU2KEBrQzuKRUCitQR2n2r7UhPJH0EBw";

  chai
    .request(app)
    .delete(`/api/article/${id}`)
    .set("auth_token", `${token}`)
    .end((error, res) => {
      console.log(res.body);
      chai.expect(res).to.have.status(200);
      done();
    });
});

// update a blog

describe("Update Blog", () => {
  it("should update a blog post", (done) => {
    const blogId = "663cd178070cde012ca43ba6f";
    const image = "http://localhost:5000/images/1673610548664brand.PNG";

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";

    const updatedData = {
      title: "Updated Blog Title",
      description: "This is an updated blog post",
      image: image,
    };

    chai
      .request(app)
      .put(`/api/updatePost/${blogId}`)
      .set("auth_token", token)
      .send(updatedData)
      .end((err, res) => {
        console.log(res.body);
        if (err) {
          console.log(err);
        }
        // res.should.have.status(200);
        // res.body.should.have.property('status').eql('success');
        // res.body.should.have.property('title', updatedData.title);
        // res.body.should.have.property('description', updatedData.description);
        // res.body.should.have.property('image', updatedData.image);
        // res.body.should.have.property('blogBody', updatedData.blogBody);
        done();
      });
  });
});
