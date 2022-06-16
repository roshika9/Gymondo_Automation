const globalvariables = require("../../fixtures/globalvariables");

function login_page() {

    var BasePage = require("../BasePage.js");
    var PageData = require("../../fixtures/globalvariables");

    var tabLogin = '#gatsby-focus-wrapper > div.layout-module--layoutWrapper--H0wBR.home-module--layout--y9Pco > header > div > section > nav.top-nav > ul > li:nth-child(5) > div > button';
    var txtmail = '#mail';
    var txtpassword = '#password';
    var btnLogin = 'button[type="submit"]';
    var modalWhatsNew = '#root > div > div:nth-child(9) > div.modal_dialogWrapper__hGb5i';
    var btnGotIt = '.target-section-modal-content_modal__38Cc2 > .btn-gym';

    //Login to the Gymondo account
    this.Login = function () {
        BasePage.Open(PageData.baseURL);


        BasePage.Click(tabLogin);
        BasePage.WaitForElementPresent(txtmail);
        BasePage.Type(txtmail, globalvariables.valEmail);
        BasePage.Type(txtpassword, globalvariables.valPassword);
        BasePage.Click(btnLogin);
    }

    this.NavigateMyPlan = function () {
        //Validate the new page
        cy.get(modalWhatsNew, { timeout: 20000 }).should('be.visible');
        BasePage.Click(btnGotIt);
        cy.url().should('include', '/train/timeline');
    }

}


module.exports = new login_page();