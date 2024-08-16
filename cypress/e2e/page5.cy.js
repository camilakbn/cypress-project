import { faker } from '@faker-js/faker';

describe('Send quote test', function () {

  it('Test', function () {
    cy.visit('')

    cy.dynamicBoard1()
    cy.dynamicBoard2()
    cy.page1()
    cy.page2()
    cy.page3()
    cy.page4()

    cy.get('#email').should('be.visible').type(faker.internet.email())
    cy.get('#phone').should('be.visible').type('12345678')
    cy.get('#username').should('be.visible').type('username')
    cy.get('#password').should('be.visible').type('Password1')
    cy.get('#confirmpassword').should('be.visible').type('Password1')
    cy.get('#Comments').should('be.visible').type('no comments')
    cy.get('#sendemail').should('be.visible').click()
    cy.wait(10000)
    cy.get('.sa-confirm-button-container').should('be.visible').click()
  })
})