describe('Pizza Website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/pizza')
    })

    const nameInput = () => cy.get('input[name=first_name]')
    const sizeInput = () => cy.get('[name=size]')
    const instructInput = () => cy.get('input[name=instruct]')
    const orderBtn = () => cy.get('button[id="orderBtn"]')
    const checkboxes = () => cy.get('[type="checkbox"]')

    it('sanity check', () => {
        expect (2 + 3).to.equal(5)
    })

    it('you can add text to the box', () => {
        nameInput()
            .should('exist')
            .should('be.empty')
            .type('Jake')
            .should('have.value', 'Jake')
        instructInput()
            .should('exist')
            .should('be.empty')
            .type('No cheese please')
            .should('have.value', 'No cheese please')
    })

    it('you can use the dropdown menu', () => {
        cy.get('select').select('Small')
    })
    
    it('you can select multiple toppings', () => {
        checkboxes()
            .check()
    })

    it('you can submit the form', () => {
        orderBtn()
            .click()
    })
}) 

 