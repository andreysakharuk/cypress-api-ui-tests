import { todayPage } from "../../core/pages/today_page";
import { loginStep } from "../../core/steps/login_step";
import { taskStep } from "../../core/steps/task_step";
import users from "../../fixtures/users.json";

describe("Tasks test suite", function () {
    it("Check user can see proper task number labels after adding/removing tasks", function () {
        loginStep.login(users.userValid.email, users.userValid.password);
        todayPage.verify_mainContentHeaderText("Today");
        todayPage.verify_taskNumberLabel_doesNotExist();

        taskStep.add_task("New Task 1");
        todayPage.verify_taskNumberLabelText("1 task");

        taskStep.add_task("New Task 2");
        todayPage.verify_taskNumberLabelText("2 tasks");

        taskStep.delete_task(0);
        todayPage.verify_taskNumberLabelText("1 task");

        taskStep.delete_task(0);
        todayPage.verify_taskNumberLabel_doesNotExist();
    });
});
