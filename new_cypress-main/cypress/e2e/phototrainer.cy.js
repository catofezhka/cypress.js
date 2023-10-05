
describe('Смена фото тренера', function () {
    it('правильный регистр', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('annahansanamyan@gmail.com');
        cy.get('#password').type('Bastet121270');
        cy.get('.auth__button').click();
        cy.get('[href="/shop"] > .header__btn-img').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type ('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Fedor Ivanov');
        cy.get('.pay__payform-v2').click();
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type ('56456'); 
        cy.get('.payment__submit-button').click()
    })

})

