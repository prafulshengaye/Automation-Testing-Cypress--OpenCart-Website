import LoginPage from "../../pageObjects/loginPage";
import SearchPage from "../../pageObjects/SearchPage";
import CheckoutPage from "../../pageObjects/checkoutPage";
//import OrderSuccessPage from "../../pageObjects/orderSuccessPage";

describe('Product Order and Affiliate Registration', () => {

    const loginPage = new LoginPage(); // login in this login page 
    const searchPage = new SearchPage(); //this created for the searching the product
    const checkoutPage = new CheckoutPage();// this created for cheackout 
    //const orderSuccessPage = new OrderSuccessPage();
    

    it('should login, search product, then order, and register affiliate', () => {

        //Step 1: visit the store and login with valid credentials
        loginPage.visit(); // go to store
        loginPage.clickMyAccount();// click on "My Account"
        loginPage.clickLogin();// click on "Login"
        loginPage.login('prafulsgvbmxfhhnnz@gmail.com', '12345678');// enter emailId and password

        // Step 2: Search product and add to cat
        searchPage.searchProduct('Hp'); // searches for "Hp" Laptop
        searchPage.addToCart(); // add to cart this product
        
        // Step 3:  Go to cart and checkout
        checkoutPage.goToCart();  // Go to the cart
        checkoutPage.clickCheckout();  //click "Checkout" button
        checkoutPage.fillCheckoutpage(); // Fills the checkout information
        checkoutPage.conformTheOrder(); // click on Conform order

        // orderSuccessPage.goToAccount();
        // orderSuccessPage.openAffiliateRegistration();

        cy.screenshot();
    
    });
});