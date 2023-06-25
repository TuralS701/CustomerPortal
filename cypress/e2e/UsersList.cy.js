import userList from "../pages/UsersList";


const userListJs = new userList;
describe('UsersListSearchCheck', function () {


    beforeEach(function () {
        cy.visit("/")
        cy.fixture('userLists.json').then(credentials => {
            this.credentials = credentials;
        })
        userListJs.loginAdmin()
        userListJs.elements.userList().click()
        userListJs.elements.searchBtn().click()



    });

    it('MP-31', function () {


        userListJs.elements.firstNameInsert().type(this.credentials.testFirstName)
        userListJs.elements.searchBtn2().click()
        userListJs.elements.firstNameField().should('have.text', this.credentials.testFirstName)
    });

    it('MP-50', function () {


        userListJs.elements.lastNameInsert().type(this.credentials.testLastName)
        userListJs.elements.searchBtn2().click()
        userListJs.elements.lastNameField().should('have.text', this.credentials.testLastName)
    });

    it('MP-51', function () {


        userListJs.elements.middleNameInsert().type(this.credentials.testMiddleName)
        userListJs.elements.searchBtn2().click()
        userListJs.elements.middleNameField().should('have.text', this.credentials.testMiddleName)
    });

    it('MP-52', function () {


        userListJs.elements.userNameInsert().type(this.credentials.testUserName)
        userListJs.elements.searchBtn2().click()
        userListJs.elements.userNameField().should('have.text', this.credentials.testUserName)
    });

    it('MP-53', function () {


        userListJs.elements.emailInsert().type(this.credentials.testEmail)
        userListJs.elements.searchBtn2().click()
        userListJs.elements.emailField().should('have.text', this.credentials.testEmail)
    });

    it('MP-54', function () {


        userListJs.elements.phoneInsert().type(this.credentials.testPhone)
        userListJs.elements.searchBtn2().click()
        userListJs.elements.phoneField().should('have.text', this.credentials.testPhone)
    });

    it('MP-32', function () {



        userListJs.elements.firstNameInsert().type(this.credentials.testFirstName)
        userListJs.elements.lastNameInsert().type(this.credentials.testLastName)
        userListJs.elements.middleNameInsert().type(this.credentials.testMiddleName)
        userListJs.elements.userNameInsert().type(this.credentials.testUserName)
        userListJs.elements.emailInsert().type(this.credentials.testEmail)
        userListJs.elements.phoneInsert().type(this.credentials.testPhone)

        userListJs.elements.searchBtn2().click()

        userListJs.elements.emailField().should('have.text', this.credentials.testEmail)
        userListJs.elements.userNameField().should('have.text', this.credentials.testUserName)
        userListJs.elements.middleNameField().should('have.text', this.credentials.testMiddleName)
        userListJs.elements.lastNameField().should('have.text', this.credentials.testLastName)
        userListJs.elements.firstNameField().should('have.text', this.credentials.testFirstName)
        userListJs.elements.phoneField().should('have.text', this.credentials.testPhone)


    });

})