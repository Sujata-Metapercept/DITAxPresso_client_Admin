import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Admin Modules  ", () => {
  it("Test Scenario 1] To Check  Search Functionality To Search The  User Based On  Only  Username   ", () => {
    loginApplication();
    WaitFunction();
    //To Check While searching If record Not found User showing validation Message
    // To Check If User Trying To Search The Record Except Username should get an Error Message
    cy.xpath('(//span[text()="Users"])[1]').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/users");
    // WaitFunction();
    WaitFunction();
    

    cy.xpath('(//input[@placeholder="Search Username..."])[1]').type(
      "Vedantika"
    );
    cy.reload();

    cy.xpath('(//input[@placeholder="Search Username..."])[1]').type("sujata");
    cy.xpath(
      '//div[text()="There are no records matching your request"]'
    ).contains("There are no records matching your request");

    WaitFunction();


  });
});
