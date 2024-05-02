import { taskAPI } from "../../core/api/requests/task_api";
import { createTaskPayload } from "../../core/api/payloads/task_payload";
import { taskAction } from "../../core/api/actions/task_action";
import { projectAPI } from "../../core/api/requests/project_api";

describe("API test task", function () {
    it("Check user can create new task", function () {
        projectAPI.getAllProjects().then((response) => {
            cy.wrap(response.body[0].id).as("projectId");
        });

        cy.get("@projectId").then((projectId) => {
            createTaskPayload.project_id = projectId;
            createTaskPayload.content = "New task 1";
            taskAPI.createTask(createTaskPayload).then((response) => {
                expect(response.body).not.to.empty;
                expect(response.body.content).equals(createTaskPayload.content);
                expect(response.body.project_id).equals(createTaskPayload.project_id);
                cy.wrap(response.body.id).as("taskId");
            });
        });

        cy.get("@taskId").then((taskId) => {
            taskAPI.getTaskById(taskId).then((response) => {
                expect(response.body).not.to.empty;
                expect(response.body.content).equals(createTaskPayload.content);
                expect(response.body.project_id).equals(createTaskPayload.project_id);
                expect(response.body.id).equals(taskId);
            });

            taskAPI.getAllTasks().then((response) => {
                expect(response.body).not.to.be.empty;
                expect(response.body.filter((task) => task.id === taskId)[0].content).equals(createTaskPayload.content);
            });
        });
    });

    after("Cleanup: delete all tasks", function () {
        taskAction.deleteAllTasks();
    });
});
