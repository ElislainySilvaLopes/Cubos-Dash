import loginPage from '../../pageobjects/login.page'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { checkUrl,checkMsg, checkTextVisible, clearText } from '../../helper/common.helper'


Then(/^sou direcionado para a página inicial$/, () => {
    checkUrl("include", "/dashboard");
})
Then(/^vejo a mensagem de erro de email ou senha inválidos$/, () => {
    checkMsg("[role= 'status']", "Email e/ou senha inválidos!");
    checkTextVisible('Bem vindo a sua plataforma cúbica');
})
Then(/^vejo a mensagem de erro pra informar email$/, () => {
    checkMsg("span", "O campo e-mail é obrigatório");
    checkTextVisible('Bem vindo a sua plataforma cúbica');
})
Then(/^vejo a mensagem de erro pra informar a senha$/, () => {
    checkMsg("span", "O campo senha é obrigatório");
    checkTextVisible('Bem vindo a sua plataforma cúbica');
})
Then(/^vejo a mensagem de erro para informar um email válido$/, () => {
    checkMsg("span", "Informe um email válido");
    checkTextVisible('Bem vindo a sua plataforma cúbica');
})
Then(/^vejo a mensagem de usuário salvo com sucesso$/, () => {
    checkMsg("div", "Usuário salvo com sucesso!");
    checkUrl("include", "/dashboard");
})
Then(/^vejo a mensagem de erro que o usuário já existe$/, () => {
    checkMsg("div", "Email já em uso");
    checkUrl("include", "/dashboard");
})
Then(/^eu vejo a mensagem de erro "<ERRO>"$/, () => {
    checkMsg("div", "Informe ao menos um conhecimento!");
    checkUrl("include", "/dashboard");
})
Then(/^eu vejo a mensagem informando <ERRO>$/, () => {
    checkMsg("span", "Informe um sobrenome");
    checkUrl("include", "/dashboard");
})
Then(/^o cúbico é deletado$/, () => {
    checkUrl("include", "/dashboard");
})
Then(/^o modal é fechado$/, () => {
    checkUrl("include", "/dashboard");
})
Then(/^retorna um usuário de acordo com a busca feita$/, () => {
    checkTextVisible('Teste Tesste');
    clearText(loginPage.FIELDS.procurar);
})
