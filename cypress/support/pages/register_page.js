/// <reference types="cypress" />
// Elemntos

const elements ={
        buttons:{
            register: '#btnRegister'            
        },
        fields:{
            name: '#user',
            email: '#email',
            password: '#password'
        },
        messages:{  
            error: '.errorLabel',
            successTitle: '#swal2-title',
            successSubtitle: '#swal2-html-container'
        }
}

export default {
    saveRegister() {
            cy.get(elements.buttons.register)
            .click()

    },

    fillName(nome) {
            cy.get(elements.fields.name)
                .should('be.visible')
                .type(nome)
    },

    fillEmail(email)  {
            cy.get(elements.fields.email)
                .should('be.visible')
                .type(email)
    },

    fillPassword(senha)  {
            cy.get(elements.fields.password)
                .should('be.visible')
                .type(senha)

    },

    checkMessage (message) {
            cy.get(elements.messages.error)
                .should('have.text', message)
    },

    checkRegisterSucess(nome) {
            cy.get(elements.messages.successTitle)
                .should('have.text', 'Cadastro realizado!')

            cy.get(elements.messages.successSubtitle)
                .should('have.text', `Bem-vindo ${nome}`)
    },

    clickButtonOk() {
            cy.get('.swal2-confirm').click()
    }
}
