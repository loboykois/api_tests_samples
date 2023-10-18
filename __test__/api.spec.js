// import request from "supertest";
const request = require("supertest");
// add entry point for app (web API)
const baseUrl = "https://vpic.nhtsa.dot.gov";
// full path with parameters - https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json

// create dumb test suite with dumb test case
describe("Vehicles API", () => {
  it("should contain Volkswagen auto", async () => {
    const response = await request(baseUrl).get(
      "/api/vehicles/getallmakes?format=json"
    );

    const results = response.body.Results.find(
      (e) => e["Make_Name"] === "VOLKSWAGEN"
    );

    expect(response.statusCode).toBe(200);
    expect(results).toMatchObject({
      Make_ID: 482,
      Make_Name: "VOLKSWAGEN",
    });
  });
});
