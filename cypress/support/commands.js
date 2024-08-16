// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// < reference types="cypress-xpath" />

Cypress.Commands.add('dynamicBoard1', function(){
    return cy.get('.slide-title > strong').each(($element, $index) => { //peguei o locator da lista toda para percorrer, o each é usado em listas
                if ($element.text().trim() == 'Truck Insurance') { //o array é 0 based (sempre começa com 0)
                    cy.log('Entrou')
                    cy.wrap($index).as('paging_index') // VARIÁVEL = salvei o valor do indice em paging_index
                }
            })
})

Cypress.Commands.add('dynamicBoard2', function(){
    return cy.get('@paging_index').then($paging => {
        cy.get('.flex-control-paging > li > a').each(($element, $index) => {
            if ($index == $paging) {
                cy.wrap($element).click()
                cy.get('#get_truck').click()
                cy.get('#selectedinsurance').then($title => {
                    expect($title.text()).to.equal('Truck Insurance')
                })
            }
        })
    })
})

Cypress.Commands.add('page1', function(){
    cy.get('#make').should('be.visible').select(13).should('have.value', 'Toyota')
    cy.get('#engineperformance').should('be.visible').type('1000')
    cy.get('#opendateofmanufacturecalender').should('be.visible').click()
    cy.get('#dateofmanufacture').should('be.visible').type('02/15/2024')
    cy.get('#numberofseats').should('be.visible').select(5).should('have.value', '5')
    cy.get('#fuel').should('be.visible').select(1).should('have.value', 'Petrol')
    cy.get('#payload').should('be.visible').type('500')
    cy.get('#totalweight').should('be.visible').type('25000')
    cy.get('#listprice').should('be.visible').type('100000')
    cy.get('#licenseplatenumber').should('be.visible').type('123456')
    cy.get('#annualmileage').should('be.visible').type('90000')
    cy.get('#nextenterinsurantdata').should('be.visible').click()
})

Cypress.Commands.add('page2', function(){
    cy.get('#firstname').should('be.visible').type('FirstName')
    cy.get('#lastname').should('be.visible').type('LastName')
    cy.get('#opendateofbirthcalender').should('be.visible').click()
    cy.get('#birthdate').should('be.visible').type('04/10/2000')
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

Cypress.Commands.add('page3', function(){
    cy.get('#startdate').type('10/03/2024')
    cy.get('#insurancesum').should('be.visible').select(2).should('have.value', '5000000')
    cy.get('#damageinsurance').should('be.visible').select(3).should('have.value', 'Full Coverage')
    cy.get('[name="Optional Products[]"]').each($element => {
      cy.wrap($element).should('be.visible').check({force: true}).should('be.checked')
    })
    cy.get('#nextselectpriceoption').should('be.visible').click()
})

Cypress.Commands.add('page4', function(){
    cy.get('#selectultimate').should('be.visible').check({force: true}).should('be.checked')
    cy.get('#nextsendquote').should('be.visible').click()
})