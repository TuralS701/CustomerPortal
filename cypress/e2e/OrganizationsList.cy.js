import { it } from "mocha";
import OrgListPage from "../pages/OrganizationListPage";
import TicketPage from "../pages/TicketPage";


const tickPage = new TicketPage();
const OrgListPageJs = new OrgListPage;
describe('Organization List', function () {


    beforeEach(function () {
        cy.visit("/")

        cy.fixture('organizations.json').then(credentials => {
            this.credentials = credentials;
        })

        OrgListPageJs.loginAdmin()
        OrgListPageJs.elements.orgList().click()


    });

    it('MP-37', function () {

        OrgListPageJs.elements.newOrgBtn().click()
        OrgListPageJs.elements.orgNameInsert().type(this.credentials.firstOrg)
        OrgListPageJs.elements.programInsert().type(this.credentials.activeSys)
        cy.get('#react-select-3-option-6').type('{enter}')
        cy.get('.css-1wy0on6 > :nth-child(3)').click() //Кустарным методом обошел проблему с последующей функцией
        OrgListPageJs.elements.createOrgBtn().click()

    });


    it('MP-55', function () {

        OrgListPageJs.elements.settingBtn().click()
        OrgListPageJs.elements.logOutBtn().click()
        OrgListPageJs.elements.passwordInput().type(this.credentials.user_password)
        OrgListPageJs.elements.loginBtn().click()
        OrgListPageJs.elements.settingBtn().click()
        OrgListPageJs.elements.profileBtn().click()
        OrgListPageJs.elements.orgSelect().type(this.credentials.firstOrg).type('{enter}')
        OrgListPageJs.elements.settingSaveBtn().click()

        cy.get('.icon-add-document').click() //Clicking on new request button

        cy.get('.css-19bb58m').type('Direk2').type('{enter}').type('{enter}')
        tickPage.elements.insertField1().type("Test")
        tickPage.elements.insertField2().type("Test")
        tickPage.clickConfirmBtn()
        tickPage.checktickConfrmAlertText1()
        tickPage.checkTickConfrmAlertText2()
        tickPage.elements.createdTickNumber().invoke('text').as('firstValue').then(text => cy.log(text)) //then val shows 
        tickPage.checkTickConfrmAlertXBtn()
        tickPage.elements.ticketListLastCreated().then(lastValue => {
            cy.get("@firstValue").should(firstValue => {
                expect(lastValue.val()).to.be.equal(firstValue);
            })
        })



    });

    it('MP-40', function () {

        OrgListPageJs.elements.newOrgBtn().click()
        OrgListPageJs.elements.orgNameInsert().type(this.credentials.secondOrg)
        OrgListPageJs.elements.allProgramBox().click()
        OrgListPageJs.elements.createOrgBtn().click()
    });

    it('MP-58', function () {

        OrgListPageJs.elements.settingBtn().click()
        OrgListPageJs.elements.logOutBtn().click()
        OrgListPageJs.elements.passwordInput().type(this.credentials.user_password)
        OrgListPageJs.elements.loginBtn().click()
        OrgListPageJs.elements.settingBtn().click()
        OrgListPageJs.elements.profileBtn().click()
        OrgListPageJs.elements.orgSelect().type(this.credentials.secondOrg).type('{enter}')
        OrgListPageJs.elements.settingSaveBtn().click()

        cy.get('.icon-add-document').click() //Clicking on new request button

        cy.get('.css-19bb58m').type('Direk2').type('{enter}').type('{enter}')
        tickPage.elements.insertField1().type("Test")
        tickPage.elements.insertField2().type("Test")
        tickPage.clickConfirmBtn()
        tickPage.checktickConfrmAlertText1()
        tickPage.checkTickConfrmAlertText2()
        tickPage.elements.createdTickNumber().invoke('text').as('firstValue').then(text => cy.log(text)) //then val shows 
        tickPage.checkTickConfrmAlertXBtn()
        tickPage.elements.ticketListLastCreated().then(lastValue => {
            cy.get("@firstValue").should(firstValue => {
                expect(lastValue.val()).to.be.equal(firstValue);
            })
        })
    });

    it.only('MP-39', function () {

        OrgListPageJs.elements.searchBtn().click()
        OrgListPageJs.elements.searchInsert().type(this.credentials.firstOrg)
        OrgListPageJs.elements.searchBtn2().click()
        OrgListPageJs.elements.deleteBtn().click()
        OrgListPageJs.elements.deleteBtnConfirm().click()
        cy.wait(5000)
        cy.get('._btn_1tsi4_1 > span').click()
        OrgListPageJs.elements.searchInsert().clear().type(this.credentials.secondOrg)
        OrgListPageJs.elements.searchBtn2().click()
        OrgListPageJs.elements.deleteBtn().click()
        OrgListPageJs.elements.deleteBtnConfirm().click()

    });




})