import { Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import content from '../pages/contents';
import across from '../pages/across.json';

When('User goes to menu', () => {
    content.burgerMenu.click()
});

When('User goes to Account page', () => {
    content.downArrow.click()
});

Then('User selects Log Out button', () => {
    content.logout.click()
});

Then('User should be Logout successfully', () => {
    cy.url().should('contains',"signin")
});