function MyPlan_Page() {
    var BasePage = require("../BasePage.js");

    var lblStartSecondProgram = '.link';
    var lblSecondProgramName = ':nth-child(2) > .program-training-settings_programTitle__Lebz\+';
    var btnPlanSettings = ':nth-child(2) > a > .btn-gym > .btn-gym__content';
    var btnDeletePlan = ':nth-child(2) > .plan-settings-modal_buttons__Jgk1a > .btn-gym--tertiary';
    var btnEndProgram = '.plan-settings-modal_buttonWrapper__LulcD > .btn-gym';
    var modalEndProgram = '.plan-settings-modal_modal__M-rTD'

    //Add a second Plan

    this.StartASecondPlan = function () {
        BasePage.Click(lblStartSecondProgram);
        cy.url().should('include', '/train/fitness/programs');
    }


    this.VerifySecondProgram = function (programName) {
        cy.get(lblSecondProgramName).contains(programName);
    }

    this.DeleteSecondPlan = function () {
        BasePage.Click(btnPlanSettings);
        cy.get(modalEndProgram, { timeout: 20000 }).should('be.visible');
        BasePage.Click(btnDeletePlan);

        BasePage.Click(btnEndProgram);
    }

    this.VerifyPlanIsDeleted = function (programName) {
        BasePage.CheckElementPresent(lblStartSecondProgram);
    }

}

module.exports = new MyPlan_Page();