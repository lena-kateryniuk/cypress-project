/// <reference types="cypress" />

describe('The Login page', () => {
    beforeEach(() => {
      cy.visit('/login');
    })
  
    it('should contain correct title & description', () => {
      cy.get('h2').should('be.visible').contains('Login Page');
      cy.get('h4').should('contain', 'This is where you can log into the secure area.');
    })

    it('should login the user after typing the correct credential and logout', () => {
      cy.get('input[id=username]').siblings('label[for=username]')
        .contains('Username').should('be.visible') 
        .type(Cypress.env('username'));
      cy.get('input[id=username]').should('have.value', Cypress.env('username'));
      cy.get('input[id=password]').siblings('label[for=password]') 
        .contains('Password').should('be.visible')
        .type(Cypress.env('password'));
      cy.get('input[id=password]').should('have.value', Cypress.env('password'));
      cy.get('button').find('i').contains('Login').should('be.visible').click();
      cy.get('div[id=flash]').contains('You logged into a secure area!').should('be.visible');
      cy.get('h2').contains('Secure Area').should('be.visible');
      cy.get('h4').contains('Welcome to the Secure Area. When you are done click logout below.').should('be.visible');
      cy.get('a[class="button secondary radius"]').should('have.attr', 'href', '/logout');
      cy.get('a').find('i').contains('Logout').should('be.visible').click();
      cy.get('div[id=flash]').contains('You logged out of the secure area!').should('be.visible');
      cy.get('h2').should('be.visible').contains('Login Page');
    })

    it('shouldn`t login the user after typing incorrect login', () => {
      cy.get('input[id=username]').siblings('label[for=username]')
        .contains('Username').should('be.visible') 
        .type('user');
      cy.get('input[id=password]').siblings('label[for=password]') 
        .contains('Password').should('be.visible')
        .type(Cypress.env('password'));
      cy.get('button').find('i').contains('Login').should('be.visible').click();
      cy.get('div[id=flash]').contains('Your username is invalid!').should('be.visible');
      cy.get('h2').contains('Login').should('be.visible');
    })

    it('shouldn`t login the user after typing incorrect password', () => {
      cy.get('input[id=username]').siblings('label[for=username]')
        .contains('Username').should('be.visible') 
        .type(Cypress.env('username'));
      cy.get('input[id=password]').siblings('label[for=password]') 
        .contains('Password').should('be.visible')
        .type('user1234');
      cy.get('button').find('i').contains('Login').should('be.visible').click();
      cy.get('div[id=flash]').contains('Your password is invalid!').should('be.visible');
      cy.get('h2').contains('Login').should('be.visible');
    })
})
