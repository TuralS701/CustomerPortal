

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const currentDate = `${year}-${month}-${day}`;




describe('Something', () => {


    beforeEach(() => {
        cy.visit("https://testcustomerportal.itmim.gov.az/")






    });

    it('Text check', () => {


        cy.get('#email').type(day + '.' + month + '.' + year);
        console.log(year)




    })
})