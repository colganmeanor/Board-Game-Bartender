describe('Board Game Bartender Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should have a Header component', () => {
        cy.get('header')
            .should('have.class', 'header')
    })

    it('should have a title', () => {
        cy.get('h1')
            .contains('Board Game Bartender')
    })

    it('should have a PairingForm component', () => {
        cy.get('form')
            .should('exist')
            .should('have.class', 'pairing-form')
    })

    it('should have correct elements in form', () => {
        cy.get('.pairing-form datalist')
            .should('have.length', 2)

        cy.get('.pairing-form input').first()
            .should('have.id', 'game-choice')

        cy.get('.pairing-form input').eq(1)
            .should('have.id', 'liquor-choice')

        cy.get('.pairing-form button')
            .should('have.id', 'pair-btn')
    })

    it('should have correct labels for form elements', () => {
        cy.get('label')
            .should('have.length', 2)

        cy.get('label').eq(0)
            .should('contain', 'Choose Your Game!')

        cy.get('label').eq(1)
            .should('contain', 'Whatchya drinking?')
    })

    it('should have the correct options for the liquor datalist', () => {
        cy.get('#liquors option')
            .should('have.length', 8)

        cy.get('#liquors option').eq(0)
            .should('have.value', 'Vodka')

        cy.get('#liquors option').eq(1)
            .should('have.value', 'Gin')

        cy.get('#liquors option').eq(2)
            .should('have.value', 'Rum')

        cy.get('#liquors option').eq(3)
            .should('have.value', 'Whiskey')
        
        cy.get('#liquors option').eq(4)
            .should('have.value', 'Bourbon')

        cy.get('#liquors option').eq(5)
            .should('have.value', 'Tequila')

        cy.get('#liquors option').eq(6)
            .should('have.value', 'Scotch')

        cy.get('#liquors option').eq(7)
            .should('have.value', 'Non Alcoholic')
    })

})
