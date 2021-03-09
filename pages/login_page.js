const { I, navbar } = inject();

module.exports = {
    username: '#spree_user_email',
    password: '#spree_user_password',
    loginButton: '.btn-primary',

    sendForm(username, password){
        I.click(navbar.accountIcon)
        I.click(navbar.loginLink)
        I.fillField(this.username, username)
        I.fillField(this.password, password)
        I.click(this.loginButton)
    }
}
