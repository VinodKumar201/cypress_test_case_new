Feature: Sign up functionality

  Scenario: User creates a new account
    Given the user navigates to the sign-up page
    When the user fills in the required fields with valid details
    And the user clicks the "Create Account" button
    Then the user should be redirected to the account dashboard
    And a welcome message should be displayed
