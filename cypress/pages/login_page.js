export default class LoginPage {
    emailInput = "[id=element-0]";
    passwordInput = "[id=element-3]";
    loginButton = "button[data-gtm-id='start-email-login']";
    generalError = "form > div:first-child";

    enter_emailInput_loginForm(email) {
        cy.get(this.emailInput).type(email);
    }

    enter_passwordInput_loginForm(password) {
        cy.get(this.passwordInput).type(password);
    }

    click_loginButton_loginForm() {
        cy.get(this.loginButton).click();
    }

    verify_generalErrorText_loginForm(text) {
        cy.get(this.generalError).should("contain", text);
    }
}
