describe('Dynamic board test', function () {

  it('Test', function () {
    cy.visit('')

    cy.get('.slide-title > strong').each(($element, $index) => { //peguei o locator da lista toda para percorrer, o each é usado em listas
        if ($element.text().trim() == 'Truck Insurance') { //o array é 0 based (sempre começa com 0)
            cy.log('Entrou')
            cy.wrap($index).as('paging_index') // VARIÁVEL = salvei o valor do indice em paging_index
        }
    })

    cy.get('@paging_index').then($paging => {
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
})