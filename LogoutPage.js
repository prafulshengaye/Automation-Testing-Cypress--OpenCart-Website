class LogoutPage {

    // Method to perform the logout action
    Logout() {
        cy.contains('Logout') // Finds the element that contains the text 'Logout'
          .click(); // Clicks on the 'Logout' button to log the user out
    }

    // Method to click the 'Continue' button after logging out
    Clicking_on_Continue() {
        cy.contains('Continue') // Finds the element that contains the text 'Continue'
          .click(); // Clicks on the 'Continue' button to proceed after logout
    }

}

export default LogoutPage;