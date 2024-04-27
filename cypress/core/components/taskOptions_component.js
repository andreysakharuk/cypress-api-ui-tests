class TaskOptionsComponent {
    taskOptionsButton = () => cy.get("[data-testid='more_menu']");
    deleteTaskOption = () => cy.get("[data-action-hint='task-overflow-menu-delete']");
    confirmDeleteButton = () => cy.get("[aria-label='Confirmation dialog'] button[type='submit']");

    click_taskOptionsButton() {
        this.taskOptionsButton().click();
    }

    click_deleteTaskOption() {
        this.deleteTaskOption().click();
    }

    click_confirmDeleteTaskButton() {
        this.confirmDeleteButton().click();
    }
}

export const taskOptionsComponent = new TaskOptionsComponent();
