const Page = require('./page');

class LoginPage extends Page {
    get emailAddressNewClient() {
        return $('#email_create')
    }
    get SubmitButtonNewClient() {
        return $('#SubmitCreate')
    }
    get genderRadioButton() {
        return $('#id_gender1')
    }
    get customerFirstName(){
        return $('#customer_firstname')
    }
    get customerLastName(){
        return $('#customer_lastname')
    }
    get customerEmail(){
        return $('#email')
    }
    get customerPassword(){
        return $('#passwd')
    }
    get customerDay(){
        return $('#days')
    }
    get customerMonth(){
        return $('#months')
    }
    get customerYear(){
        return $('#years')
    }
    get customerAddress1(){
        return $('#address1')
    }
    get customerCity(){
        return $('#city')
    }
    get customerState(){
        return $('#id_state')
    }
    get customerPostalCode(){
        return $('#postcode')
    }
    get customerCountry(){
        return $('#id_country')
    }
    get customerMobilePhone(){
        return $('#phone_mobile')
    }
    get customerAlias(){
        return $('#alias')
    }
    get registerButton(){
        return $('#submitAccount')
    }
    get myAccountTitle(){
        return $('//h1[text()="My account"]')
    }
    get myPersonalInformationButton(){
        return $(`//span[text()[contains(.,'My personal information')]]`)
    }
    get email(){
        return $('#email')
    }
    get password(){
        return $('#passwd')
    }
    get submitLogin(){
        return $('#SubmitLogin')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async RegisterNewClient(){
        var email = this.generateRandomEmail(10) + '@gmail.com'
        await this.emailAddressNewClient.setValue(email)
        //console.log(email)
        await this.SubmitButtonNewClient.click()
        await this.genderRadioButton.click()
        await this.customerFirstName.setValue('TestingUserFirstName')
        await this.customerLastName.setValue('TestingUserLastName')
        await this.customerPassword.setValue('12345')
        await this.customerDay.selectByIndex(15)
        await this.customerMonth.selectByIndex(5)
        await this.customerYear.selectByIndex(10)
        await this.customerAddress1.setValue('Testing Address')
        await this.customerCity.setValue('Testing City')
        await this.customerState.selectByIndex(5)
        await this.customerPostalCode.setValue('12345')
        await this.customerCountry.selectByIndex(1)
        await this.customerMobilePhone.setValue('123')
        await this.customerAlias.setValue('Testing Alias')
        await this.registerButton.click()
    }

    async loginWithValidCredentials(){
        await this.email.setValue('nelaormasis@gmail.com')
        await this.password.setValue('12345')
        this.submitLogin.click()
    }

    open() {
        return super.open();
    }

    navigateToMyPersonalInformationPage(){
        this.myPersonalInformationButton.click()
    }

    generateRandomEmail(length) {
        var result           = ''
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result
    }
}

module.exports = new LoginPage();
