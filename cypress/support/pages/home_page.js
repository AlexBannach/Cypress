/// <reference types="cypress" />
const elements ={
        fields:{
            name: '#user',
        },
        icons:{
            register: '.fa-lock'
        }
}

export default {
    accessRegisterPage(){
        //Acessar a página de cadastro
        cy.visit('/')
            .get('.header-logo')
        //Clicar no ícone de cadastro
        cy.get(elements.icons.register)
            .click()
        //Verificar se esta na página de cadastro
        cy.get(elements.fields.name)
            .should('be.visible') 
    }
}