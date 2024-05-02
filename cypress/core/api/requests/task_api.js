class TaskAPI {
    getAllTasks() {
        return cy.request({
            method: "GET",
            url: `${Cypress.config("baseAPIHost")}/rest/v2/tasks`,
            auth: { bearer: `${Cypress.config("baseAPIToken")}` },
        });
    }

    getTaskById(taskId) {
        return cy.request({
            method: "GET",
            url: `${Cypress.config("baseAPIHost")}/rest/v2/tasks/${taskId}`,
            auth: { bearer: `${Cypress.config("baseAPIToken")}` },
        });
    }

    createTask(createTaskPayload) {
        return cy.request({
            method: "POST",
            url: `${Cypress.config("baseAPIHost")}/rest/v2/tasks/`,
            body: createTaskPayload,
            auth: { bearer: `${Cypress.config("baseAPIToken")}` },
        });
    }

    deleteTaskById(taskId) {
        return cy.request({
            method: "DELETE",
            url: `${Cypress.config("baseAPIHost")}/rest/v2/tasks/${taskId}`,
            auth: { bearer: `${Cypress.config("baseAPIToken")}` },
        });
    }
}

export const taskAPI = new TaskAPI();
