import demoClientPage from "../../elements/pages/demoClientPage";

describe("Code challenge 2021", () => {

    const demoClient = new demoClientPage();
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
        cy.get('table').should('be.visible').contains('td', country)
        cy.get('table>tbody>tr')
            .each(function ($row) {
                    cy.wrap($row).within(function () {
                        cy.get('td')
                            .each(function ($cellData, index) {
                                // Country is in the 6. Columns with the index of 5
                                if (index === 5) {
                                    expect($cellData.text()).equal(country)
                                }
                            })
                    })
                }
            )

    }
})