import { After, Before } from "@badeball/cypress-cucumber-preprocessor";

After(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log("test finished");
});

Before(() => {

   cy.log("test started");
});