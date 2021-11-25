describe("My First E2E Test", () => {
  it("should add an item to the cart", () => {
    cy.visit('http://localhost:3000/');
    cy.get('#showLogin').click();
    cy.get('#loginBtn').click();
    cy.get('#showcart').click();
    cy.get('#addtocart_5').click();
    cy.get('#clearcart').click();
    cy.get('#addtocart_3').click();
    cy.get('#cart').click();
    cy.get('#grand_total').should("contain", "$7.99");
  })
});