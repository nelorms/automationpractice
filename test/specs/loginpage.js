const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const PersonalInformation = require('../pageobjects/personalInformation.page')
const ProductPage = require('../pageobjects/product.page')
const homePage = require('../pageobjects/home.page')

describe('My Login application', () => {
    beforeEach(async function(){
        HomePage.open()
        HomePage.goToSignInPage()
    })
    afterEach(async function(){
        HomePage.logoutSession()
    })
    
    it('Create New Client', async () => {
        await LoginPage.RegisterNewClient()
        expect(LoginPage.myAccountTitle).toBeDisplayed()
        LoginPage.navigateToMyPersonalInformationPage()

        await PersonalInformation.FirstName.waitForDisplayed()

        expect(PersonalInformation.FirstName.getValue()).toContain('TestingUserFirstName')
        expect(PersonalInformation.LastName.getValue()).toEqual('TestingUserLastName')
    })

    it('Edit Customer Information', async () => {
        LoginPage.loginWithValidCredentials()
        LoginPage.navigateToMyPersonalInformationPage()
        await PersonalInformation.FirstName.waitForDisplayed()

        PersonalInformation.changeFirstNameAndLastName("NewName", "NewLastName")
        expect(PersonalInformation.alertSuccess).toBeDisplayed()
        PersonalInformation.goBackToYourAccount()
        LoginPage.navigateToMyPersonalInformationPage()
        PersonalInformation.changeFirstNameAndLastName("Marianela", "Ormasis")
    })

    it('User should be able to add reviews to the products', async () => {
        LoginPage.loginWithValidCredentials()
        HomePage.navigateToHomePage()
        HomePage.navigateToProductPage()
        ProductPage.WriteAReview()
        expect(ProductPage.NewCommentModal).toBeDisplayed
    })

    it('User should be able to add products to cart from homepage', async () => {
        LoginPage.loginWithValidCredentials()
        HomePage.navigateToHomePage()
        HomePage.addProductToCart()
        expect(HomePage.ProductAddedModal).toBeDisplayed
        HomePage.closeProductAddedModal()
    })

    it('User should be able to see product page', async () => {
        LoginPage.loginWithValidCredentials()
        HomePage.navigateToHomePage()
        homePage.navigateToProductPage()
        expect(ProductPage.boxInfoProduct).toBeDisplayed
    })
})




