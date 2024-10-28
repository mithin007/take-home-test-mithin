export module TestDataObject {
  export const dataSet = [
    { userName: Cypress.env('userName1'), password: Cypress.env('password1') },
    { userName: Cypress.env('userName2'), password: Cypress.env('password2') }
  ]
};