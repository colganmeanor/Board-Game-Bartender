describe('Board Game Bartender Paired Page DOM', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        
        cy.get('label').eq(0)
            .should('contain', 'Choose Your Game!')

        cy.get('label').eq(1)
            .should('contain', 'Whatchya drinking?')
    })

    it.only('should show the drink component', () => {
        cy.get('[data-cy=header')
            .should('exist')
    })

    
    
})
