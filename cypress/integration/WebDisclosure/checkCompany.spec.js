import demoClientPage from "../../elements/pages/demoClientPage";
import meetingDetailPage from "../../elements/pages/meetingDetailPage";

describe("Code challenge 2021", () => {

    const demoClient = new demoClientPage();
    const meetingDetail = new meetingDetailPage();
    const testWebsite = Cypress.env('DemoWebsite')
    const testActivisionName = "Activision Blizzard Inc"

    context('Tests', () => {
        beforeEach(() => {
            visitWebsite(testWebsite)
        })

        // Abstract test cases
        it('Check Activision', () => {
            searchBarForCompanyShouldBeVisible()
            clickInTheCompanySearchBar()
            searchCompanyInput(testActivisionName)
            clickOnFirstCompanyMatch()
            landingOnTheClientMeetingPage(testActivisionName)
        })

    })

// Functionalities
    function visitWebsite(website) {
        cy.visit(website)
    }

    function searchBarForCompanyShouldBeVisible() {
        demoClient.searchBarForCompany().should('be.visible')
    }

    function clickInTheCompanySearchBar() {
        demoClient.searchBarForCompany().click()
    }

    function searchCompanyInput(search) {
        demoClient.searchBarForCompany().type(search)
    }

    function clickOnFirstCompanyMatch() {
        demoClient.firstResultForCompanySearch().click()
    }

    function landingOnTheClientMeetingPage(companyName) {
        cy.get(meetingDetail.companyName().contains(companyName))
    }

})