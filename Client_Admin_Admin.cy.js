import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Admin Modules  ", () => {
  it("Test Scenario 1] To Check User Interface Of page  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Admin   Menu Of Left Navigation Panel User should able to Navigate the Admin  Page
    // Test Case 2]To Check Admin   Menu should be highlighted at Left Navigation Panel
    //Test Cae 3]To  Check Heading should be "Admin"
    //Test Cae 4] To Check Breadcrumbs should be Present Having  Naming Conventions should  like "Dashboard>Admin "'
    //Test Case 5] To Check for Admin should  List Of Admins
    cy.xpath('//*[@id="side-menu"]/li[3]/a/span').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/admins");
    WaitFunction();
    WaitFunction();
    var highlighted = cy
      .xpath('//*[@id="side-menu"]/li[3]/a/span')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath(
        '//*[@id="layout-wrapper"]/div[2]/div/div/div/div[1]/div[2]/div/ol'
      )
      .contains("Projects");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//h5[text()="Admins"]').contains("Admins");
    //To Check To Refresh the Project by clicking on "Refresh" Button
    cy.xpath('//span[text()="Refresh"]').click({ force: true });

    WaitFunction();
    WaitFunction();
    // To Check To Show Name, Github Username , Email , Contact, Email Verified , Status
    cy.xpath('//div[text()="Github Username"]').contains("Github Username");
    cy.xpath('//div[text()="Name"]').contains("Name");
    cy.xpath('//div[text()="Email"]').contains("Email");
    cy.xpath('//div[text()="Contact"]').contains("Contact");
    cy.xpath('//div[text()="Status"]').contains("Status");

    // To Check To Search The Admins With the help of  Search Button  to Get the Respective Admin

    cy.xpath('//input[@placeholder="Search Name..."]').type("hemal");

    // To Check While searching If recoerd Not found User showing validation Message
    // cy.xpath('//input[@placeholder="Search Name..."]').type("sujata");
    // cy.xpath('//div[text()="There are no records matching your request"]').contains("There are no records matching your request");
  });
});
