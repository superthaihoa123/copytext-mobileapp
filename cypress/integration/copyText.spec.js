describe('Copy Text App', () => {
  it('copies text to clipboard and shows success notification', () => {
    cy.visit('/');
    cy.get('input').type('Hello, world!');
    cy.contains('Copy').click();
    cy.get('.v-snack').should('contain', 'Text copied to clipboard');
  });

  it('shows error notification when copy fails', () => {
    cy.visit('/');
    cy.contains('Copy').click();
    cy.get('.v-snack').should('contain', 'Failed to copy text');
  });
});
