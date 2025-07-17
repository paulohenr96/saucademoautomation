// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

// Comando simplificado para visitar a página com timeout aumentado
Cypress.Commands.add('visitWithRetry', (url) => {
  cy.visit(url, { timeout: 120000 })
  cy.get('body', { timeout: 10000 }).should('be.visible')
})