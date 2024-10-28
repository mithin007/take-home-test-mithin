import { homePage } from "../pageObjects/home.pageObjects";

describe('GitHub Homepage', () => {
  context('When the user visits the GitHub homepage', () => {

    it('Should display the GitHub logo', () => {
      cy.visitGitHub();
      homePage.gitHubIcon().should('be.visible');
    })

    it('Should navigate to the Sign Up page when Sign Up button is clicked', () => {
      cy.visitGitHub();
      homePage.signUpButton().click();
      cy.url().should('include', '/signup');
    })
    it('Should redirect to Explore and Pricing pages', () => {
      cy.visitGitHub();

      // Checking Navigation Link Explore GitHub Copilot
      homePage.exploreGitHubCopilotLink().click()
      cy.url().should('include', '/copilot')
      cy.go('back');

      // Checking Navigation Link Pricing

      homePage.headerMenuNavigationLinks('Pricing').click()
      cy.url().should('include', '/pricing')

    })
  })


})
