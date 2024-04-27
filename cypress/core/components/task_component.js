class TaskComponent {
    plusTaskButton = () => cy.get(".plus_add_button");
    taskNameInput = () => cy.get("[aria-label='Task name']");
    addTaskButton = () => cy.get("[data-testid='task-editor-submit-button']");
    cancelTaskButton = () => cy.get("button[aria-label='Cancel']");

    click_plusTaskButton() {
        this.plusTaskButton().click();
    }

    enter_taskNameInput(taskName) {
        this.taskNameInput().type(taskName);
    }

    click_addTaskButton() {
        this.addTaskButton().click();
    }

    click_cancelTaskButton() {
        this.cancelTaskButton().click();
    }
}

export const taskComponent = new TaskComponent();
