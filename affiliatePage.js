


describe('Affiliate Registration Flow', () => {

    beforeEach(() => {
        // Handle uncaught exceptions to prevent test failure
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore the datetimepicker error
            if (err.message.includes('$(...).datetimepicker is not a function')) {
                return false;
            }
        });
    });

    it('Should login and register for an affiliate account', () => {
        // Step 1: Visit the website
        cy.visit('https://tutorialsninja.com/demo/');   // Visit the website
        
        // Step 2: Click on 'My Account' and 'Login'
        cy.get('.dropdown').contains('My Account').click();   // Open 'My Account' dropdown
        cy.contains('Login').click();                        // Click 'Login'
        
        // Step 3: Enter login credentials
        cy.get('#input-email').type('prafulsgvbmxfhhnnz@gmail.com');  // Enter email
        cy.get('#input-password').type('12345678');        // Enter password
        cy.get('input[type="submit"]').click();               // Click login button

        // Step 4: Navigate to Affiliate Registration
        cy.get('.dropdown').contains('My Account').click();   // Click 'My Account' dropdown
        cy.contains('Register for an affiliate account').click();  // Click 'Register for an affiliate account'
        
        // Step 5: Fill out the Affiliate Registration form
        cy.get('#input-company').type('Prcreator');          // Enter Company name
        cy.get('#input-website').type('http://mycompany.com'); // Enter Website URL
        cy.get('#input-tax').type('123456');                  // Enter Tax ID
        cy.get('input[value="cheque"]').check();              // Select 'Cheque' as payment method
        cy.get('#input-cheque').type('praful');           // Enter Cheque Payee Name

        // Step 6: Agree to Terms and Conditions
        cy.get('input[name="agree"]').click();                // Check the 'I agree to the About Us' checkbox
        
        // Step 7: Submit the form
        cy.get('.btn-primary').contains('Continue').click();  // Click 'Continue' to submit

        // Step 8: Validate successful registration
        cy.contains('Success: Your account has been successfully updated').should('be.visible');  // Assertion to check success message

        cy.screenshot();
    });
});

