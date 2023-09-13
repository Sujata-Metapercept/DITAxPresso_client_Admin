export function WaitFunction() {
  cy.wait(8000);
}

export function Click() {
  click({ force: true });
}
