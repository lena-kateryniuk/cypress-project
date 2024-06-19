/// <reference types="cypress" />

describe('The Horizontal Slider page', () => {
    beforeEach(() => {
      cy.visit('/horizontal_slider');
    })
  
    it('should contain correct title & description', () => {
      cy.get('h3').contains('Horizontal Slider').should('be.visible');
      cy.get('h4').should('contain', 'Set the focus on the slider (by clicking on it) and');
    })

    it('should have horizontal slider, that work correctly', () => {
      cy.get('input[type=range]').invoke('val', 3.5);
      cy.get('input[type=range]').trigger('change');
      cy.get('div[class=sliderContainer]').find('span[id=range]').should('have.text', '3.5').should('be.visible');
    })   
})
