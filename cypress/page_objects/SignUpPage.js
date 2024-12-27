class SignUpPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }
  
    fillForm(firstName, lastName, email, password, confirmPassword) {
      cy.get('#firstname').type(firstName);
      cy.get('#lastname').type(lastName);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(confirmPassword);
    }
  
    submit() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    verifyAccountCreated() {
      cy.url().should('include', '/customer/account/');
      cy.get('.welcome-msg').should('contain', 'Welcome');
    }
  }
  
  export default SignUpPage;
  