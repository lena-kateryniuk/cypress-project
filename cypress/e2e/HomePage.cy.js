/// <reference types="cypress" />

describe('The main page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should contain correct h1 and h2', () => {
    cy.get('h1').should('be.visible').contains('Welcome to the-internet');
    cy.get('h2').should('have.text', 'Available Examples');
  })

  it('should have correct links', () => {
    cy.get('a').parents('li').contains(/add\/remove elements/i).should('be.visible')
      .should('have.attr', 'href', '/add_remove_elements/');
    cy.get('a').parents('li').contains(/checkboxes/i).should('be.visible')
      .should('have.attr', 'href', '/checkboxes');
    cy.get('a').parents('li').contains(/dropdown/i).should('be.visible')
      .should('have.attr', 'href', '/dropdown');
    cy.get('a').parents('li').contains(/form authentication/i).should('be.visible')
      .should('have.attr', 'href', '/login');
    cy.get('a').parents('li').contains(/horizontal slider/i).should('be.visible')
      .should('have.attr', 'href', '/horizontal_slider');
    cy.get('a').parents('li').contains(/hovers/i).should('be.visible')
      .should('have.attr', 'href', '/hovers');
    cy.get('a').parents('li').contains(/inputs/i).should('be.visible')
      .should('have.attr', 'href', '/inputs');
  })
})