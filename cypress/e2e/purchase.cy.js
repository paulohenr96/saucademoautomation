describe('Purchase Flow', () => {
  beforeEach(() => {
    // Usar o comando personalizado de login
    cy.login('standard_user', 'secret_sauce')
  })

  it('should complete purchase successfully', () => {
    // Adicionar produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    // Ir para o carrinho
    cy.get('.shopping_cart_link').click()
    
    // Verificar se o produto está no carrinho
    cy.get('.cart_item').should('have.length', 1)
    
    // Prosseguir para checkout
    cy.get('[data-test="checkout"]').click()
    
    // Preencher informações
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('Cypress')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    
    // Finalizar compra
    cy.get('[data-test="finish"]').click()
    
    // Verificar conclusão
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })
})