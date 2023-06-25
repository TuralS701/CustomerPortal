class OrgListPage {

    elements = {
        emailInput: () => cy.get('[id="email"]'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('._btn_1tsi4_1'),
        orgList: () => cy.get('[href="/organizations"] > span'),
        searchBtn: () => cy.get('._largeBtn_9ccmt_115 > ._btn_1tsi4_1'),
        searchInsert: () => cy.get('#organization'),
        clearBtn: () => cy.get('form > ._buttons_9ccmt_17 > ._outline_1tsi4_17'),
        searchBtn2: () => cy.get('form > ._buttons_9ccmt_17 > :nth-child(2)'),
        newOrgBtn: () => cy.get('#add-organization'),
        orgNameInsert: () => cy.get('#name'),
        programInsert: () => cy.get('.css-19bb58m'),
        allProgramBox: () => cy.get('#checkbox'),
        createOrgBtn: () => cy.get('._buttons_1jilt_25 > ._btn_1tsi4_1'),
        orgNameField: () => cy.get('tbody > :nth-child(1) > :nth-child(3)'),
        deleteBtn: () => cy.get(':nth-child(1) > :nth-child(4) > ._tableButtons_9ccmt_127 > :nth-child(3) > .icon-trash'),
        deleteBtnConfirm: () => cy.get('._buttons_dznlt_17 > :nth-child(2)'),
        settingBtn: () => cy.get('._dropDown_1n1z5_57'),
        profileBtn: () => cy.get('[href="/profile"]'),
        logOutBtn: () => cy.get('._listWrap_1n1z5_237 > [href="/login"]'),
        orgSelect: () => cy.get('#react-select-3-input'),
        settingSaveBtn: () => cy.get('._btn_1tsi4_1')





    }

    loginAdmin() {
        this.elements.emailInput().clear();
        this.elements.emailInput().type()
        this.elements.passwordInput().type()
        this.elements.loginBtn().click()

    }


}
export default OrgListPage
