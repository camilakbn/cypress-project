describe('Enter vehicle data test', function () {

  it('Test', function () {
    cy.visit('')

    cy.dynamicBoard1()
    cy.dynamicBoard2()

    cy.get('#make').should('be.visible').select(13).should('have.value', 'Toyota')
    cy.get('#engineperformance').should('be.visible').type('1000')
    cy.get('#opendateofmanufacturecalender').should('be.visible').click()

    //beginning of datepicker

    for (var i = 0; i < 12; i++) {
      cy.get('.ui-datepicker-month', { log: false }).then($element => {
        if ($element.text() != 'February') {
          cy.get('.ui-datepicker-prev').click()
        }
      })
    }

    cy.get('.ui-datepicker-month').then($element => {
      expect($element.text()).to.equal('February')
    })

    cy.get('.ui-state-default').each(($element) => {
      if($element.text() == '15'){
        cy.wrap($element).click()
        cy.get($element).then($el =>{
          expect($el.text()).to.equal('15')
        })
      }
    })

    //end of datepicker

    cy.get('#numberofseats').should('be.visible').select(5).should('have.value', '5')
    cy.get('#fuel').should('be.visible').select(1).should('have.value', 'Petrol')
    cy.get('#payload').should('be.visible').type('500')
    cy.get('#totalweight').should('be.visible').type('25000')
    cy.get('#listprice').should('be.visible').type('100000')
    cy.get('#licenseplatenumber').should('be.visible').type('123456')
    cy.get('#annualmileage').should('be.visible').type('90000')
    cy.get('#nextenterinsurantdata').should('be.visible').click()
  })
})