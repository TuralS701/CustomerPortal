/// <reference types ="cypress" />
import TicketPage from "../pages/TicketPage";
import loginPage from "../pages/LoginPage";
import { faker } from '@faker-js/faker'

const fakeName = faker.name.fullName();
const fakeNumber = faker.phone.number();
const fakeText = faker.lorem.sentences();

const tickPage = new TicketPage();
const loginPageJS = new loginPage();


describe('newTicket', () => {


    beforeEach(() => {
        cy.visit("/")
        let userDetails;
        cy.fixture("auth").then(user => {
            userDetails = user
        });


        /* cy.reload()
         cy.wait(5000)
         loginPageJS.loginUser()*/ //Задокументировано вечером, так как сайт нормально не работает
        loginPageJS.loginUser()


    });

    it('MP-22', () => {

        loginPageJS.loginUser()
        tickPage.checkTextField1()
        tickPage.checkTextField2()
        tickPage.checkTextField3()
        tickPage.checkTextField4()
        tickPage.checkTextField5()
        tickPage.checkTextField6()
        tickPage.checkTextField7()
        tickPage.checkTextField8()

    })

    it('Ticket Creation/ Confirmation Alert/ Close with X btn', () => {



        tickPage.selectValue()
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

    })

    it('Ticket Creation from All tickets page/ Confirmation Alert/ Close with X btn', () => {

        tickPage.elements.ticketList().click()
        cy.get('#new-ticket').click()
        tickPage.selectValue()
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

    })


})