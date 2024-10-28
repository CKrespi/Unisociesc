describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.wait(1000) 
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.wait(1000) 
    cy.get('#search_product').type('t-shirts')
    cy.get('#submit_search').click()
    cy.wait(1000) 
    cy.get('.choose > .nav > li > a').click()
  })
})