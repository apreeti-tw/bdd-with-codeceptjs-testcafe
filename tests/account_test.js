const {userdata, alertmessages} = inject()
Feature('account')

Before(({I}) => {
  I.loginAs(userdata.user.email, userdata.user.password)
})

Scenario('User should be able to add new address', ({I, accountPage}) => {
  accountPage.sendAddressDetails(userdata.user)
  I.waitForText(alertmessages.newAddressSaveSuccessMsg)
  accountPage.checkIfAddressDisplayed(userdata.user)
})

After(({I}) => {
  I.deleteAddress()
})
