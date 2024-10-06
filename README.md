 Cypress Automation Project: Affiliate Registration 
 
 Project Overview

This project is an automated test suite using [Cypress](https://www.cypress.io/) to test the affiliate registration process on the Tutorials Ninja demo website. The test script automates the following:

1. Logging into the website.
2. Navigating to the affiliate registration page.
3. Filling out the affiliate registration form.
4. Submitting the form and verifying successful registration.

The project uses the Page Object Model (POM) design pattern to separate logic for each page, making the tests easier to maintain and reuse.

 Tools and Technologies Used

- Cypress - End-to-end testing framework.
- JavaScript- Scripting language for automation.
- Page Object Model (POM) - A design pattern to organize the test scripts.
- Node.js - JavaScript runtime for executing Cypress.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

1. Node.js (version 12 or higher): [Download Node.js](https://nodejs.org/en/)
2. VSCode (recommended): [Download VSCode](https://code.visualstudio.com/)
3. Cypress: Installed as a development dependency through npm.

---

## Project Setup

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

git clone https://github.com/prafulshengaye/https://github.com/prafulshengaye/constructWeekProject


### 2. Install Dependencies

After cloning the project, navigate to the project folder and install the required dependencies by running:

npm install


This will install Cypress and any other dependencies listed in `package.json`.

### 3. Open Cypress

To open the Cypress Test Runner, use the following command:

bash
npx cypress open


This will launch the Cypress Test Runner where you can see and run the test cases.

### 4. Run the Tests

You can run the test in the Cypress UI by selecting the test file from the list (e.g., `affiliateRegistration.spec.js`), or run it headlessly using the following command:

bash
npx cypress run


---

## Project Structure

Here’s an overview of the key directories and files in this project:


cypress/
  integration/
    affiliateRegistration.spec.js   // Main test script
  support/
    pageObjects/
      loginPage.js                  // Page Object for the Login Page
      affiliateRegistrationPage.js  // Page Object for the Affiliate Registration Page
      myAccountPage.js              // Page Object for the My Account Page
  screenshots/                      // Captured screenshots from tests
  videos/                           // Test execution videos (if enabled)


- **`affiliateRegistration.spec.js`** - The main test script that automates the affiliate registration flow.
- **`pageObjects/`** - This directory contains all the Page Object files, where each file represents a different web page involved in the test.
- **`screenshots/`** - Screenshots captured during test execution.
- **`videos/`** - Videos of the test runs (if configured).

---

## Running Screenshots and Videos

This project also captures screenshots and videos of the tests:

1. Screenshots:
   Screenshots are automatically taken at key points in the test using the `cy.screenshot()` command. They will be saved in the `cypress/screenshots/` directory.

2. Videos:
   Videos are recorded during the execution of tests if you run them in headless mode (`npx cypress run`). These videos will be stored in the `cypress/videos/` directory.

---

## How to Contribute

If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Open a pull request to the `main` branch.

---

---

## Contact

If you have any questions, feel free to contact me:

- **Name**: Praful Shengaye
- **GitHub**: [https://github.com/prafulshengaye/constructWeekProject])


---

