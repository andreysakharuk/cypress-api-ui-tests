import AppPage from "../../pages/app_page";
import HomePage from "../../pages/home_page";
import LoginPage from "../../pages/login_page";

const homePage = new HomePage();
const loginPage = new LoginPage();
const appPage = new AppPage();

describe("Login test suite", function () {
    it("Check user can login with valid credentials", function () {
        homePage.open_homePage();
        homePage.click_loginButton_header();

        loginPage.enter_emailInput_loginForm("andrei.sakharuk.spain@gmail.com");
        loginPage.enter_passwordInput_loginForm("12345test");
        loginPage.click_loginButton_loginForm();

        appPage.verify_headerText_mainContent("Today");
    });

    it("Check user can not login with invalid credentials", function () {
        homePage.open_homePage();
        homePage.click_loginButton_header();

        loginPage.enter_emailInput_loginForm("invalid_email@gmail.com");
        loginPage.enter_passwordInput_loginForm("12345test");
        loginPage.click_loginButton_loginForm();
        loginPage.verify_generalErrorText_loginForm("Wrong email or password.");
    });
});
