class loginPage {

    elements = {

        emailInput: () => cy.get('[id="email"]'),
        passwordInput: () => cy.get('._pass_1hxp7_17'),
        loginBtn: () => cy.get('._btn_1tsi4_1'),
        iconViewBtn: () => cy.get('.icon-view'),
        textField1: () => cy.get('._formWrap_1ns32_73 > :nth-child(1)'),
        textField2: () => cy.get('._formWrap_1ns32_73 > :nth-child(2)'),
        textField3: () => cy.get('._desc_1ns32_89'),
        loginLable: () => cy.get(':nth-child(1) > label'),
        passwordLable: () => cy.get(':nth-child(2) > label'),
        profileName: () => cy.get('._name_1u9t2_205'),
        loginFailed: () => cy.get('.Toastify__toast-body > :nth-child(2)'),
        emailAlert: () => cy.get(':nth-child(1) > ._errorText_1hxp7_73 > span'),
        passwordAlert: () => cy.get(':nth-child(2) > ._errorText_1hxp7_73 > span')



    }

    enterEmail(a) {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(a).should('be.visible');
    }

    enterPassword(b) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(b).should('be.visible');
    }

    clickSubmit() {

        this.elements.loginBtn().click();
    }

    checkprofileName() {

        this.elements.profileName().should('exist').should('be.visible')
    }

    checkText1() {

        this.elements.textField1().should('contain', 'Xoş gəlmisiniz!').should('be.visible')

    }

    checkText2() {

        this.elements.textField2().should('contain', 'İTMİM Müştəri portalı').should('be.visible')
    }

    checkText3() {

        this.elements.textField3().should('contain', 'İstifadəçi adınızı və şifrənizi daxil edin').should('be.visible')

    }

    checkLoginLable() {

        this.elements.loginLable().should('contain', 'İstifadəçi adı*').should('be.visible')
    }

    checkPasswordLable() {

        this.elements.passwordLable().should('contain', 'Şifrə*').should('be.visible')
    }

    checkloginFailed() {

        this.elements.loginFailed().should('contain', 'İstifadəçi məlumatları yanlışdır').should('be.visible')

    }

    checkEmalAlert() {

        this.elements.emailAlert().should('contain', 'İstifadəçi adını daxil edin!').should('be.visible')

    }

    checkPasswordAlert() {

        this.elements.passwordAlert().should('contain', 'Şifrə daxil edin!').should('be.visible')


    }

    loginUser() {


        this.elements.passwordInput().type("Tural2023Tural")
        this.elements.loginBtn().click()

    }

    loginAdmin() {

        this.elements.emailInput().type("admin")
        this.elements.passwordInput().type("Admin2023User_!")
        this.elements.loginBtn().click()

    }

}



export default loginPage;