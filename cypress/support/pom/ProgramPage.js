function Program_Page() {
    var BasePage = require("../BasePage.js");

    var btnExploreMore = '#root > div > div > div > div.programs-home_contentExploreMore__wpn6N > a > button > div';
    var lblTrainingProgramsHeader = "#root > div > div > div > div:nth-child(1) > h2";
    var lblTrainingProgram = '#root > div > div > div > div:nth-child(3) > div:nth-child(1) > div > div.program-card_cardDetails__JFHaI > a';
    var lblProgramHeader = '.hero_logo__Zu7Sx';
    var btnStartProgram = 'button[class="btn-gym btn--flex btn--medium hero_startBtn__tuZ8g"] div[class="btn-gym__content"]';
    var btnSunday = ':nth-child(1) > .training-days-selector_daysWrapper__c5zTZ > :nth-child(1)';
    var modalStartProgram = '.plan-settings-modal_modal__M-rTD';
    var btnSave = '.col-sm-3 > .btn-gym';


    //Select ExploreMore button

    this.SelectExploreMore = function (txtheader) {
        BasePage.Click(btnExploreMore);
        cy.get(lblTrainingProgramsHeader).should('have.text', txtheader);
    }


    //Select a program 
    this.SelectSecondProgram = function () {

        BasePage.Click(lblTrainingProgram);
        cy.url().should('include', '/train/fitness/programs/274');
    }

    //Start a program
    this.StartSecondProgram = function () {
        BasePage.Click(btnStartProgram);
        cy.get(modalStartProgram, { timeout: 20000 }).should('be.visible');
        BasePage.Click(btnSunday);
        BasePage.Click(btnSave);
        cy.url().should('include', '/train/timeline');

    }

}

module.exports = new Program_Page();