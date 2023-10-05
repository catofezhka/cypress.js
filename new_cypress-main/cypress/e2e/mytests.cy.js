
describe('Автотесты на позитивный кейс авторизации', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click()

    })

})


describe('Автотесты на проверку логики восстановления пароля', function () {
    
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader');
        cy.get('#exitMessageButton > .exitIcon')
        
    })

})



describe('Автотесты на негативный кейс авторизации', function () {
    
    it('Неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader');
        cy.get('#exitMessageButton > .exitIcon')
        
    })

})



describe('Автотесты на негативный кейс авторизации', function () {
    
    it('Неправильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader');
        cy.get('#exitMessageButton > .exitIcon')
        
    })

})



describe('Автотесты на негативный кейс валидации', function () {
    
    it('логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader');
        cy.get('#exitMessageButton > .exitIcon')
        
    })

})


describe('Автотест на приведение к строчным буквам в логине ', function () {
    
    it('правильный регистр', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
        
    })

})








