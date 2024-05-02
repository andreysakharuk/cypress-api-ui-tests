export class LoginPage {
    emailInput = () => cy.get("[id=element-0]");
    passwordInput = () => cy.get("[id=element-3]");
    loginButton = () => cy.get("button[data-gtm-id='start-email-login']");
    generalError = () => cy.get("form > div:first-child");
    loginHeader = () => cy.get("h1.fb8d74bb");

    open_loginPage() {
        cy.visit(`${Cypress.config().baseUrl}/auth/login`);
    }

    enter_emailInput(email) {
        this.emailInput().type(email);
    }

    enter_passwordInput(password) {
        this.passwordInput().type(password);
    }

    click_loginButton() {
        this.loginButton().click();
    }

    verify_generalErrorText(text) {
        this.generalError().should("contain", text);
    }
}
export const loginPage = new LoginPage();
