///<reference types="cypress"/>


describe('tarefas', () => {
    

    context('cadastro', () => {
        it('deve cadastra uma nova tarefa', () => {
            const taskName = 'Ler um livro de node.js'

            cy.removeTaskByName(taskName)
            cy.createTask(taskName)

            cy.get('main div p').should('be.visible')
            cy.contains('main div p', taskName)
        });
        it('não deve permitir tarefa duplicada', () => {

            const task = {
                name: 'Estudar fundamentos de teste',
                is_done: false
            }
            cy.removeTaskByName(task.name)
            cy.postTask(task)
            cy.createTask(task.name)
            cy.get('.swal2-html-container').should('have.text', 'Task already exists!')
        })
        it('campo obrigatório', () => {

            cy.createTask()
            cy.isRequired('This is a riquired field')
        })
    })
    context('atualização',()=>{
        it('deve concluir uma tarefa',()=>{
            const task ={
                name:'Pagar contas de consumo',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', task.name)
                .should('have.css','text-decoration-line', 'line-through')
        })
    })
    context('exclusão',()=>{
        it('deve remover uma tarefa',()=>{
            const task ={
                name:'fazer compras',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', task.name)
                .should('not.exist')
        })
    })
})