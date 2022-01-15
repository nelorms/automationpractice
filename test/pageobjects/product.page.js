const Page = require('./page')

class ProductPage extends Page {
    get writeAReviewButton(){
        return $('#new_comment_tab_btn')
    }
    get ReviewTitle(){
        return $('#comment_title')
    }
    get Review(){
        return $('#content')
    }
    get sendButton(){
        return $('#submitNewMessage')
    }
    get NewCommentModal(){
        return $('.fancybox-inner')
    }
    get boxInfoProduct(){
        return $('.box-info-product')
    }


    async WriteAReview(){
        await this.writeAReviewButton.click()
        await this.ReviewTitle.setValue("Testing Title")
        await this.Review.setValue("This is a testing comment, please ignore")
        await this.sendButton.click()
    }
}


module.exports = new ProductPage();
