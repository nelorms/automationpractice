module.exports = class Page {

    open() {
        browser.maximizeWindow()
        return browser.url(`http://automationpractice.com/index.php`)
    }
}
