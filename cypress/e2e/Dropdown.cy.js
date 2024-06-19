/// <reference types="cypress" />

describe('The Dropdown page', () => {
    beforeEach(() => {
      cy.visit('/dropdown');
    })
  
    it('should contain correct title', () => {
      cy.get('h3').should('be.visible').contains('Dropdown List');
    })

    it('should select different option', () => {
      cy.get('select[id="dropdown"]').contains('Please select an option');
      cy.get('select[id="dropdown"]').select('Option 1');
      cy.get('select[id="dropdown"]').should('have.value', '1');
      cy.get('select[id="dropdown"]').select('Option 2');
      cy.get('select[id="dropdown"]').should('have.value', '2');
    })   
})
