class userList {

    elements = {
        emailInput: () => cy.get('[id="email"]'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('._btn_1tsi4_1'),
        userList: () => cy.get('[href="/users"] > span'),
        searchBtn: () => cy.get('._largeBtn_4a3t3_115 > ._btn_1tsi4_1'),
        createUserBtn: () => cy.get('#add-user'),
        lastNameInsert: () => cy.get('#surname'),
        firstNameInsert: () => cy.get('#name'),
        middleNameInsert: () => cy.get('#middleName'),
        userNameInsert: () => cy.get('#username'),
        emailInsert: () => cy.get('#email'),
        phoneInsert: () => cy.get('#phoneNumber'),
        orgSelect: () => cy.get('.css-13cymwt-control'),
        clearBtn: () => cy.get('form > ._buttons_4a3t3_17 > ._outline_1wzi7_17'),
        searchBtn2: () => cy.get('form > ._buttons_4a3t3_17 > :nth-child(2)'),
        lastNameField: () => cy.get('tbody > :nth-child(1) > :nth-child(3)'),
        firstNameField: () => cy.get('tbody > :nth-child(1) > :nth-child(4)'),
        middleNameField: () => cy.get('tbody > :nth-child(1) > :nth-child(5)'),
        emailField: () => cy.get('tbody > :nth-child(1) > :nth-child(7)'),
        orgNameField: () => cy.get('tbody > :nth-child(1) > :nth-child(8)'),
        phoneField: () => cy.get('tbody > :nth-child(1) > :nth-child(9)'),
        userNameField: () => cy.get('tbody > :nth-child(1) > :nth-child(6)')


    }

    enterEmail(a) {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(a).should('be.visible');
    }

    enterPassword(b) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(b).should('be.visible');
    }

    loginAdmin() {
        this.elements.emailInput().clear();
        this.elements.emailInput().type("admin")
        this.elements.passwordInput().type("Admin2023User_!")
        this.elements.loginBtn().click()

    }

    typeLastName() {
        this.elements.lastNameInsert()
    }

}

export default userList