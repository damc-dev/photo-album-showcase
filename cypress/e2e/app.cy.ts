describe('Navigation', () => {
    it('should be able to navigate to the albums page from home', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "albums" and click it
      cy.getBySel("appbar-nav-albums").click()
      // The new url should include "/albums"
      cy.url().should('include', '/albums')
   
      // The current breadcrumb should be Albums
      cy.getBySel("breadcrumb-current").contains('Albums')
    })
    it('should be able to navigate to a specific album from the albums page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/albums')
   
      // The current breadcrumb should be Albums
      cy.getBySel("breadcrumb-current").contains('Albums')

      // Click on the first album
      cy.get('[data-testid="album-grid-item"] button').first().click()

      // The new url should include "/albums/[id]"
      cy.url().should('include', '/albums/')

      // The previous breadcrumbs should contain Albums
      cy.getBySel("breadcrumb-previous").contains('Albums')

      // The current breadcrumb should be the album id 1
      cy.getBySel("breadcrumb-current").contains('1')
    })
  })