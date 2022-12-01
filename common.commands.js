Cypress.Commands.add('getToken', user => {
    cy.fixture('Credentials').then($credential => {
        cy.request({
            url: `${Cypress.env('baseUrlAPI')}/login-dash`,
            method: 'post',
            body: {
                email: $credential[user].email,
                password: $credential[user].senha
            }
        }).its('body.token').should('not.be.empty')
    })
})
