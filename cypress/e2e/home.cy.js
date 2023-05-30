///<reference types= "cypress" />

describe('home', () => {

  beforeEach('portal declarado global',()=>{
    cy.viewport(1400,900)
    cy.visit('/')
  })
  
  it('webapp deve estar online', () => {
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
    
  })
})
