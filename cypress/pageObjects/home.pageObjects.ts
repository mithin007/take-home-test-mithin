export const homePage = {

    gitHubIcon: () => cy.get('[aria-label="Homepage"]'),
    signUpButton: () => cy.contains('Sign up'),
    headerMenuNavigationLinks: (linkName: string) => cy.get('[aria-label="Global"]').contains(linkName),
    exploreGitHubCopilotLink: () => cy.contains('Explore GitHub Copilot'),
}
