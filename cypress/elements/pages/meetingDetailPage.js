class meetingDetailPage {

    companyNameID = "#detail-issuer-name"

    constructor() {
    }

    companyName() {
        return cy.get(this.companyNameID);
    }
}

export default meetingDetailPage;