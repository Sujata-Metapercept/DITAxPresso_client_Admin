import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";
import {
  updatef_username,
  update_githubEmail,
} from "../ReusableComponents/Variable.cy";

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

    // cy.get("form-control").invoke("val").as("username");
    var FormUsername = cy
      .get("input#updatef_username.form-control")
      .invoke("val")
      .as("username");
    WaitFunction();
    cy.xpath('//input[@id="updatef_username"]').clear().type(updatef_username);
    WaitFunction;
    // cy.xpath('//button[@type="submit"]').click({ force: true });
    // WaitFunction();
    // WaitFunction();

    // cy.xpath('(//td[@aria-colindex="1"])[1]').contains(updatef_username);
    // WaitFunction();

    // var FormProject = cy
    //   .get("multiselect__select")
    //   .invoke("val")
    //   .as("username");

    // cy.xpath('//div[@class="multiselect__select"]').click({ force: true });
    // WaitFunction();

    var FormEmailAddress = cy
      .get("input#updatef_userrole_BV_option_3.custom-control-input")
      .invoke("val")
      .as("userrole");
    cy.xpath('(//label[@class="custom-control-label"])[4]').click({
      force: true,
    });
    WaitFunction();
    WaitFunction();

    var FormEmailAddress = cy
      .get("input#updatef_githubEmail.form-control")
      .invoke("val")
      .as("githubEmail");
    cy.xpath('//input[@name="updatef_githubEmail"]')
      .clear()
      .type(update_githubEmail);
    WaitFunction();
    WaitFunction();
  });
});
