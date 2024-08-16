describe('Enter insurance data test', function () {

  it('Test', function () {
    cy.visit('')

    cy.dynamicBoard1()
    cy.dynamicBoard2()

    cy.get('#nextenterinsurantdata').scrollIntoView().should('be.visible').click()

    cy.get('#firstname').should('be.visible').type('FirstName')
    cy.get('#lastname').should('be.visible').type('LastName')
    cy.get('#opendateofbirthcalender').should('be.visible').click()

  //beginning of datepicker

    for(var i = 0; i < 600; i++){
      cy.get('.ui-datepicker-year', { log: false }).then($element => {
        if($element.text() != '2000') {
          cy.get('.ui-datepicker-prev').click()
        }
      })
    }

    for(var i = 0; i < 12; i++){
      cy.get('.ui-datepicker-month', {log: false}).then($element =>{
        if($element.text() != 'April'){
          cy.get('.ui-datepicker-prev').click()
        }
      })
    }

    cy.get('.ui-datepicker-month').then($element =>{
      expect($element.text()).to.equal('April')
    })

    cy.get('.ui-datepicker-year').then($element =>{
      expect($element.text()).to.equal('2000')
    })

    cy.get('.ui-state-default').each(($element) => {
      if($element.text() == '10'){
        cy.wrap($element).click()
        cy.get($element).then($el =>{
          expect($el.text()).to.equal('10')
        })
      }
    })

    //end of datepicker

    cy.get('#genderfemale').check('Female', {force: true}).should('be.checked')
    cy.get('#streetaddress').should('be.visible').type('Street Address 1234')
    cy.get('#country').should('be.visible').select(13).should('have.value', 'Australia')
    cy.get('#zipcode').should('be.visible').type('123456')
    cy.get('#city').should('be.visible').type('Sydney')
    cy.get('#occupation').should('be.visible').select(1).should('have.value', 'Employee')
    cy.get('[name = "Hobbies"]').each($element => {
      cy.wrap($element).should('be.visible').check({force: true}).should('be.checked');
    })
    cy.get('#website').should('be.visible').type('www.google.com')
    cy.get('#picturecontainer').selectFile('C:\\Users\\Camila\\Documents\\QA\\cypress-project\\images\\image1.png', {force: true})
    cy.get('#nextenterproductdata').should('be.visible').click()
  })
})