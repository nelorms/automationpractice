const Page = require ('./page')

class HomePage extends Page{
    get SignInButton() {
        return $('.login')
    }
    get LogOutButton(){
        return $('.logout')
    }
    get ProductButton(){
        return $('.product_img_link')
    }
    get Logo(){
        return $('.submitNewMessage')
    }
    get addToCartButton(){
        return $('.ajax_add_to_cart_button')
    }
    get ProductAddedModal(){
        return $('#layer_cart')
    }
    get ProductAddedModalCloseButton(){
        return $('.cross')
    }

    open() {
        return super.open()
    }

    async goToSignInPage () {
        await this.SignInButton.click()
    }
    async logoutSession(){
        await this.LogOutButton.click()
    }
    async navigateToProductPage(){
        await this.ProductButton.click()
    }
    async navigateToHomePage(){
        await this.Logo.click()
    }
    async addProductToCart(){
        await this.addProductToCart.click()
    }
    async closeProductAddedModal(){
        await this.ProductAddedModalCloseButton.click()
    }
}

module.exports = new HomePage();
