export default class AppPage {
    mainContentHeader = "#agenda_view h1";

    verify_headerText_mainContent(text) {
        cy.get(this.mainContentHeader).should("contain", text);
    }
}
