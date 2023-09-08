describe("Client Admin Login UI Testing ", () => {
  it('Test Scenario 1] To check client Admin  Contain Heading "Welcome Back!", SubHeading=" "Sign in to continue to DITAxPresso Client Admin.".', () => {
    cy.visit("http://localhost:8080/");
    cy.title().should("eq", "DITAxPresso - Client Admin");
    cy.wait(1000);
    // cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
    // cy.xpath('//input[@id="login-password"]').type("meta@321")
    // cy.get('button[type="submit"]').click()

    // To check FASB page Contain Logo of PwC
    //cy.xpath("//img[@src='/assets/media/photos/pwc-logo.png']");

    //Test Case 2] To check  page contain Heading= ""Welcome Back !"
    cy.xpath('//h4[text()="Welcome Back !"]').contains("Welcome Back !");
    cy.wait(1000);
    //Test Case 3] To check FASB page contain  Sub Heading = "Sign in to continue to DITAxPresso Client Admin.".
    cy.xpath(
      "//p[text()=' Sign in to continue to DITAxPresso Client Admin. ']"
    ).contains("Sign in to continue to DITAxPresso Client Admin. ");
    cy.wait(1000);

    //Test Case 4] To Check Email Address Field should conation placeholder "Email", Password Field Should Contain "Password"
    cy.xpath('//label[text()="Email"]').contains("Email");
    cy.wait(1000);
    cy.xpath('//label[text()="Password"]').contains("Password");

    cy.xpath('//label[@class="custom-control-label"]').contains(
      "I agree to the Terms & Conditions and Privacy Policy"
    );

    cy.xpath('//button[@type="submit"]').contains("Log In");

    cy.xpath(
      '//p[text()=" 2023 © ALL RIGHTS RESERVED BY DITAXPRESSO TECHNOLOGY PRIVATE LIMITED "]'
    ).contains(
      "2023 © ALL RIGHTS RESERVED BY DITAXPRESSO TECHNOLOGY PRIVATE LIMITED"
    );
  });
});
