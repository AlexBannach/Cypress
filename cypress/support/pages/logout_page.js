/// <reference types="cypress" />
// Elementos

const elements ={
        buttons:{
            userLogout: '#userLogged'          
        },
        messages:{
            successTitle: '#swal2-title',
            successSubtitle: '.swal2-html-container'
        }
}

export default {
    logout() {
        cy.get('#userLogged').click()

        cy.contains('.custom_dropdown a', 'Logout')
            .click({ force: true })
    },

    checkLogoutSucess() {
            cy.get(elements.messages.successTitle)
                .should('have.text', 'Logout realizado')

            cy.get(elements.messages.successSubtitle)
                .should('have.text', 'Obrigado, e volte sempre!')
    }

}
