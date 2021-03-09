// in this file you can append custom step methods to 'I' object
const { loginPage, accountPage, alertmessages } = inject()

module.exports = function() {
  return actor({

    loginAs: function (username,password){
      this.amOnPage('https://demo.spreecommerce.org/')
      loginPage.sendForm(username,password)
      this.see(alertmessages.loginSuccessMsg)
    },

    deleteAddress: function(){
      this.click(accountPage.deleteIcon)
      this.waitForElement(accountPage.deleteAddressPopUpConfirm)
      this.click(accountPage.deleteAddressPopUpConfirm)
      this.waitForText(alertmessages.deleteAddressSuccessMsg)
    }
  });
}
