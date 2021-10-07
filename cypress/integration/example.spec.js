
describe('playing aorund with how to work with this testing', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains an h1', ()=>{
            cy.get('h1').should('be.visible');
        });
    });
});