export class ViewComponent {
    viewOptionsButton = () => cy.get("button[aria-label='View options menu']");
    viewHeader = (order) => cy.get(".menu_list__section h4").eq(order);

    click_viewOptionsButton() {
        this.viewOptionsButton().click();
    }

    verify_headerTextAndOrder(headerName, order) {
        this.viewHeader(order).contains(headerName);
    }
}

export const viewComponent = new ViewComponent();
