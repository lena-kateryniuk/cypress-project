/// <reference types="cypress" />

describe('The Inputs page', () => {
    beforeEach(() => {
      cy.visit('/inputs');
    })
  
    it('should contain correct title & description', () => {
      cy.get('div').find('h3').contains('Inputs').should('be.visible');
      cy.get('div').find('p').should('contain', 'Number');
    })

    it('should allow numeric input', () => {  
      let number = 132465

      cy.get('div').find('input[type=number]').should('be.visible').type(number)
      cy.get('input').should('have.value', number); 
    })
    
    it('shouldn`t allow string input', () => {
      let notNumber = 'kdjf'
      cy.get('div').find('input[type=number]').should('be.visible').type(notNumber)
      cy.get('input').should('have.value', '');
    })

})
