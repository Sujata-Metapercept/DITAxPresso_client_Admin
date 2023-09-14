import { loginApplication } from "../ReusableComponents/LoginApplication.cy";
import {
  ConfirmPassword,
  CurrentPassword,
  NewPassword,
} from "../ReusableComponents/Variable.cy";
import { WaitFunction } from "../ReusableComponents/Function.cy";

describe(" To Check/Verify Validation Functionality   ", () => {
  it("Test Scenario 1] To Check/Verify  For Change Password Input Validation  Functionality  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click "Change Password"
    // Test Case 2]To Check User should able to  Navigate to Change password page with heaading should like "Change Password "
    //Test Cae 3]To  Check should able to View  "Current Password", "New Password", "Confirm Password " Field on Page
    // Test Case 4]To Check If One of The Inut Field is Balnk/missing User should get the Error Message
    //a] If Current Password Filed is Blank User should get the Error Message "The current password field is required"
    //b]If New  Password Filed is Blank User should get the Error Message "The New  password field is required"
    //c] If confirm  Password Filed is Blank User should get the Error Message "The password confirmation field does not match"
    //Test Cae 4]

    function ChangePassword() {
      cy.xpath('//button[text()=" Change Password "]').click();
      cy.xpath('//h5[text()="Change Password"]');
      // cy.reload();
    }

    cy.xpath('//*[@id="side-menu"]/li[7]/a/div/i').click();
    WaitFunction();
    ChangePassword();

    //If NewPassword and Confirm Pasword Field is filled and Current Password Filed is Empty/blank
    cy.xpath('//input[@placeholder="Enter new password"]').type(NewPassword);
    cy.xpath('//input[@id="password_confirmation"]').type(NewPassword);
    //cy.xpath('//input[@name="currentPassword"]');
    cy.xpath('//button[text()=" Save "]').click();
    cy.xpath('//p[text()=" The current password field is required "]').contains(
      "The current password field is required "
    );
    WaitFunction();
    cy.reload();
    ChangePassword();

    //If Current password  and Confirm Pasword Field is filled and New Password Filed is Empty/blank
    cy.xpath('//input[@name="currentPassword"]').type(CurrentPassword);
    cy.xpath('//input[@id="password_confirmation"]').type(NewPassword);
    //  cy.xpath('//input[@placeholder="Enter new password"]');
    cy.xpath('//button[text()=" Save "]').click();
    cy.xpath('//span[text()="The new password field is required"]').contains(
      "The new password field is required"
    );
    cy.xpath(
      '//p[text()=" The password confirmation field does not match "]'
    ).contains("The password confirmation field does not match");

    WaitFunction();
    cy.reload();
    ChangePassword();

    //If Current password  and new Pasword Field is filled and Confirm Password Filed is Empty/blank
    cy.xpath('//input[@name="currentPassword"]').type(CurrentPassword);
    cy.xpath('//input[@placeholder="Enter new password"]').type(NewPassword);
    // cy.xpath('//input[@id="password_confirmation"]');
    cy.xpath('//button[text()=" Save "]').click();
    cy.xpath(
      '//p[text()=" The password confirmation field does not match "]'
    ).contains("The password confirmation field does not match");

    WaitFunction();
    cy.reload();
    ChangePassword();

    cy.xpath('//input[@name="currentPassword"]');
    cy.xpath('//input[@placeholder="Enter new password"]');
    cy.xpath('//input[@id="password_confirmation"]');
    cy.xpath('//button[text()=" Save "]').click();
    cy.xpath('//p[text()=" The current password field is required "]').contains(
      "The current password field is required "
    );
    cy.xpath('//span[text()="The new password field is required"]').contains(
      "The new password field is required"
    );
    cy.xpath(
      '//p[text()=" The password confirmation field does not match "]'
    ).contains("The password confirmation field does not match");

    WaitFunction();
    cy.reload();
    ChangePassword();

    // cy.xpath('//button[text()=" Save "]');

    // cy.xpath('//button[text()="Cancel"]');
    //cy.xpath('//div[text()="Password reset successfully "]').contains(
    //   "Password reset successfully"
    // );
  });

  it("Test Scenario 2] To Check/Verify  For Change Password Input Validation  Functionality  ", () => {
    //  Test Case 1]To Check To Click "Change Password"
    // Test Case 2]To Check User should able to  Navigate to Change password page with heaading should like "Change Password "
    //Test Cae 3]To  Check should able to View  "Current Password", "New Password", "Confirm Password " Field on Page
    // Test Case 4]To  Check If New Password and  Confirmation Password is not same user should get an error message "The password confirmation field does not match"

    loginApplication();
    WaitFunction();
    function ChangePassword() {
      cy.xpath('//button[text()=" Change Password "]').click();
      cy.xpath('//h5[text()="Change Password"]');
      // cy.reload();
    }

    // Test Case 1]To Check To Click "Change Password"
    cy.xpath('//*[@id="side-menu"]/li[7]/a/div/i').click();
    WaitFunction();
    ChangePassword();
    cy.xpath('//input[@name="currentPassword"]').type(CurrentPassword);
    cy.xpath('//input[@placeholder="Enter new password"]').type(NewPassword);
    cy.xpath('//input[@id="password_confirmation"]').type(NewPassword);
    WaitFunction();

    if (NewPassword == ConfirmPassword) {
      console.log("Pass");
    } else {
      console.log("Fail-The password confirmation field does not match");
    }
    WaitFunction();
  });
});
