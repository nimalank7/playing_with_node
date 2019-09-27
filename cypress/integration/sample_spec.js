// express_server.js

describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('/')

        cy.get('p').should('eq', 'Hello World!')
    })
})