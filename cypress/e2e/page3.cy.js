describe('Enter product data test', function () {

  it('Test', function () {
    cy.visit('')

    cy.dynamicBoard1()
    cy.dynamicBoard2()

    cy.get('#nextenterinsurantdata').scrollIntoView().should('be.visible').click()
    cy.get('#nextenterproductdata').scrollIntoView().should('be.visible').click()

    cy.get('#startdate').type('10/03/2024')
    cy.get('#insurancesum').should('be.visible').select(2).should('have.value', '5000000')
    cy.get('#damageinsurance').should('be.visible').select(3).should('have.value', 'Full Coverage')
    cy.get('[name="Optional Products[]"]').each($element => {
      cy.wrap($element).should('be.visible').check({force: true}).should('be.checked')
    })
    cy.get('#nextselectpriceoption').should('be.visible').click()
  })
})