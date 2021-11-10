import demoClientPage from "../../elements/pages/demoClientPage";
import meetingDetailPage from "../../elements/pages/meetingDetailPage";

describe("Code challenge 2021", () => {

    let demoClient = new demoClientPage();
    let meetingDetail = new meetingDetailPage();

    const testActivisionName = "Activision Blizzard Inc"

    context('Tests', () => {
        beforeEach(() => {
            cy.visit('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient')
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