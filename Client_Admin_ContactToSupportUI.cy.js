import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Contact to Suport field  ", () => {
  it("Test Scenario 1] To Check User Interface Of Contact to Support ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Contact To Support  Menu Of Left Navigation Panel User should able to Navigate the Contact to Support  Page
    // Test Case 2]To Check Contact To Support   Menu should be highlighted at Left Navigation Panel
    //Test Cae 3]To  Check Heading should be "To Check Contact To Support "
    //Test Cae 4] To Check Breadcrumbs should be Present Having  Naming Conventions should  like "Dashboard>Contact To Support  "'
    //Test Case 5] To Check for Contact To Support  should  contain "Contact Us" form , which contain "Organization Name", "Username","Write message",
    cy.xpath('//*[@id="side-menu"]/li[8]/a/span').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/contact-to-support");
    var highlighted = cy
      .xpath('//*[@id="side-menu"]/li[8]/a/span')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('//ol[@class="breadcrumb m-0"]')
      .contains("Contact To Support");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//h2[text()=" Contact us "]').contains("Contact us");
    cy.xpath(
      '//*[@id="layout-wrapper"]/div[2]/div/div/div/div[2]/div/div/form/p'
    ).contains(" Do you have any questions?");

    cy.xpath('//input[@id="name"]');
    cy.xpath('//input[@id="username"]');
    cy.xpath('//textarea[@id="message"]');
    cy.xpath('//button[text()=" Send Message "]').contains("Send Message");
  });
  
});
