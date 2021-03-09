Feature: Search
  In order to purchase my product quickly
  As a customer
  I want to be able to search the product

  Scenario: search for a valid product
    Given I am on Home page
    When I type a search text "dress"
    And I press ENTER
    Then I should see the search results
