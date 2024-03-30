const { expect } = require('chai');
import { LoginForm } from '../pom/LoginForm';
describe('Проверка формы логина', () => {
  it('Тест 1', () => {
    cy.visitHomePage();
    cy.wait(10000);
    cy.get('.gtm-join-free').should('exist').click();
    cy.get(
      '.socialAuth-module__form-autification__footer___0vqGz > .button-module__button___4j-PY'
    ).should('contain', ' with Facebook');
    cy.get('.auth-module__main-img___Rc8of')
      .should('have.attr', 'src')
      .and('include', 'https://storage.uadreams.com/content/');
    cy.get('.socialAuth-module__footer-autification__list___v655O').should(
      'have.length',
      1
    );
    cy.contains('Privacy Policy')
      .should('have.attr', 'href')
      .and('equal', 'https://policies.google.com/privacy'); //

    cy.get(
      '.auth-module__auth-block___NwlE- .formAuth-module__header___zlHkZ .formAuth-module__list___Lsb89 .formAuth-module__btn___np9S0'
    )
      .should('contain', ' Log in')
      .click();

    cy.contains('span', 'E-mail').as('mail');
    cy.get('@mail').type('goddessesgame@gmail.com');

    cy.contains('span', 'Password').as('password');
    cy.get('@password').type('123456');
  });
  it('test', () => {
    cy.visitHomePage();
    cy.wait(10000);
    cy.get(
      '.cookies-module__block-btns___Zm24R > .button-module__button-success___rsQCA'
    ).click();
    cy.get(':nth-child(2) > .formAuth-module__btn___np9S0').click();

    cy.wait(10000);

    //1 Using aliases - in global use
    cy.contains('.logIn-module__wrap___rtHIY', 'Username or E-mail').as('mail');
    cy.get('@mail').find("[type='text']");
    cy.contains('.logIn-module__wrap___rtHIY', 'Password').as('password');

    //2 Using then() method - test some elements
    cy.contains('.logIn-module__wrap___rtHIY', 'Username or E-mail').then(
      (mail) => {
        cy.wrap(mail).find("[type='text']");
      }
    );
    cy.contains('.logIn-module__wrap___rtHIY', 'Password').then((password) => {
      cy.wrap(password).find("[type='password']");
    });
  });
  it.only('Extracting text from element bober', () => {
    cy.visitHomePage();
    cy.wait(10000);
    cy.get(
      '.cookies-module__block-btns___Zm24R > .button-module__button-success___rsQCA'
    ).click();
    cy.get(':nth-child(2) > .formAuth-module__btn___np9S0').click();

    cy.wait(10000);
    //1 Using assertions
    cy.get('.logIn-module__wrap___rtHIY').find("[type='text']");

    //2 Using then() method using JQuery
    cy.contains('span', 'Username or E-mail').then((span) => {
      let text = span.text();
      expect(text).to.equal('Username or E-mail');
    });
    //3 Using invoke()
    cy.contains('span', 'Username or E-mail')
      .invoke('text')
      .then((span) => {
        expect(span).to.equal('Username or E-mail');
      });

    //4 Using using then()
    cy.contains('span', 'Username or E-mail').then((span) => {
      cy.wrap(span).should('contain', 'Username or E-mail');
    });

    //5 Getting attributes using invoke
    cy.get("[type='text']")
      .invoke('attr', 'name')
      .then((nameVall) => {
        expect(nameVall).to.equal('login');
      });

    //7 Getting values from props
    cy.get("[type='text']").type('Bober');

    cy.get("[type='text']")
      .invoke('prop', 'value')
      .then((text) => {
        expect(text).to.equal('Bober');
      });
  });
  it.only('Using POM', () => {
    LoginForm.navigateTo();
    LoginForm.fillUsingTheLoginForm();
  });
});
