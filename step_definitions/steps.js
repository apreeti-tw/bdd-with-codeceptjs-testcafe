const { I } = inject();
// Add in your custom step files

Given('I am on Home page', () => {
  // From "features/search.feature" {"line":7,"column":5}
  I.amOnPage('https://demo.spreecommerce.org/')
});

When('I type a search text {string}', (text) => {
  // From "features/search.feature" {"line":8,"column":5}
  I.click('.search-icons')
  I.fillField(locate('#search-dropdown').find('input'), text)
});

When('I press ENTER', () => {
  // From "features/search.feature" {"line":9,"column":5}
  I.pressKey('Enter')
});

Then('I should see the search results', () => {
  // From "features/search.feature" {"line":10,"column":5}
  I.seeElement({css: '[data-hook=\'homepage_products\']'})
});
