class TicketsPage {

    elements = {

        searchBtn: () => cy.get('._largeBtn_1deew_123 > ._btn_1wzi7_1'),
        titleField: () => cy.get('#title'),
        appNumber: () => cy.get('.text-primary-text'),
        startDate: () => cy.get(':nth-child(3) > ._wrap_1lrzu_9 > .react-datepicker-wrapper > .react-datepicker__input-container > ._dateInput_1lrzu_1'),
        endDate: () => cy.get(':nth-child(4) > ._wrap_1lrzu_9 > .react-datepicker-wrapper > .react-datepicker__input-container > ._dateInput_1lrzu_1'),
        progSelect: () => cy.get('.css-hlgwow > .css-19bb58m'),
        noteField: () => cy.get('#note'),
        clearBtn: () => cy.get('form > ._buttons_1deew_17 > ._outline_1wzi7_17'),
        searchBtn2: () => cy.get('form > ._buttons_1deew_17 > :nth-child(2)'),
        appNumberColumn: () => cy.get('tbody > :nth-child(1) > :nth-child(2)'),


    }


}
export default TicketsPage