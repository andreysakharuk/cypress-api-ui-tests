export default class AppPage {
    mainContentHeader = "h1";

    verify_headerText_mainContent(text) {
        cy.get(this.mainContentHeader).should("contain", text);
    }
}
