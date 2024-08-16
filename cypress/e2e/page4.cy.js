describe('Select price option test', function () {

  it('Test', function () {
    cy.visit('')

    cy.dynamicBoard1()
    cy.dynamicBoard2()
    cy.page1()
    cy.page2()
    cy.page3()

    cy.get('#selectultimate').should('be.visible').check({force: true}).should('be.checked')
    cy.get('#nextsendquote').should('be.visible').click()
  })
})