import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import across from "../pages/across.json";
import content from "../pages/contents";

Given('Navigate to QA Environment', () => {
    cy.visit(across.QA)
    cy.title().should('eq',"Across Manager")
    cy.url().should('eq',across.QA)

});

Given('Navigate to DEV Environment', () => {
    cy.visit(across.DEV)
    cy.title().should('eq',"Across Manager")
    cy.url().should('eq',across.DEV)

});

Given('Navigate to PROD Environment', () => {
    cy.visit(across.PROD)
    cy.title().should('eq',"Across Manager")
    cy.url().should('eq',across.PROD)

});

When("Login with PPC user credentials", () => {
  cy.login(across.PPCUser, across.PPCPass);
});

When("Login with MAS user credentials", () => {
  cy.login(across.MASUser, across.MASPass);
});


Then('Login should be successfully', () => {
    cy.url().should('contains',"dashboard")
    cy.get('#across-map').should('be.visible')
});
