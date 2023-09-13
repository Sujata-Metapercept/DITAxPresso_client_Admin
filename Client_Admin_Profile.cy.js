import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/WaitFunction.cy";

describe("To Verify Profile field  ", () => {
  it("Test Scenario 1] To Check User Interface Of Profile Field ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Profile Menu Of Left Navigation Panel User should able to Navigate the Profile Page
    // Test Case 2]To Check Profile Menu should be highlighted at Left Navigation Panel
    //Test Cae 3]To  Check Heading should be "Profile"
    //Test Cae 4] To Check Breadcrumbs should be Present Naming Conventions should  like "Dashboard>Profile"'
    //Test Case 5] To Check for Profile contain "Name", "Email Address", "Contact" filed of Resepective login user
    //Test Case 6] To Check Change Password Field should be present

    cy.xpath('//*[@id="side-menu"]/li[7]/a/div/i').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/profile");
    var highlighted = cy
      .xpath('//*[@id="side-menu"]/li[7]/a/div/i')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('//div[@class="page-title-right"]')
      .contains("Profile");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//h5[text()="Profile"]').contains("Profile");
    cy.xpath('//h6[text()="Name"]').contains("Name");
    cy.xpath('//h6[text()="Email Address"]').contains("Email Address");
    cy.xpath('//h6[text()="Contact Number"]').contains("Contact Number");
    cy.xpath('//button[text()=" Change Password "]').contains(
      "Change Password"
    );
  });
});
