const {searchdata} =inject()

Feature('search')

Scenario('Search for a valid product', async ({I}) => {
  I.amOnPage('https://demo.spreecommerce.org/')
  I.click('.search-icons')
  I.fillField(locate('#search-dropdown').find('input'), searchdata.searchText)
  I.pressKey('Enter')
  I.seeElement({css: '[data-hook=\'homepage_products\']'})
  const productname = await I.grabTextFrom(locate('.product-component-name').at(1))
  console.log(productname)
})
