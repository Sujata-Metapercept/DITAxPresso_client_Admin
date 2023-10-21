import { WaitFunction } from "../ReusableComponents/Function.cy";
import { loginApplication } from "../ReusableComponents/LoginApplication.cy";

describe("Recent Release log Functionality Check Using API", () => {
  it("Should check for  made within 7 days", () => {
    loginApplication();
    WaitFunction();

    const userId = localStorage.getItem("userId");

    cy.log(
      "Calculating the date 7 days ago-sevenDaysAgoReleaseLog.getDate() - 7"
    );
    const sevenDaysAgoReleaseLog = new Date();
    sevenDaysAgoReleaseLog.setDate(sevenDaysAgoReleaseLog.getDate() - 7);
    cy.log("Using API To fetch the RecentRelease Log Within 7 days ,");
    cy.log(
      "GET,http://localhost:8080/ /api/orgadmin/notification/releasedByLastWeek"
    );
    cy.request(
      "GET",
      `http://localhost:8080/ /api/orgadmin/notification/releasedByLastWeek`
    ).then((response) => {
      cy.log(
        "checking API status is equal(200) - ApI successfully Fetching Data"
      );
      expect(response.status).to.equal(200);
      cy.log(
        "To check the Conditions-if (response.body.Release && Array.isArray(response.body.Release)){let RecentRelease = false; response.body.publications.forEach((RecentRelease) => {}const releaseLogDate = new Date(RecentRelease.date);"
      );
      if (response.body.Release && Array.isArray(response.body.Release)) {
        let RecentRelease = false;
        response.body.publications.forEach((RecentRelease) => {
          const releaseLogDate = new Date(RecentRelease.date);

          cy.log(
            "To Check if the publication date is within the last 7 days if (releaseLogDate >= sevenDaysAgoReleaseLog){expect(RecentRelease).to.have.property('title').that.is.a('string').and.not.empty;"
          );
          if (releaseLogDate >= sevenDaysAgoReleaseLog) {
            expect(RecentRelease).to.have.property("title").that.is.a("string")
              .and.not.empty;
            expect(RecentRelease).to.have.property("author").that.is.a("string")
              .and.not.empty;

            RecentRelease = true;
            cy.log("User able to View Recent release log within 7 days");
          }
        });
        WaitFunction();
        WaitFunction();

        expect(RecentRelease).to.be.true;
        console.log("No publications found");
      } else {
        // Log a message if publications property is not found or is not an array
        cy.log(
          "To  Check if a recent publication was found within the last 7 days"
        );
        cy.log("No Recent release log  found");
        console.log("No Recent release log");
        WaitFunction();
        WaitFunction();
      }
    });
  });
});
