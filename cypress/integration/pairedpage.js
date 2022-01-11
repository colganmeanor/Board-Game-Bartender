describe('Board Game Bartender Paired Page DOM', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        
        cy.get('input')
            .should('have.length', 2)

        cy.get('input').eq(0)
            .should('have.attr', 'placeholder', 'Choose Your Game!')

        cy.get('input').eq(1)
            .should('have.attr', 'placeholder', 'Whatchya drinking?')
    })

    it('should allow the user to access the paired page after clicking the Pair Button', () => {
        cy.get('input').eq(0)
          .type('Catan')

          .get('input').eq(1)
          .type('Tequila')

          .get('[data-cy=pairing-form] [data-cy=pair-button]')
          .click()

          cy.intercept('GET', 'api/json/v1/1/lookup.php?i=178347', {
            fixture: 'sampleDrink.json'
          })
          .url('http://localhost:3000/OIXt3DmJU0/178347')
    })

    
    
})
