class DemoClientPage {

    searchBarForCompanyElementID = "#kendo-Search-for-company"
    firstResultForCompanySearchID = "#header-search-input-list"
    searchBarForCountryID = "#txt-multiselect-static-search-CountryFilter"
    firstResultForCountryID = "#multiselect-static-content-CountryFilter"
    countryUpdateButtonID = "#btn-update"

    constructor() {
    }

    searchBarForCompany() {
        return cy.get(this.searchBarForCompanyElementID);
    }

    firstResultForCompanySearch() {
        return cy.get(this.firstResultForCompanySearchID);
    }

    searchBarForCountry() {
        return cy.get(this.searchBarForCountryID);
    }

    firstResultForCountry() {
        return cy.get(this.firstResultForCountryID);
    }

    countryUpdateButton() {
        return cy.get(this.countryUpdateButtonID);
    }
}

export default DemoClientPage;