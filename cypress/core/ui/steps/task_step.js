import { taskComponent } from "../components/task_component";
import { taskOptionsComponent } from "../components/taskOptions_component";
import { todayPage } from "../pages/today_page";

class TaskStep {
    add_task(taskName) {
        taskComponent.click_plusTaskButton();
        taskComponent.enter_taskNameInput(taskName);
        taskComponent.click_addTaskButton();
        taskComponent.click_cancelTaskButton();
    }

    delete_task(taskOrder) {
        todayPage.hover_taskItemByOrder(taskOrder);
        taskOptionsComponent.click_taskOptionsButton();
        taskOptionsComponent.click_deleteTaskOption();
        taskOptionsComponent.click_confirmDeleteTaskButton();
    }
}

export const taskStep = new TaskStep();
