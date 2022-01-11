describe('Board Game Bartender Favorites Page', () => {
    it('should take users to landing page', () => {
        cy.visit('http://localhost:3000')
        cy.request('https://api.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=JLBr5npPhV')
    })

    it('should allow users to enter their game and liquor preferences to make a pairing', () => {
        cy.get('[data-cy=game-dropdown]').type('Catan')
        cy.get('[data-cy=liquor-input]').type('Vodka')
        cy.get('[data-cy=pair-button]').click()
    })

    it('allow users to add the drink to favorites', () => {
        cy.wait(3000)
        cy.get('[data-cy=favorites-button]').click()
        cy.go('back')
        cy.get('[data-cy=game-dropdown]').type('Catan: Cities & Knights')
        cy.get('[data-cy=liquor-input]').type('Tequila')
        cy.get('[data-cy=pair-button]').click()
        cy.wait(3000)
        cy.get('[data-cy=favorites-button]').click()
        cy.go('back')
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

})

