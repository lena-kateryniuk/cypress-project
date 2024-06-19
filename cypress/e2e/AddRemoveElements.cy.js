/// <reference types="cypress" />

describe('The Add/Remove page', () => {
    beforeEach(() => {
      cy.visit('/add_remove_elements/');
    })
  
    it('should contain correct title', () => {
      cy.get('h3').should('be.visible').contains('Add/Remove Elements');
    })

    it('should have buttons AddElement and Delete, that works corectly', () => {
      cy.get('[id=elements]').contains('Delete').should('not.exist');
      cy.get('button').contains('Add Element').should('be.visible').click();
      cy.get('[id=elements]').contains('Delete').should('exist').should('be.visible');
      cy.contains('Delete').click();
      cy.get('[id=elements]').contains('Delete').should('not.exist');
    })
})