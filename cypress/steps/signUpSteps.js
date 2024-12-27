import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../../page_objects/SignUpPage";

const signUpPage = new SignUpPage();

Given('the user navigates to the sign-up page', () => {
  signUpPage.visit();
});

When('the user fills in the required fields with valid details', () => {
  signUpPage.fillForm('John', 'Doe', 'john.doe@example.com', 'Test1234!', 'Test1234!');
});

When('the user clicks the "Create Account" button', () => {
  signUpPage.submit();
});

Then('the user should be redirected to the account dashboard', () => {
  signUpPage.verifyAccountCreated();
});

Then('a welcome message should be displayed', () => {
  cy.get('.welcome-msg').should('contain', 'Welcome');
});
