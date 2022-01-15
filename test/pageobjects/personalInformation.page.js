const Page = require ('./page')

class personalInformation extends Page {
    get FirstName() {
        return $('#firstname')
    }
    get LastName() {
        return $('#lastname')
    }
    get SaveButton(){
        return $('[name="submitIdentity"]')
    }
    get oldPassword(){
        return $('#old_passwd')
    }
    get alertSuccess(){
        return $('.alert-success')
    }
    get backToYourAccountButton(){
        return $(`//*[text()[contains(.,'Back to your account')]]`)
    }

    async changeFirstNameAndLastName(firstName, lastName){
        await this.FirstName.setValue(firstName)
        await this.LastName.setValue(lastName)
        await this.oldPassword.setValue('12345')

        this.SaveButton.click()
    }
    goBackToYourAccount(){
        this.backToYourAccountButton.click()
    }
}

module.exports = new personalInformation();
