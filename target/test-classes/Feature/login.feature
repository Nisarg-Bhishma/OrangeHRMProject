Feature: Login Feature

  @positive
  Scenario: User should be able to login successfully with valid credentials
    Given User is on login page
    When User enters Username
    And User enters Password
    And User click on LOGIN button
    Then  User should be able to login successfully

  @nagative
  Scenario Outline: User should not be able to login successfully with invalid credentials
    Given User is on login page
    When User enters invalid Username "<UserName>"
    And User enters invalid Password "<Password>"
    And User click on LOGIN button
    Then  User should not be able to login successfully and "<receive message>"

    Examples:
    | UserName  | Password    | receive message         |
    | Admin     |             | Password cannot be empty|
    |           | admin123    | Username cannot be empty|
    | ADMIN     | Admin123    | Invalid credentials     |