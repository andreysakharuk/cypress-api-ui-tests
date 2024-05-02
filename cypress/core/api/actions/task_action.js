import { taskAPI } from "../requests/task_api";
class TaskAction {
    deleteAllTasks() {
        taskAPI.getAllTasks().then((response) => {
            if (response.body.length > 0) {
                response.body.forEach((task) => {
                    taskAPI.deleteTaskById(task.id);
                });
            }
        });
    }
}

export const taskAction = new TaskAction();
