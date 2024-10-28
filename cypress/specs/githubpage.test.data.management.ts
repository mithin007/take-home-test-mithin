import { TestDataObject } from "../fixtures/testdata"
import { loginPage } from "../pageObjects/login.pageObjects"

describe('Data Driven Test', () => {
    it('Data Driven Login Test', () => {
        cy.visit('https://github.com/login')
        TestDataObject.dataSet.forEach((data) => {
            loginPage.userNameTextField().clear().type(`${data.userName}`)
            loginPage.passwordTextField().clear().type(`${data.password}`)
        })


    })
})


