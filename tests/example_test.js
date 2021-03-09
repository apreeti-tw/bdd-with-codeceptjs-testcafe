Feature('example')

Scenario('Test 1', ({I}) => {
  I.amOnPage('https://demo.spreecommerce.org/')
  I.wait(1)
  I.waitForElement('#account-button')
  I.see('SPORTSWEAR')
})

Scenario('Test 2', ({I}) => {
  I.amOnPage('https://demo.spreecommerce.org/')
  I.wait(1)
  I.waitForElement('#account-button')
  I.dontSeeElement('.account-page-user-info-item-definition')
})

Scenario('Full page screenshot', ({I}) => {
  I.amOnPage('https://demo.spreecommerce.org/')
  I.wait(1)
  I.saveScreenshot('fullpage.png', true)
})
