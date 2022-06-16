const globalvariables = require("../fixtures/globalvariables.js");

describe("Gymondo Test suit", function () {


    var LoginPage = require("../support/pom/LoginPage.js");
    var MyPlanPage = require("../support/pom/MyPlanPage.js");
    var ProgramPage = require("../support/pom/ProgramPage");


    beforeEach(function () {

        LoginPage.Login();
        LoginPage.NavigateMyPlan();



    });

    it("Testcase 1 - Add a second plan ", function () {
        MyPlanPage.StartASecondPlan();
        ProgramPage.SelectExploreMore(globalvariables.programpageheader);
        ProgramPage.SelectSecondProgram();
        ProgramPage.StartSecondProgram();
        
    });

    it("Testcase 2 - Delete the second plan ", function () {
        MyPlanPage.DeleteSecondPlan();
        MyPlanPage.VerifyPlanIsDeleted(globalvariables.programname);

    });


});