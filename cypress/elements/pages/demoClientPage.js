class DemoClientPage {

    searchBarForCompanyElementID = "#kendo-Search-for-company"

    constructor() {
    }

    searchBarForCompany() {
        return cy.get(this.searchBarForCompanyElementID);
    }

}

export default DemoClientPage;