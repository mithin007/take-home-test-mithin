/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        visitGitHub(): Chainable<void>;
    }
}
