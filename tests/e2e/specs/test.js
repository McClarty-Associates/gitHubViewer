// https://docs.cypress.io/api/introduction/api.html

describe("Assignment appears at root", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("dt", "Assignment");
  });
});

describe("First user is right.", () => {
  it("Visits the app root url", () => {
    cy.visit("/user/MDQ6VXNlcjM2MTUwODI=");
    cy.contains("h1", "Andy Moravec");
  });
});

describe("First user contains repositories from list", () => {
  it("Visits the app root url", () => {
    cy.visit("/user/MDQ6VXNlcjM2MTUwODI=");
    cy.contains("li", "iSynaptic.Commons");
  });
});
