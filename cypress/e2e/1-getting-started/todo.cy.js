describe('template spec', () => {
  it('passes', () => {
    //Acessando o site e pesquisando por T-shirt
    cy.visit('https://automationexercise.com/')
    cy.wait(1000)
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.wait(1000) 
    cy.get('#search_product').type('t-shirts')
    cy.get('#submit_search').click()
    cy.wait(1000) 
    cy.get('.choose > .nav > li > a').click()
    //Acessando a página de login e efetuando o acesso com dados fictícios
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
    cy.get('[data-qa="login-email"]').type('teste123@gmail.com')
    cy.get('[data-qa="login-password"]').type('senha123')
    cy.get('[data-qa="login-button"]').click()
    cy.wait(1000)
    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')
    //Procurando um novo produto, adicionando no carrinho e simulando o início do processo de checkout
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.wait(2000) 
    cy.get('#search_product').type('Grunt Blue Slim Fit Jeans')
    cy.get('#submit_search').click()
    cy.wait(1000)
    cy.get('.choose > .nav > li > a').click()
    cy.get(':nth-child(5) > .btn').click()
    cy.get('u').click()
    cy.wait(1000)
    cy.get('.col-sm-6 > .btn').click()
    cy.get('.modal-footer > .btn').click()

    //Part 2: Aplicando IA na Automação de Testes
    //link para o Doc: https://docs.google.com/document/d/1EuZivUBuOx4dkHVnf76hFeGa0_kUBb7q9guD7ZnV9As/edit?usp=drive_link
  })
})