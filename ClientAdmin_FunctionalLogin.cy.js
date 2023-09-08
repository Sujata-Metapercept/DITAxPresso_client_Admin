describe("Client Admin  Login Functionality", () => {
  it("Test Scenario 1] To check User should able to successfully sign In in Client Admin with Valid Credential", () => {
    cy.visit("http://localhost:8080/");
    cy.title().should("eq", "DITAxPresso - Client Admin");
    cy.wait(1000);
    //Test Case 1] To  Enter  Valid Email Adress and Valid Password
    cy.xpath('//label[text()="Email"]').type("hemal.m@ditaxpresso.com");
    // cy.wait(1000);
    cy.xpath('//label[text()="Password"]').type("Meta@123");
    cy.get('[type="checkbox"]').click({ force: true });

    cy.xpath('//button[@type="submit"]').click();
    cy.wait(3000);
    cy.reload();
    //cy.xpath('//button[@type="button"]').click();
    cy.wait(3000);

    cy.url().should("eq", "http://localhost:8080/dashboard");
    cy.wait(5000);
    cy.go("back");
  });

  //Test Case 2] To  Enter  Email Adress and InValid Password
  it("Test Scenario 1] To check User should not  able to Login In in Client Admin with InValid Credential", () => {
    cy.visit("http://localhost:8080/");
    cy.title().should("eq", "DITAxPresso - Client Admin");
    cy.wait(1000);
    //Test Case 1] To  Enter  Valid Email Adress and InValid Password
    cy.xpath('//label[text()="Email"]').type("hemal.m@ditaxpresso.com");
    // cy.wait(1000);
    cy.xpath('//label[text()="Password"]').type("Meta@12");
    cy.get('[type="checkbox"]').click({ force: true });

    cy.xpath('//button[@type="submit"]').click();
    cy.xpath('//div[text()="Invalid Credentials!"]').contains(
      "Invalid Credentials!"
    );
    cy.reload();
    cy.wait(3000);
    // cy.reload();
    //cy.xpath('//button[@type="button"]').click();
    // cy.wait(3000);

    //cy.url().should("eq", "http://localhost:8080/dashboard");
    // cy.wait(5000);
  });

  //Test Case 3] To  Enter  InEmail Adress and Password
  it("Test Scenario 3] To check User should not  able to Login In in Client Admin with InValid Credential", () => {
    cy.visit("http://localhost:8080/");
    cy.title().should("eq", "DITAxPresso - Client Admin");
    cy.wait(1000);
    //Test Case 1] To  Enter  InValid Email Adress and Valid Password
    cy.xpath('//label[text()="Email"]').type("hemal.m@ditaxpresso.co");
    // cy.wait(1000);
    cy.xpath('//label[text()="Password"]').type("Meta@123");
    cy.get('[type="checkbox"]').click({ force: true });

    cy.xpath('//button[@type="submit"]').click();
    cy.wait(3000);
    cy.reload();
    //cy.xpath('//button[@type="button"]').click();
    cy.wait(3000);

    cy.url().should("eq", "http://localhost:8080/dashboard");
    cy.wait(5000);
  });
});
