const {userdata, alertmessages} = inject()

Feature('login')

Scenario('Valid user is able to login successfully', async ({I, loginPage}) => {
  I.amOnPage('https://demo.spreecommerce.org/')
  loginPage.sendForm(userdata.user.email, userdata.user.password)
  I.see(alertmessages.loginSuccessMsg)
})
