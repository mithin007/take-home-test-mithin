import { octocatPage } from "../pageObjects/octocat.pageObjects";
describe('Testing API Mocks', () => {
    const userGitHubUrl = 'https://github.com/octocat'
    it('Test to simulate success', () => {
        cy.intercept('GET', 'https://github.com/octocat?tab=repositories', { statusCode: 200, body: '<html><body><h1>Success</h1></body></html>' }).as('getRepoDetails')
        cy.visit(userGitHubUrl)
        octocatPage.repositoriesButton().filter(':visible').click();
        cy.wait('@getRepoDetails').then(() => {
            cy.contains('Success').should('be.visible');

        })

    })
    it('Test to simulate failure', () => {
        cy.intercept('GET', 'https://github.com/octocat?tab=repositories', { statusCode: 500, body: '<html><body><h1>Internal Server Error</h1></body></html>' }).as('getRepoDetails')
        cy.visit(userGitHubUrl)
        octocatPage.repositoriesButton().filter(':visible').click();
        cy.wait('@getRepoDetails').then(() => { cy.contains('Internal Server Error').should('be.visible'); })

    })

})