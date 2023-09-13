describe("Forgot Password Functionality ", () => {
  it('Test Scenario 1]  To  Verify/check Forgot Password Functionality  ".', () => {
    cy.visit("http://localhost:8080/");
    // TEst Case 1] To Check User should able to Click "Forgot Your password?" Link To Perform Forgot Password Functionality
    cy.xpath('//a[text()=" Forgot your password? "]').click();

    //Test Case 1] To Check User should able  to Navigate the Forgot Password Page After click On Forgot Password Link
    cy.url().should("eq", "http://localhost:8080/forgot-password");
    //Test Case 2] To Check Heading should be like "Reset Password", subheading should be like "Reset your password to DITAxPresso."
    cy.xpath('//h4[text()="Reset Password"]').contains("Reset Password");
    cy.xpath('//p[text()="Reset your password to DITAxPresso."]');
    //Test Case 3]  To Check User should get The Message on Page such as  "Enter your Email and instructions will be sent to you!""
    cy.xpath(
      '//div[text()="Enter your Email and instructions will be sent to you!"]'
    );

    // TestCase 4] To Check To Enter Valid EmailAddress and click to "Send Password Reset Email"
    cy.xpath('//input[@placeholder="Enter email"]').type(
      "hemal.m@ditaxpresso.com"
    );
    cy.xpath('//button[@type="submit"]').click({ force: true });
    cy.wait(4000);
    //TestCase 5] To Check User should able to get Message after submitting mail
    cy.xpath(
      '//div[contains(text(),"Check your email for a link to reset your password")]'
    ).contains("Check your email for a link to reset your password");
    cy.wait(8000);
    //Test Case 6] After forgottig To Check should  able to Click on Login In Button to login With New Password
    cy.xpath('//a[text()=" Log In "]').click({ force: true });
    cy.wait(8000);
    cy.url().should("eq", "http://localhost:8080/");
  });

  it('Test Scenario 2]  To  Verify/check to Get The Error message with Invalid  email  address  ".', () => {
    cy.visit("http://localhost:8080/");
    // TEst Case 1] To Check User should able to Click "Forgot Your password?" Link To Perform Forgot Password Functionality
    cy.xpath('//a[text()=" Forgot your password? "]').click();

    //Test Case 1] To Check User should able  to Navigate the Forgot Password Page After click On Forgot Password Link
    cy.url().should("eq", "http://localhost:8080/forgot-password");
    //Test Case 2] To Check Heading should be like "Reset Password", subheading should be like "Reset your password to DITAxPresso."
    cy.xpath('//h4[text()="Reset Password"]').contains("Reset Password");
    cy.xpath('//p[text()="Reset your password to DITAxPresso."]');
    //Test Case 3]  To Check User should get The Message on Page such as  "Enter your Email and instructions will be sent to you!""
    cy.xpath(
      '//div[text()="Enter your Email and instructions will be sent to you!"]'
    );

    // TestCase 4] To Check To Enter InValid EmailAddress and click to "Send Password Reset Email"
    cy.xpath('//input[@placeholder="Enter email"]').type(
      "hemal.m@ditaxpressocom"
    );
    cy.xpath('//button[@type="submit"]').click({ force: true });
    cy.wait(4000);
    //TestCase 5] To Check User should able to get Error  Message after submitting mail
    cy.xpath('//p[text()=" The email field must be a valid email "]').contains(
      "The email field must be a valid email "
    );
    cy.wait(8000);
    cy.url().should("eq", "http://localhost:8080/forgot-password");
  });
  it('Test Scenario 3]  To  Verify/check to Get The Error message with Blank  Email Address Submitting ".', () => {
    cy.visit("http://localhost:8080/");
    // TEst Case 1] To Check User should able to Click "Forgot Your password?" Link To Perform Forgot Password Functionality
    cy.xpath('//a[text()=" Forgot your password? "]').click();

    //Test Case 1] To Check User should able  to Navigate the Forgot Password Page After click On Forgot Password Link
    cy.url().should("eq", "http://localhost:8080/forgot-password");
    //Test Case 2] To Check Heading should be like "Reset Password", subheading should be like "Reset your password to DITAxPresso."
    cy.xpath('//h4[text()="Reset Password"]').contains("Reset Password");
    cy.xpath('//p[text()="Reset your password to DITAxPresso."]');
    //Test Case 3]  To Check User should get The Message on Page such as  "Enter your Email and instructions will be sent to you!""
    cy.xpath(
      '//div[text()="Enter your Email and instructions will be sent to you!"]'
    );

    // TestCase 4] To Check To Get Error message with blank  EmailAddress submiiting

    cy.xpath('//button[@type="submit"]').click({ force: true });
    cy.wait(4000);
    //TestCase 5] To Check User should able to get Error  Message after  blank submitting mail
    cy.xpath('//p[text()=" The email field is required "]').contains(
      "The email field is required"
    );
    cy.wait(8000);
    cy.url().should("eq", "http://localhost:8080/forgot-password");
  });
});
