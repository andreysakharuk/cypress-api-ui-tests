import { todayPage } from "../../core/ui/pages/today_page";
import { loginStep } from "../../core/ui/steps/login_step";
import { taskStep } from "../../core/ui/steps/task_step";
import { taskAction } from "../../core/api/actions/task_action";
import users from "../../fixtures/users.json";

describe("Tasks test suite", function () {
    before("Setup: delete all existing tasks", function () {
        taskAction.deleteAllTasks();
    });
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
