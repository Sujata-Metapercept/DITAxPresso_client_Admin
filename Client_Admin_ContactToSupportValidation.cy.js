import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Contact to Suport field  ", () => {
  it("Test Scenario 1] To Check validation for  Of Contact to Support Form  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Contact To Support  Menu Of Left Navigation Panel User should able to Navigate the Contact to Support  Page
    // Test Case 2]To Check  To Enter value in Input Filed
    //Test Cae 3]To Check  To Cliick  To submmit
    //Test Cae 4] To Check User should not able to Navigate next page with oon of the field is empty.

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

    cy.xpath('//input[@id="name"]');
    cy.xpath('//input[@id="username"]');
    cy.xpath('//textarea[@id="message"]').type("Testing");
    cy.xpath('//button[text()=" Send Message "]').click();
    cy.url().should("eq", "http://localhost:8080/contact-to-support");
  });
  it("Test Scenario 2] To Check validation for  Of Contact to Support Form  to Submit Form With blank Filed  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Contact To Support  Menu Of Left Navigation Panel User should able to Navigate the Contact to Support  Page
    // Test Case 2]To Check User should not able to Submit Contact Us Form Wih One of the field is blank
    //Test Cae 3]To Check  To submmit form with user name feild is blank should get the message "please filled out this fieldd "
    //Test Cae 4] To Check User should not able to Navigate next page with oon of the field is empty.

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

    cy.xpath('//input[@id="name"]');
    cy.xpath('//input[@id="username"]');
    cy.xpath('//button[text()=" Send Message "]').click();
    cy.url().should("eq", "http://localhost:8080/contact-to-support");
  });
});
