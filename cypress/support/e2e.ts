
Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args)
})

Cypress.Commands.add('getBySelLike', (selector, ...args) => {
  return cy.get(`[data-testid*=${selector}]`, ...args)
})

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>
      /**
       * Select DOM element by exact value of data-testid attribute
       * @param value 
       */
      getBySel(value: string): Chainable<JQuery<HTMLElement>>
      /**
       * Select DOM element by value like data-testid attribute
       * @param value 
       */
      getBySelLike(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}