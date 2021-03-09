const { I } = inject();

module.exports = {
    accountIcon: locate('#account-button'),
    loginLink: locate('#link-to-account').find('a').withText('LOG IN')
}
