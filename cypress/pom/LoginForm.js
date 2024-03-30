export class LoginForm {
  static navigateTo() {
    cy.visitHomePage();
    cy.wait(10000);
    cy.get(
      '.cookies-module__block-btns___Zm24R > .button-module__button-success___rsQCA'
    ).click();
    cy.get(':nth-child(2) > .formAuth-module__btn___np9S0').click();
  }
  static fillUsingTheLoginForm() {
    cy.contains('.logIn-module__wrap___rtHIY', 'Username or E-mail').then(
      (mail) => {
        cy.wrap(mail).find("[type='text']").type('goddessesgame@gmail.com');
      }
    );
    cy.contains('.logIn-module__wrap___rtHIY', 'Password').then((password) => {
      cy.wrap(password).find("[type='password']").type('123456');
    });
  }
}
