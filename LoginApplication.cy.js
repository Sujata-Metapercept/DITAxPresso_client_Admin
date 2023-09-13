export function loginApplication() {
  cy.visit("http://localhost:8080/");

  cy.xpath('//label[text()="Email"]').type("hemal.m@ditaxpresso.com");
  cy.xpath('//label[text()="Password"]').type("Meta@123");
  cy.wait(3000);
  cy.get('[type="checkbox"]').click({ force: true });
  cy.wait(3000);
  cy.xpath('//button[@type="submit"]').click({ force: true });
  cy.wait(6000);
  cy.reload();
  // cy.wait(3000);
  cy.url().should("eq", "http://localhost:8080/dashboard");
}
