Feature: User should not be able to log in with invalid credentials

  Background:
    Given user is in the login page


  @login
  Scenario Outline: User should not be able to login with invalid credentials

    When user enters invalid "<username>" and "<password>"
    Then user should not be able to log in and able to see "<expected error message>"

    Examples:
      | username | password | expected error message      |
      | Admin    | abc123   | Invalid credentials present |
      | Masw     | admin123 | Invalid credentials         |
      | Masw     | abc123   | Invalid credentials         |
      | Admin    |          | Password cannot be empty    |
      |          | admin123 | Username cannot be empty    |
      | Masw     |          | Password cannot be empty    |
      |          | abc123   | Username cannot be empty    |
      |          |          | Username cannot be empty    |
