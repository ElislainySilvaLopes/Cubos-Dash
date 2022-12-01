import loginPage from '../../pageobjects/login.page'
import { options } from '../../../fixtures/Credentials.json'
import { And } from 'cypress-cucumber-preprocessor/steps'
import { clickField, enterText, checkUrl, checkTextVisible, clearText } from '../../helper/common.helper'


And(/^clico no botão "ENTRAR"$/, () => {
    clickField(loginPage.BUTTONS.entrar);
  })

And (/^preencho corretamente os campos Nome, E-mail, CPF, Telefone e Stack$/, () => {
    enterText(loginPage.FIELDS.nome, "TESTE TESTE");
    enterText(loginPage.FIELDS.email, "teste.teste@email.com");
    enterText(loginPage.FIELDS.cpf, "114.219.436-11");
    enterText(loginPage.FIELDS.telefone, "(33) 33333-3333");
    cy.get("[data-testid='selectStack']").click();
    cy.get("ul[class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9']").click(0); 

})
And(/^seleciono os Conhecimentos$/, ()=> {
  cy.get('input[type="checkbox"]').eq(4).check()
  checkTextVisible("React");
 
})
And(/^clico no botão “Salvar”$/, () => {
  clickField(loginPage.BUTTONS.salvar);
  checkTextVisible("SALVAR");

})
And (/^não preencho corretamente um dos campos Nome, E-mail, CPF, Telefone, Stack e conhecimento$/, () => {
  enterText(loginPage.FIELDS.nome, "TESTE TESTE");
  enterText(loginPage.FIELDS.email, "teste.teste@email.com");
  enterText(loginPage.FIELDS.cpf, "114.219.436-11");
  enterText(loginPage.FIELDS.telefone, "(33) 33333-3333");
  cy.get("[data-testid='selectStack']").click();
  cy.get("ul[class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9']").click(0); 
})
And (/^preencho incorretamnete um dos campos Nome, E-mail, CPF e Telefone$/, () => {
  enterText(loginPage.FIELDS.nome, "TESTE");
  enterText(loginPage.FIELDS.email, "teste.teste@email.com");
  enterText(loginPage.FIELDS.cpf, "114.219.436-11");
  enterText(loginPage.FIELDS.telefone, "(33) 33333-3333");
})

And(/^seleciono a stack e os Conhecimentos$/, () => {
  cy.get("[data-testid='selectStack']").click();
  cy.get("ul[class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9']").click(0); 
  cy.get('input[type="checkbox"]').eq(4).check();
})

And(/^abre um modal de exclusão$/, () => {
  checkTextVisible("Deletar Cúbico");
})
And(/^clico no botão “Deletar”$/, () => {
  cy.get("[data-testid='btnConfirmRemove']").eq(0).click();
  checkUrl("include", "/dashboard");
})
And(/^clico no botão “Cancelar”$/, () => {
  cy.get("[data-testid='btnCancelRemove']").eq(0).click();
  checkUrl("include", "/dashboard");
})
And(/^edito um dos campos Nome, Email, CPF, Telefone, Stack e Conhecimento$/, () => {
  clearText(loginPage.FIELDS.email);
  enterText(loginPage.FIELDS.email, "teste.teste@gmail.com");
})




