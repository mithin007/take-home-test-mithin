export const octocatPage = {

    repositoriesButton: () => cy.get('[data-tab-item="repositories"]'),
    repositoryNameTile: (tileName: string) => cy.contains('[itemprop = "owns"]', tileName),
}
