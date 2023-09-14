import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import {
  CurrentPassword,
  NewPassword,
} from "../ReusableComponents/Variable.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe("To Check/Verify Change Password Functionality  ", () => {
  it("Test Scenario 1] To Check/Verify Change Password Functionality  User should able to Change the Password  also able to login With New Changable password ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click "Change Password"
    // Test Case 2]To Check User should able to  Navigate to Change password page with heaading should like "Change Password "
    //Test Case 3]To  Check should able to Enter  "Current Password", "New Password", "Confirm Password " Field on  Respective Input Filed
    //Test Case 4] To Verify/ Check To Click Save Button
    //Test Case 5] To Verify/Check  User able to login With New Changable password
    //Test Case 5] To Check Cancel  button Should be present, Save- To Save the Password,  Cancel -To Cancel And and exit From Change password Interface

    cy.xpath('//*[@id="side-menu"]/li[7]/a/div/i').click();
    WaitFunction();
    cy.xpath('//button[text()=" Change Password "]').click();

    cy.xpath('//input[@name="currentPassword"]').type(CurrentPassword);
    cy.xpath('//input[@placeholder="Enter new password"]').type(NewPassword);
    cy.xpath('//input[@id="password_confirmation"]').type(NewPassword);
    cy.xpath('//button[text()=" Save "]').click();
    //cy.xpath('//div[text()="Password reset successfully "]').contains(
    //   "Password reset successfully"
    // );
    cy.url().should("eq", "http://localhost:8080/profile");

    cy.xpath('//a[text()=" Logout "]').click({ force: true });
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/");

    loginApplication();
    cy.wait(3000);
  });

  it("Test Scenario 2] To Check/Verify Change Password Functionality  For  Considering Cancel Button ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click "Change Password"
    // Test Case 2]To Check User should able to  Navigate to Change password page with heaading should like "Change Password "
    //Test Case 3]To  Check should able to Enter  "Current Password", "New Password", "Confirm Password " Field on  Respective Input Filed
    //Test Case 4] To Verify/ Check To Click Cancel  Button
    //Test Case 5] To Verify/Check  User able to To Cancel and exit From Change password Interface

    cy.xpath('//*[@id="side-menu"]/li[7]/a/div/i').click();
    WaitFunction();
    cy.xpath('//button[text()=" Change Password "]').click();
    

    cy.xpath('//input[@name="currentPassword"]').type(CurrentPassword);
    cy.xpath('//input[@placeholder="Enter new password"]').type(NewPassword);
    cy.xpath('//input[@id="password_confirmation"]').type(NewPassword);
    cy.xpath('//button[text()="Cancel"]').click();
    //cy.xpath('//div[text()="Password reset successfully "]').contains(
    //   "Password reset successfully"
    // ); 
    cy.url().should("eq", "http://localhost:8080/profile");
    WaitFunction();
  });
});
