describe('Board Game Bartender Favorites Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.request('https://api.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=JLBr5npPhV')
    })


    it('should pair and favorite a game', () => {
        cy.get('[data-cy=game-dropdown]').type('Catan')
        cy.get('[data-cy=liquor-input]').type('Vodka')
        cy.get('[data-cy=pair-button]').click()
        cy.wait(2000)
        cy.get('[data-cy=favorites-button]').click()
        cy.go('back')
        cy.get('[data-cy=favorites-page-button]').click()
    })
    
})

