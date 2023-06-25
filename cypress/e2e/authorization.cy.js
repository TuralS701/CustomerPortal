import loginPage from '../pages/LoginPage'
import { faker } from '@faker-js/faker'

const fakeName = faker.name.fullName();
const fakeNumber = faker.phone.number();
const loginPageJs = new loginPage();

describe('Авторизация', () => {
    let userDetails;

    beforeEach(() => {
        cy.fixture('auth').then(user => {
            userDetails = user
        });
        cy.visit("/")

    });

    it('MP-15', () => {
        loginPageJs.checkText1()
        loginPageJs.checkText2()
        loginPageJs.checkText3()
        loginPageJs.checkLoginLable()
        loginPageJs.checkPasswordLable()



    })

    it('MP-17', function () {

        loginPageJs.enterEmail(userDetails.valid_name)
        loginPageJs.enterPassword(userDetails.valid_password)
        loginPageJs.clickSubmit()
        loginPageJs.checkprofileName()



    });


    it('MP-59', () => {

        loginPageJs.elements.emailInput().clear()
        loginPageJs.elements.passwordInput().clear()
        loginPageJs.clickSubmit()
        loginPageJs.checkEmalAlert()
        loginPageJs.checkPasswordAlert()

    });


})

