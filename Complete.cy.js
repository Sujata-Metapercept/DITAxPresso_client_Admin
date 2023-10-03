import { WaitFunction } from "../ReusableComponents/Function.cy";
import {
  ConfirmPassword,
  NewPassword,
  updatef_username,
  update_githubEmail,
  CurrentPassword,
} from "../ReusableComponents/Variable.cy";
import { loginApplication } from "../ReusableComponents/LoginApplication.cy";

describe("Client Admin  Login Functionality", () => {
  it("Test Scenario 4] To check User should able to successfully sign In in Client Admin with Valid Credential should able to View Dashbord page  ", () => {
    cy.visit("http://localhost:8080/");
    // cy.visit("https://dxpresso-cadmin.techpubconnect.org/");
    cy.title().should("eq", "DITAxPresso - Client Admin");
    WaitFunction();
    //Test Case 4] To  Enter  Valid Email Adress and Valid Password should be successfully Login with Navigate to Next Page that is dashboard page
    cy.xpath('//label[text()="Email"]').type("hemal.m@ditaxpresso.com");
    cy.xpath('//label[text()="Password"]').type("Meta@123");
    cy.get('[type="checkbox"]').click({ force: true });
    cy.xpath('//button[@type="submit"]').click();
    WaitFunction();
    cy.reload();
    cy.wait(3000);
    cy.url().should("eq", "http://localhost:8080/dashboard");
    WaitFunction();

    //TestCase1]  To Check To Click Refresh Button,
    //Test Case 2] To Check  should able to Rrefresh The File Count
    cy.xpath('//button[text()="Refresh"]').click({ force: true });
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/dashboard");
    WaitFunction();
    WaitFunction();

    ///Project  Modules

    // Test Case 1]To Check To Click Project Details Button To Navigate to The New  Next Page To View Details Such as "Users",  "commit","Release"    Menu Of Left Navigation Panel User should able to Navigate the Project  Page
    // Test Case 2]To Check  for User  filed contain list of github username and its Role
    //Test Cae 3]To  Check to Search github username with the help of search button

    /* cy.xpath('(//span[text()="Projects"])[1]').click({ force: true });
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/github");

    WaitFunction();
    WaitFunction();
    var highlighted = cy
      .xpath('(//span[text()="Projects"])[1]')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('//ol[@class="breadcrumb m-0"]')
      .contains("Projects");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath(
      '//*[@id="layout-wrapper"]/div[2]/div/div/div/div[2]/div/div[2]/div[1]/a/div/div[2]/a'
    ).click();
    cy.url().should(
      "eq",
      "http://localhost:8080/github/repo/64e84f958f096d25e4431454"
    );
    WaitFunction();
    cy.xpath('//*[@id="__BVID__28___BV_tab_button__"]/span[1]').click({
      force: true,
    });
    WaitFunction();

    cy.xpath('//*[@id="__BVID__28"]/div/div[1]/h1');
    WaitFunction();
    cy.xpath('//div[text()="Github Username"]').contains("Github Username");
    WaitFunction();
    cy.xpath('//div[text()="Role"]').contains("Role");
    cy.xpath('//input[@placeholder="Search Github Username..."]').type(
      "vedantika"
    );
    WaitFunction();

    cy.xpath('//*[@id="__BVID__38"]/tbody/tr/td/div/div/div').contains(
      "There are no records matching your request"
    );

    // To Check To Click "Commit" To get The Commit section
    cy.xpath('//*[@id="__BVID__48___BV_tab_button__"]/span[2]').click({
      force: true,
    });

    cy.xpath('//h1[text()="COMMIT HISTORY"]').click({
      force: true,
    });
    WaitFunction();
    cy.xpath('//div[text()="Commit Message"]').contains("Commit Message");
    cy.xpath('//div[text()="Committed By"]').contains("Committed By");
    cy.xpath('//div[text()="Date and Time"]').contains("Date and Time");
    WaitFunction();
    //To Check to search the commit message with the help of
    cy.xpath('//input[@placeholder="Search Commit Message..."]').type(
      "Testing"
    );
    WaitFunction();
    WaitFunction();
    cy.reload();
    WaitFunction();
    // To Check Commit Message Is not Present While Searching the Project User should get the error Message
    cy.xpath('//*[@id="__BVID__48___BV_tab_button__"]/span[2]').click({
      force: true,
    });
    cy.xpath('//div[text()="Commit Message"]').contains("Commit Message");
    cy.xpath('//div[text()="Committed By"]').contains("Committed By");
    cy.xpath('//div[text()="Date and Time"]').contains("Date and Time");
    cy.xpath('//input[@placeholder="Search Commit Message..."]').type(
      "APITest"
    );
    cy.xpath(
      '(//div[text()="There are no records matching your request"])[1]'
    ).contains("There are no records matching your request");
    WaitFunction();

    //To Check To Click "Release"to get Release section
    cy.xpath('(//span[text()="Release"])[2]').click({
      force: true,
    });
    cy.xpath('//div[text()="Release Title"]').contains("Release Title");
    cy.xpath('//div[text()="Output format"]').contains("Output format");
    cy.xpath('//div[text()="Release By"]').contains("Release By");
    WaitFunction();
    cy.xpath('//input[@placeholder="Search Release Name..."]').type("Testing");
    cy.xpath(
      '(//div[text()="There are no records matching your request"])[2]'
    ).contains("There are no records matching your request");
    WaitFunction();

    /// Admin Modules

    cy.xpath('(//span[text()="Admins"])[1]').click({ force: true });

    cy.url().should("eq", "http://localhost:8080/admins");
    WaitFunction();
    WaitFunction();
    var highlighted = cy
      .xpath('//*[@id="side-menu"]/li[4]/a/span')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('(//span[text()="Admins"])[1]')
      .contains("Admin");
    console.log("Breadcrumbs", Breadcrumbs);

    // To Check To Search The Admins With the help of  Search Button  to Get the Respective Admin

    cy.xpath('//input[@placeholder="Search Name..."]').type("hemal");
    WaitFunction();
    cy.reload();

    //To Check While searching If record Not found User showing validation Message

    cy.xpath('//input[@placeholder="Search Name..."]').type("sujata");
    cy.xpath(
      '//div[text()="There are no records matching your request"]'
    ).contains("There are no records matching your request");

    WaitFunction();
    cy.reload();
    WaitFunction();
    // To check To Update the status for ADmin

    cy.xpath('//td[@aria-colindex="6"]').scrollIntoView({ x: 100, y: 0 });
    WaitFunction();
    WaitFunction();
    cy.xpath(
      '//button[@class="btn dropdown-toggle btn-white arrow-none card-drop"]'
    ).click({ force: true });
    WaitFunction();

    var updatestatus = cy
      .xpath('(//a[@class="dropdown-item"])[2]')
      .click({ force: true });
    WaitFunction();
    cy.xpath('//button[@class="swal2-confirm swal2-styled"]').click({
      force: true,
    });
    cy.xpath('//button[text()="OK"]').click({ force: true });

    WaitFunction();
    WaitFunction();

    // To check To change the  passsword - User should able to change the password

    cy.xpath('//td[@aria-colindex="6"]').scrollIntoView({ x: 100, y: 0 });
    WaitFunction();
    WaitFunction();
    cy.xpath(
      '//button[@class="btn dropdown-toggle btn-white arrow-none card-drop"]'
    ).click({ force: true });
    WaitFunction();

    var updatestatus = cy
      .xpath('(//a[@class="dropdown-item"])[3]')
      .click({ force: true });
    WaitFunction();
    cy.xpath('//input[@id="admin_password"]').type(NewPassword);
    cy.xpath('//input[@id="admin_password_confirmation"]').type(
      ConfirmPassword
    );
    cy.xpath('//button[@type="submit"]').click({ force: true });

    WaitFunction();
    WaitFunction();

    //To check assertion- To Login With New Password
    cy.xpath('//span[@class="d-xl-inline-block ml-1"]').click({ force: true });
    cy.xpath('//a[@class="dropdown-item text-danger"]').click({ force: true });
    WaitFunction();
    loginApplication();
*/
    ///User Modules

    // cy.xpath('(//span[text()="Users"])[1]').click();
    // WaitFunction();
    // cy.url().should("eq", "http://localhost:8080/users");
    // WaitFunction();
    // WaitFunction();

    // cy.xpath('(//input[@placeholder="Search Username..."])[1]').type(
    //   "Vedantika"
    // );
    // WaitFunction();
    // WaitFunction();
    // cy.reload();

    // WaitFunction();

    // cy.xpath('(//input[@placeholder="Search Username..."])[1]').type("omkar");
    // WaitFunction();
    // cy.xpath(
    //   '//div[text()="There are no records matching your request"]'
    // ).contains("There are no records matching your request");
    // WaitFunction();
    // WaitFunction();
    // cy.reload();

    // // To check To Upadte The Active / Inactive state

    // cy.xpath(
    //   '(//button[@class="btn dropdown-toggle btn-white arrow-none card-drop"])[1]'
    // ).click({ force: true });
    // WaitFunction();

    // var updatestatus = cy
    //   .xpath('(//a[@class="dropdown-item"])[3]')
    //   .click({ force: true });
    // WaitFunction();
    // cy.xpath('//button[@class="swal2-confirm swal2-styled"]').click({
    //   force: true,
    // });
    // cy.xpath('//button[text()="OK"]').click({ force: true });

    // WaitFunction();
    // WaitFunction();

    // // To check To Click Change Password Button To  Change The Password

    // cy.xpath(
    //   '(//button[@class="btn dropdown-toggle btn-white arrow-none card-drop"])[1]'
    // ).click({ force: true });
    // WaitFunction();

    // var updatePassword = cy
    //   .xpath('(//a[text()="Change Password"])[1]')
    //   .click({ force: true });
    // WaitFunction();
    // WaitFunction();
    // cy.xpath('//input[@id="a_user_password"]').type(NewPassword);
    // cy.xpath('//input[@id="a_user_password_confirmation"]').type(
    //   ConfirmPassword
    // );
    // cy.xpath('//button[@type="submit"]').click({ force: true });

    // WaitFunction();
    // WaitFunction();

    // To Check User Modules to Edit the User Details - should able to View the Updated details
    /* cy.xpath('(//span[text()="Users"])[1]').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/users");
    WaitFunction();
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

    var FormUsername = cy
      .get("input#updatef_username.form-control")
      .invoke("val")
      .as("username");
    WaitFunction();
    cy.xpath('//input[@id="updatef_username"]').clear().type(updatef_username);
    WaitFunction;
    cy.xpath('//button[@type="submit"]').click({ force: true });
    WaitFunction();
    WaitFunction();

    cy.xpath('(//td[@aria-colindex="1"])[1]').contains(updatef_username);
    WaitFunction();

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
*/

    // To Check To Add Inactive User
    // cy.xpath('(//span[text()="Users"])[1]').click({ force: true });
    // WaitFunction();
    // cy.url().should("eq", "http://localhost:8080/users");
    // WaitFunction();
    // WaitFunction();

    // cy.xpath('(//span[text()="Inactive Users"])[2]').click({ force: true });
    // WaitFunction();
    // // cy.xpath('//a[text()="Edit"]').click({ force: true });

    // WaitFunction();
    // WaitFunction();

    // // Test case-For Inactive User  To click edit Button To add The User
    // cy.xpath(
    //   '(//button[@class="btn editbtn-cust-cls btn-success btn-sm"])[1]'
    // ).click({
    //   force: true,
    // });

    // WaitFunction();
    // WaitFunction();
    // // To check To select the Project
    // cy.get("#addf_collaborators").select("Gurushesh-Metapercept");
    // WaitFunction();

    // //To Check To select The Project
    // cy.get("#addf_projects").click({ force: true });
    // WaitFunction();
    // cy.xpath('(//span[text()="EnableXSmoothDoc"])[1]').click({ force: true });

    // // To check to add the Username
    // var Username_Add = "Gurushesh";
    // cy.get("#addf_username").clear().type(Username_Add);
    // WaitFunction();

    // // To Check To add The Username

    // cy.get("#addf_email").clear().type("pranavs@ditaxpresso.com");
    // WaitFunction();

    // //To check to add the Password
    // cy.get("#addf_password").clear().type("Meta@123");
    // cy.xpath('//div[@type="button"]').click({ force: true });
    // WaitFunction();

    // // To check to add the Username
    // cy.xpath('//span[text()="DocPublisher"]').click({ force: true });
    // WaitFunction();

    // //To check To add The Github Username

    // cy.get("#addf_githubEmail").clear().type("pranavs@ditaxpresso.com");
    // WaitFunction();

    // // To add The Admin
    // cy.get("#addf_admin").select("hemal");
    // WaitFunction();
    // // To check To Save The Form Value by click on Save Button
    // cy.xpath('//button[text()=" Save "]').click({ force: true });
    // WaitFunction();
    // WaitFunction();

    // To Check Assertion The Added Username should be added username
    // cy.xpath('(//td[@aria-colindex="1"])[2]').contains(Username_Add);
    // WaitFunction();

    /// Organization Modules
    cy.xpath('(//span[text()="Organization"])[1]').click();
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/organization");
    var highlighted = cy
      .xpath('(//span[text()="Organization"])[1]')
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

    ///Profile- Change Password
    cy.xpath('(//span[text()="Profile"])[1]').click({ force: true });
    WaitFunction();
    cy.xpath('//button[text()=" Change Password "]').click({ force: true });

    cy.xpath('//input[@name="currentPassword"]').type(CurrentPassword);
    cy.xpath('//input[@placeholder="Enter new password"]').type(NewPassword);
    cy.xpath('//input[@id="password_confirmation"]').type(NewPassword);
    cy.xpath('//button[text()=" Save "]').click({ force: true });
    //cy.xpath('//div[text()="Password reset successfully "]').contains(
    //   "Password reset successfully"
    // );
    cy.url().should("eq", "http://localhost:8080/profile");

    cy.xpath('//a[text()=" Logout "]').click({ force: true });
    WaitFunction();
    cy.url().should("eq", "http://localhost:8080/");

    loginApplication();
    cy.wait(3000);

    /// cy.xpath('(//span[text()="Contact To Support"])[1]').click();
    WaitFunction();
    //cy.url().should("eq", "http://localhost:8080/contact-to-support");
    var highlighted = cy
      .xpath('(//span[text()="Contact To Support"])[1]')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();

    // var Breadcrumbs = cy
    //   .xpath('(//span[text()="Contact To Support"])[2]')
    //   .contains("Contact To Support");
    // console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//input[@id="name"]');
    cy.xpath('//input[@id="username"]');
    cy.xpath('//textarea[@id="message"]').type("Testing");
    cy.xpath('//button[text()=" Send Message "]').click({ force: true });
    // cy.url().should("eq", "http://localhost:8080/contact-to-support");
  });
  it("Test Scenario 2] To Check validation for  Of Contact to Support Form  to Submit Form With blank Filed  ", () => {
    loginApplication();
    WaitFunction();
    // Test Case 1]To Check To Click Contact To Support  Menu Of Left Navigation Panel User should able to Navigate the Contact to Support  Page
    // Test Case 2]To Check User should not able to Submit Contact Us Form Wih One of the field is blank
    //Test Cae 3]To Check  To submmit form with user name feild is blank should get the message "please filled out this fieldd "
    //Test Cae 4] To Check User should not able to Navigate next page with one of the field is empty.

    cy.xpath('(//span[text()="Contact To Support"])[1]').click({ force: true });
    WaitFunction();
    // cy.url().should("eq", "http://localhost:8080/contact-to-support");
    var highlighted = cy
      .xpath('(//span[text()="Contact To Support"])[1]')
      .trigger("mouseover");
    console.log("highlighted", highlighted);
    WaitFunction();
    WaitFunction();

    var Breadcrumbs = cy
      .xpath('(//span[text()="Contact To Support"])[2]')
      .contains("Contact To Support");
    console.log("Breadcrumbs", Breadcrumbs);

    cy.xpath('//input[@id="name"]');
    cy.xpath('//input[@id="username"]');
    cy.xpath('//button[text()=" Send Message "]').click({ force: true });
    //cy.url().should("eq", "http://localhost:8080/contact-to-support");
  });
});
