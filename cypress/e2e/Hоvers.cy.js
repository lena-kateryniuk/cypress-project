/// <reference types="cypress" />

describe('The Hover page', () => {
    beforeEach(() => {
      cy.visit('/hovers');
    })
  
    it('should contain correct title & description', () => {
      cy.get('div').find('h3').contains('Hovers').should('be.visible');
      cy.get('div').find('p').should('contain', 'Hover over the image for additional information');
    })

    it('should show name after hover images', () => {  
      cy.get('div.figure').first().realHover().then(() => {
        cy.get('div.figure').first().find('h5').contains('name: user1').should('be.visible');
        cy.get('div.figure').first().find('a').contains('View profile').should('have.attr', 'href', '/users/1');
      })
    })   

})
