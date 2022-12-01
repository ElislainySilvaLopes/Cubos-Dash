/// <reference types="Cypress" />

const helper = {
  enterText: (field, text) => {
    cy.get(field).type(text).should("have.value", text)
  },
  clearText: (field, text) => {
    cy.get(field).clear(text)
  },

  clickField: (field) => {
    cy.get(field).click({ force: true })
  },

  clickFieldWithText: (field, text) => {
    cy.get(`${field}:contains('${text}')`).click({ force: true })
  },

  clickFieldWith2Texts: (field, text1, text2) => {
    cy.get(`${field}:contains('${text1}'):contains('${text2}')`).click({ force: true })
  },

  checkUrl: (includes, route) => {
    cy.url().should(includes, route)
  },

  checkTextVisible: (text) => {
    cy.contains(text).should("be.visible")
  },

  checkNotification: (text) => {
    cy.get(".ant-notification-notice-message").should("have.text", text)
  },

  checkButtonStatus: (field, status) => {
    cy.get(field).should(status)
  },

  selectOptionWithText: (field, option) => {
    cy.get(field).select(option).should('contain.text', option)
  },

  selectOptionValidate: (field, option, length) => {
    cy.get(`${field} > option`).should('have.length', length)
    cy.get(field).select(option).should('have.value', option)
  },

  selectMultiple: (field, ...options) => {
    cy.get(field).select([...options])
  },
  checkMsg: (field, msg) => {
    cy.get(field).contains(msg);
  },
  sleep: (time = 500) => cy.wait(time)
}

export default helper
