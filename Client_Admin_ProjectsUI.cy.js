import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Contact to Suport field  ", () => {
  it("Test Scenario 1] To Check User Interface Of Project page  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Project   Menu Of Left Navigation Panel User should able to Navigate the Project  Page
    // Test Case 2]To Check Project  Menu should be highlighted at Left Navigation Panel
    //Test Cae 3]To  Check Heading should be "Projects"
    //Test Cae 4] To Check Breadcrumbs should be Present Having  Naming Conventions should  like "Dashboard>Projects "'
    //Test Case 5] To Check for Projects should  List Of Projects
    cy.xpath('//*[@id="side-menu"]/li[3]/a/span').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/github");
    WaitFunction();
    var highlighted = cy
      .xpath('//*[@id="side-menu"]/li[3]/a/span')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('//ol[@class="breadcrumb m-0"]')
      .contains("Projects");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//h5[text()="Project"]').contains("Project");
    cy.xpath('//span[text()="Refresh"]').click({ force: true });

    WaitFunction();
    WaitFunction();

    // To Check Search functionality 
    cy.xpath('//input[@id="myInput"]').type("it-book");
    WaitFunction();
  });
});
