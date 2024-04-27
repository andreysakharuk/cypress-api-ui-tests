import { todayPage } from "../../core/pages/today_page";
import { loginPage } from "../../core/pages/login_page";
import { sidebarComponent } from "../../core/components/sidebar_component";
import users from "../../fixtures/users.json";

describe("Login test suite", function () {
    it("Check user can login with valid credentials", function () {
        loginPage.open_loginPage();
        loginPage.enter_emailInput(users.userValid.email);
        loginPage.enter_passwordInput(users.userValid.password);
        loginPage.click_loginButton();

        todayPage.verify_mainContentHeaderText("Today");
        sidebarComponent.verify_settingsButtonLabelText(users.userValid.name);
    });

    users.usersInvalid.forEach((user) => {
        it(`Check user can not login with invalid credentials (${user.description})`, function () {
            loginPage.open_loginPage();
            loginPage.enter_emailInput(user.email);
            loginPage.enter_passwordInput(user.password);
            loginPage.click_loginButton();
            loginPage.verify_generalErrorText("Wrong email or password.");
        });
    });
});
