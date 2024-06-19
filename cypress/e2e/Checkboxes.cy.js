/// <reference types="cypress" />

describe('The Checkboxes page', () => {
    beforeEach(() => {
      cy.visit('/checkboxes')
    })
  
    it('should contain correct title', () => {
      cy.get('h3').should('be.visible').contains('Checkboxes');
    })

    it('should check checkbox 1', () => {
      cy.get('input[type="checkbox"]:nth-of-type(1)').parent('form').should('not.be.checked');
      cy.get('input[type="checkbox"]:nth-of-type(1)').check();
      cy.get('input[type="checkbox"]:nth-of-type(1)').should('be.checked');
      cy.get('input[type="checkbox"]:nth-of-type(1)').uncheck();
      cy.get('input[type="checkbox"]:nth-of-type(1)').should('not.be.checked');
    })
    
    it('should uncheck checkbox 2', () => {
      cy.get('input[type="checkbox"]:nth-of-type(2)').should('be.checked');
      cy.get('input[type="checkbox"]:nth-of-type(2)').uncheck();
      cy.get('input[type="checkbox"]:nth-of-type(2)').should('not.be.checked');
    })
})