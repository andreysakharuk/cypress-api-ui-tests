export default class HomePage {
    open_homePage() {
        cy.visit(Cypress.config("baseUrl"));
    }

    click_loginButton_header() {
        cy.contains("Log in").parent().click();
    }
}
