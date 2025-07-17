describe('Login Page', () => {
  beforeEach(() => {
    // Abordagem simples com timeout aumentado
    cy.visit('/', { timeout: 120000 })
  })

 

  it('should login with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
    // Verificar se o login foi bem-sucedido
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('should show error with invalid credentials', () => {
    cy.get('[data-test="username"]').type('invalid_user')
    cy.get('[data-test="password"]').type('invalid_password')
    cy.get('[data-test="login-button"]').click()
    
    // Verificar mensagem de erro
    cy.get('.error-button').should('be.visible')
  })
})