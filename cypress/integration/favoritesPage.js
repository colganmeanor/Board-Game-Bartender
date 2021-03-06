describe('Board Game Bartender Favorites Page', () => {
    it('should take users to landing page', () => {
        cy.visit('http://localhost:3000')
    })

    it('should allow users to enter their game and liquor preferences to make a pairing', () => {
        cy.get('[data-cy=game-choice]').type('Catan')
        cy.get('[data-cy=liquor-choice]').type('Vodka')
        cy.get('[data-cy=pair-button]').click()
    })

    it('allow users to add the drink to favorites', () => {
        cy.wait(3000)
        cy.get('[data-cy=favorites-button]').click()
        cy.go('back')
        cy.get('[data-cy=game-choice]').type('Wingspan')
        cy.get('[data-cy=liquor-choice]').type('Tequila')
        cy.get('[data-cy=pair-button]').click()
        cy.wait(5000)
        cy.get('[data-cy=favorites-button]').click()
        cy.go('back')
        cy.wait(2000)
        cy.get('[data-cy=favorites-page-button]').click()
    })

    it('should have a Header component', () => {
        cy.get('[data-cy=header')
            .should('exist')
    })

    it('should have a title', () => {
        cy.get('h1')
            .contains('Board Game Bartender')
    })
    
    it('should display favorited drinks on favorites page', () => {
        cy.get('[data-cy=fav-drinks-grid]')
            .should('exist')
            .should('have.class', 'favorites-grid')
        cy.get('[data-cy=favorite-card]')
            .should('have.length', 2)
    })

    it('should display cards with a drink name and an image', () => {
        cy.get('[data-cy=favorite-card] h3')
            .get('img')
    })

    it('should allow users to remove a favorited drink', () => {
        cy.get('[data-cy=remove-button]').first().click({multiple: true})
        cy.get('[data-cy=favorite-card]')
            .should('have.length', 1)
    })

    it('should allow users to return to the main page', () => {
        cy.get('[data-cy=favorite-return-button]').click()
        cy.get('[data-cy=pairing-form]')
            .should('exist')
    })
})

