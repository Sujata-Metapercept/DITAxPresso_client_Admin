import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Verify Edit Functionality for Users Modules  ", () => {
  it("Test Scenario 1] To Check  User should able to Edit all filled Except Github Username  ", () => {
    loginApplication();
    WaitFunction();

    cy.xpath('(//span[text()="Users"])[1]').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/users");
    // WaitFunction();
    WaitFunction();

    cy.xpath(
      '//button[@class="btn dropdown-toggle btn-white arrow-none card-drop"]'
    ).click({ force: true });
    cy.xpath('//a[text()="Edit"]').click({ force: true });
    cy.url().should(
      "eq",
      "http://localhost:8080/userupdate/64e84a518f096d25e443143a"
    );

    WaitFunction();
    WaitFunction();

    //  To Check  All Filed should contain data before editing it except collaborator and Github Username
    // To Check Form  filed should not be empty

    // cy.xpath('(//input[@type="text"])[2]').each(($field) => {
    //   // Check if the field has a value
    //   cy.wrap($field).should("have.value");

    // });
    cy.get("input#updatef_username.form-control").should(
      "have.value",
      "vedantika"
    );
    cy.xpath('//input[@id="updatef_username"]')

      .clear()
      .type("Vedantikaa");
    cy.xpath('//button[@type="submit"]').click({ force: true });
  });
});
