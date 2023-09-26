import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Admin Modules  ", () => {
  it("Test Scenario 1] To Check User Interface Of User Page  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Users   Menu Of Left Navigation Panel User should able to Navigate the Users  Page
    // Test Case 2]To Check Users   Menu should be highlighted at Left Navigation Panel
    //Test Cae 3]To  Check Heading should be "Users"
    //Test Cae 4] To Check Breadcrumbs should be Present Having  Naming Conventions should  like "Dashboard>Users "'
    //Test Case 5] To Check for Users Section should  contain  List Of Admins
    cy.xpath('(//span[text()="Users"])[1]').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/users");
    WaitFunction();
    WaitFunction();
    var highlighted = cy
      .xpath('(//span[text()="Users"])[1]')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('//ol[@class="breadcrumb m-0"]')
      .contains("Users");
    console.log("Breadcrumbs", Breadcrumbs);

    WaitFunction();

    // To Check To Show the List Of Active Users and Inactive Users
    cy.xpath('(//span[text()="Active Users"])[1]').contains("Active Users");
    cy.xpath('(//span[text()="Inactive Users"])[1]').contains("Inactive Users");

    WaitFunction();
    //  To Check To Show UserName, Role , Admin , Status
    cy.xpath('(//div[text()="Username"])[1]').contains("Username");
    WaitFunction();
    cy.xpath('(//div[text()="Role"])[1]').contains("Role");
    cy.xpath('(//div[text()="Admin"])[1]').contains("Admin");
    WaitFunction();
    cy.xpath('(//div[text()="Status"])[1]').contains("Status");

    // WaitFunction();
  });
});
