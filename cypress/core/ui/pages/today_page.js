export class TodayPage {
    mainContentHeader = () => cy.get("#agenda_view h1");
    taskNumberLabel = () => cy.get("[data-testid='large-subtitle'] .a83bd4e0");
    taskItem = (order) => cy.get(".task_list_item__content__wrapper").eq(order);

    open_todayPage() {
        cy.visit(`${Cypress.config().baseUrl}/app/today`);
    }

    verify_mainContentHeaderText(headerName) {
        this.mainContentHeader().invoke("text").should("be.equal", headerName);
    }

    verify_taskNumberLabelText(taskLabelName) {
        this.taskNumberLabel().invoke("text").should("be.equal", taskLabelName);
    }

    verify_taskNumberLabel_doesNotExist() {
        this.taskNumberLabel().should("not.exist");
    }

    hover_taskItemByOrder(order) {
        this.taskItem(order).trigger("mouseover");
    }
}
export const todayPage = new TodayPage();
