class ProjectAPI {
    getAllProjects() {
        return cy.request({
            method: "GET",
            url: `${Cypress.config("baseAPIHost")}/rest/v2/projects/`,
            auth: { bearer: `${Cypress.config("baseAPIToken")}` },
        });
    }
}
export const projectAPI = new ProjectAPI();
