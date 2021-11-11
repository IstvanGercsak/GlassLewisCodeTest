import demoClientPage from "../../elements/pages/demoClientPage";

describe("Code challenge 2021", () => {

    let demoClient = new demoClientPage();
    const testWebsite = Cypress.env('DemoWebsite')
    const testCountry = "Belgium"

    context('Tests', () => {
        beforeEach(() => {
            visitWebsite(testWebsite)
        })

        // Abstract test cases

        it('Check Companies from Belgium', function () {
            searchBarForCountryShouldBeVisible()
            clickInTheCountrySearchBar()
            searchCountryInput(testCountry)
            clickOnFirstMatch()
            clickOnCountryUpdateButton()
            tableContainsCountry(testCountry)
        })
    })

    function visitWebsite(website) {
        cy.visit(website)
    }

    function searchBarForCountryShouldBeVisible() {
        demoClient.searchBarForCountry().should('be.visible')
    }

    function clickInTheCountrySearchBar() {
        demoClient.searchBarForCountry().click()
    }

    function searchCountryInput(element) {
        demoClient.searchBarForCountry().type(element)
    }

    function clickOnFirstMatch() {
        demoClient.firstResultForCountry().click()
    }

    function clickOnCountryUpdateButton() {
        demoClient.countryUpdateButton().click({force: true})
    }

    function tableContainsCountry(country) {
        cy.get('table').contains('td', country)
    }
})