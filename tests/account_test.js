const {userdata, alertmessages} = inject()
Feature('account')

Before(({I}) => {
  I.loginAs(userdata.user.email, userdata.user.password)
})

Scenario('User should be able to add new address', ({I, accountPage}) => {
  I.say('User enters address details')
  accountPage.sendAddressDetails(userdata.user)
  I.waitForText(alertmessages.newAddressSaveSuccessMsg)

  I.say('Verify if user address is displayed as entered')
  accountPage.checkIfAddressDisplayed(userdata.user)
})

After(({I}) => {
  I.deleteAddress()
})
