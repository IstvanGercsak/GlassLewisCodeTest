import demoClientPage from "../../elements/pages/demoClientPage";
import meetingDetailPage from "../../elements/pages/meetingDetailPage";

describe("Code challenge 2021", () => {

    let demoClient = new demoClientPage();
    let meetingDetail = new meetingDetailPage();

    const testActivisionName = "Activision Blizzard Inc"
    const testWebsite = Cypress.env('DemoWebsite')

    context('Tests', () => {
        beforeEach(() => {
            visitWebsite(testWebsite)
        })

        // Abstract test cases
        it('Check Activision', () => {
            searchBarShouldBeVisible()
            clickInTheSearchBar()
            searchCompany(testActivisionName)
            clickOnFirstMatch();
            landingOnTheClientMeetingPage(testActivisionName)
        })
    })

// Functionalities

    function visitWebsite(website) {
        cy.visit(website)
    }

    function searchBarShouldBeVisible() {
        demoClient.searchBarForCompany().should('be.visible')
    }

    function clickInTheSearchBar() {
        cy.get('#kendo-Search-for-company').click()
    }

    function searchCompany(search) {
        cy.get('#kendo-Search-for-company').type(search)
    }

    function clickOnFirstMatch() {
        cy.get('#header-search-input-list').click()
    }

    function landingOnTheClientMeetingPage(companyName) {
        cy.get(meetingDetail.companyName().contains(companyName))
    }

})