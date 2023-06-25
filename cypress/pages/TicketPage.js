class ticketPage {

    elements = {

        textField1: () => cy.get('._pageTitle_1u9t2_41'),
        textField2: () => cy.get('._name_1u9t2_205'),
        textField3: () => cy.get('._selectWrap_17yue_1 > label'),
        textField4: () => cy.get('._container_cae33_1 > label'),
        textField5: () => cy.get('._inputWrap_1hxp7_1 > label'),
        textField6: () => cy.get('._container_1qulm_13 > label'),
        textField7: () => cy.get('._text_1qulm_37'), //Locator for File upload
        textField8: () => cy.get('._btn_1tsi4_1'),
        selectBox: () => cy.get('.css-19bb58m'),
        insertField1: () => cy.get('#title'),
        insertField2: () => cy.get('#note'),
        confirmBtn: () => cy.get('._btn_1tsi4_1'),

        value: () => cy.get('#react-select-2-option-0'), //Locator for first value in select box
        tickConfrmAlertText1: () => cy.get('._title_1h4pu_37'),
        tickConfrmAlertText2: () => cy.get('._message_sorc5_41'),
        tickConfrmAlertXBtn: () => cy.get('._modalHeader_1jitq_21 > button > .icon-close'),
        tickConfrmAlertCloseBtn: () => cy.get('._buttons_18ba4_17 > ._btn_1tsi4_1'),
        createdTickNumber: () => cy.get('._requestId_sorc5_49'),
        ticketList: () => cy.get('[href="/tickets"] > span'),
        ticketListLastCreated: () => cy.get('tbody > :nth-child(1) > :nth-child(2)'),

        itemsCount10: () => cy.get('._active_3te1n_43'),
        itemsCount20: () => cy.get('._itemCount_3te1n_27 > :nth-child(2)'),
        itemsCount50: () => cy.get('._itemCount_3te1n_27 > :nth-child(3)'),
        itemsCount100: () => cy.get('._itemCount_3te1n_27 > :nth-child(4)'),
        itemsCount200: () => cy.get('._itemCount_3te1n_27 > :nth-child(5)'),
        itemsCount500: () => cy.get('._itemCount_3te1n_27 > :nth-child(6)'),

        column1: () => cy.get(':nth-child(1) > ._headWrap_3te1n_139 > span'),
        column2: () => cy.get(':nth-child(2) > ._headWrap_3te1n_139 > span'),
        column3: () => cy.get(':nth-child(3) > ._headWrap_3te1n_139 > span'),
        column4: () => cy.get(':nth-child(4) > ._headWrap_3te1n_139 > span'),
        column5: () => cy.get(':nth-child(5) > ._headWrap_3te1n_139 > span'),
        column6: () => cy.get(':nth-child(6) > ._headWrap_3te1n_139 > span'),
        column7: () => cy.get(':nth-child(7) > ._headWrap_3te1n_139 > span'),
        column8: () => cy.get(':nth-child(8) > ._headWrap_3te1n_139 > span'),

        deleteBtn: () => cy.get('.icon-trash'),
        infoBtn: () => cy.get(':nth-child(1) > :nth-child(8) > ._tableButtons_14p72_127 > :nth-child(1) > .icon-info'),






        //Ətraflı axtar modulu Start
        searchBtn: () => cy.get('._largeBtn_14p72_115 > ._btn_1wzi7_1'),
        sTextField1: () => cy.get('#title'),
        sTextField2: () => cy.get('.text-primary-text'),
        sStartDate: () => cy.get(':nth-child(3) > ._wrap_1lrzu_9 > .react-datepicker-wrapper > .react-datepicker__input-container > ._dateInput_1lrzu_1'),
        sEndDate: () => cy.get(':nth-child(4) > ._wrap_1lrzu_9 > .react-datepicker-wrapper > .react-datepicker__input-container > ._dateInput_1lrzu_1'),
        sTextField3: () => cy.get('.css-13cymwt-control'),
        sTextField4: () => cy.get('#note'),
        sClearBtn: () => cy.get('#note'),
        sSearchBtn: () => cy.get('form > ._buttons_14p72_17 > :nth-child(2)')
        //End


    }

    checkTextField1() {

        this.elements.textField1().should('contain', 'Yeni tələb').should('be.visible');

    }

    checkTextField2() {

        this.elements.textField2().should('contain', 'Tural Süleymanzadə Mahir').should('be.visible');

    }

    checkTextField3() {

        this.elements.textField3().should('contain', 'Sistem / Proqram*').should('be.visible');

    }

    checkTextField4() {

        this.elements.textField4().should('contain', 'Qeyd*').should('be.visible');

    }

    checkTextField5() {

        this.elements.textField5().should('contain', 'Mövzu*').should('be.visible');

    }

    checkTextField6() {

        this.elements.textField6().should('contain', 'Ekran şəkli').should('be.visible');

    }

    checkTextField7() {

        this.elements.textField7().should('contain', 'Faylı yüklə').should('be.visible');

    }

    checkTextField8() {

        this.elements.textField8().should('contain', 'Tələb yarat').should('be.visible');

    }

    clickConfirmBtn() {

        this.elements.confirmBtn().click();
    }

    checktickConfrmAlertText1() {

        this.elements.tickConfrmAlertText1().should('contain', 'Tələb uğurla yaradıldı').should('be.visible');

    }

    checkTickConfrmAlertText2() {

        this.elements.tickConfrmAlertText2().should('contain', 'Müraciət nömrəsi (Azure):').should('be.visible');

    }

    checkTickConfrmAlertXBtn() {

        this.elements.tickConfrmAlertCloseBtn().should('be.visible').click();

    }

    selectValue() {

        cy.get('.css-19bb58m').type('Direk2').type('{enter}').type('{enter}')
    }






}

export default ticketPage;