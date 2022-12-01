import loginPage from '../../pageobjects/login.page'
import { When } from 'cypress-cucumber-preprocessor/steps'
import { enterText, clickField, checkUrl} from '../../helper/common.helper'


When(/^eu preencho os campos de email e senha corretamente$/, () => {
    loginPage.FUNCTIONS.login("Cubos");
  })
When(/^preencho incorretamente os campos E-mail e Senha$/, () => {
    loginPage.FUNCTIONS.login("fakeEmail");
})
when(/^eu nao preencho o campo de email e preencho o campo de senha corretamente$/, () => {
    enterText("[data-testid='inputPassword']", "Cubos1234!");
})
when(/^eu preencho o campo de E-mail corretamente e preencho  o campo de senha incorretamente$/, () => {
    enterText("[data-testid='inputEmail']", "admin@cubos.io");
})
When(/^eu preencho o campo de E-mail com e-mail inválido$/, () => {
    loginPage.FUNCTIONS.login("invalidEmail");
})
When(/^eu clico no botão “Adicionar”$/, () => {
    clickField(loginPage.BUTTONS.adicionar);
    checkUrl("include", "/dashboard");
    
})
When(/^eu clico no botão “Deletar”$/, () => {
    cy.get("[data-testid='btnRemove']").eq(0).click();
})
When(/^faço uma busca por Usuário, Email, CPF, Telefone, Stack, Conhecimento e data de criação$/, () => {
    enterText(loginPage.FIELDS.procurar, "14147347002");
  })

  When(/^eu clico no botão Editar$/, () => {
    cy.get("[data-testid='btnEdit']").eq(0).click();
    checkUrl("include", "/dashboard");
    
})