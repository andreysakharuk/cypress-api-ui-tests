class SidebarComponent {
    sidebarButton = () => cy.get("[aria-controls='sidebar']");
    settingsButton = () => cy.get("[aria-label='Settings']");
    settingsButtonLabel = () => cy.get("span.VJ2Igaw");

    click_sidebarButton() {
        this.sidebarButton().click();
    }

    click_settingsButton() {
        this.settingsButton().click();
    }

    verify_settingsButtonLabelText(labelName) {
        this.settingsButtonLabel().invoke("text").should("be.equal", labelName);
    }
}

export const sidebarComponent = new SidebarComponent();
