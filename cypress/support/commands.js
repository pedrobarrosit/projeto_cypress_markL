///<reference types= "cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createTask', (taskName = '')=>{
    if(taskName !== ''){
        cy.get('input[placeholder="Add a new Task"]').type(taskName)
    
    }
    cy.contains('button', 'Create').click()  
})

Cypress.Commands.add('removeTaskByName',(taskName)=>{
    cy.request({
        url: 'http://localhost:3333/helper/tasks',
        method: 'DELETE',
        body: { name: taskName }

    }).then(response => {
        expect(response.status).to.eq(204)
    })

})
Cypress.Commands.add('postTask',(task)=>{
    cy.request({
        url: 'http://localhost:3333/tasks',
        method: 'POST',
        body: task
    }).then(response => {
        expect(response.status).to.eq(201)
    })
})