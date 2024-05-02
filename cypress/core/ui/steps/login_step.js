import { loginPage } from "../pages/login_page";

class LoginStep {
    login(email, password) {
        loginPage.open_loginPage();
        loginPage.enter_emailInput(email);
        loginPage.enter_passwordInput(password);
        loginPage.click_loginButton();
    }
}

export const loginStep = new LoginStep();
