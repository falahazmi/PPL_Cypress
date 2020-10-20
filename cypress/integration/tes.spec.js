describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Muhammad Falaah Azmi')
        cy.get('[type="text"][placeholder="Email"]')
            .type('azmifa13@gmail.com')
        cy.contains('Remember me').first().click()
        // cy.contains('Inline form').get('[class="custom-checkbox"]').should('be.checked')
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('azmifa13@gmail.com')
        cy.get('#inputPassword2').type('coba123')
        cy.contains('Option 1').click()
        // cy.contains('Option 2').click()

    });

    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('azmifa13@gmail.com')
        cy.get('#exampleInputPassword1').type('coba123')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Muhammad')
        cy.get('[placeholder="Subject"]').type('Falaah')
        cy.get('[placeholder="Message"]').type('Azmi')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Falaah')
        cy.get('#inputLastName').type('Azmi')
        cy.get('#inputEmail').type('faridaziz@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('azmifa13@gmail.com')
        cy.get('#inputPassword3').type('coba123')
        cy.get('.custom-checkbox').last().click()
    });
})