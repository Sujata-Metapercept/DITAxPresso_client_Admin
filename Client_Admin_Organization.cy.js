import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Organization field  ", () => {
  it("Test Scenario 1] To Check User Interface Of Profile Field ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Organization Menu Of Left Navigation Panel User should able to Navigate the organization  Page
    // Test Case 2]To Check Organization  Menu should be highlighted at Left Navigation Panel
    //Test Cae 3]To  Check Heading should be "Organization"
    //Test Cae 4] To Check Breadcrumbs should be Present Having  Naming Conventions should  like "Dashboard>Organization "'
    //Test Case 5] To Check for Organization should  contain "Organization Name", "Organization Email Address", "Subscription plan","User Details", "VM's Specification", "Subdomain" Contact" field of Resepective login user

    cy.xpath('//*[@id="side-menu"]/li[6]/a/span').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/organization");
    var highlighted = cy
      .xpath('//*[@id="side-menu"]/li[6]/a/span')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('//ol[@class="breadcrumb m-0"]')
      .contains("Organization");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//b[text()="Organization Id :"]').contains("Organization Id");
    cy.xpath('//b[text()="Organization Name : "]').contains(
      "Organization Name"
    );
    cy.xpath('//b[text()="Organization Email Address : "]').contains(
      "Organization Email Address"
    );
    cy.xpath('//a[text()="Subscription Plan"]').contains("Subscription Plan");
    cy.xpath('//a[text()="User Details"]').contains("User Details");
    cy.xpath('//a[contains(text(),"Vm")]').contains("Vm's Specification");
    cy.xpath('//a[text()="Subdomain"]').contains("Subdomain");
  });

  it("Test Scenario 2] To Check To Click  Subscription Plan,User Details,VM's Specification,Subdomain, user should able to display content inside that filed  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Subdomain user should able to View Subscription Plan details
    // Test Case 2]To Check  To Click User Details should able to  View  User details
    // Test Case 3]To Check  To Click VM's Specification  should able to view VM's Specification
    // Test Case 4]To Check  To Click SubDomain should able to  View  SubDomain

    cy.xpath('//*[@id="side-menu"]/li[6]/a/span').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/organization");
    var highlighted = cy
      .xpath('//*[@id="side-menu"]/li[6]/a/span')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('//ol[@class="breadcrumb m-0"]')
      .contains("Organization");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//a[text()="Subscription Plan"]').click();
    cy.xpath('//a[text()="User Details"]').click();
    cy.xpath('//a[contains(text(),"Vm")]').click();
    cy.xpath('//a[text()="Subdomain"]').click();
  });
});
