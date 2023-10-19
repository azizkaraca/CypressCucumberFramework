Feature: Logout Functionality

    Background: Pre conditions

    Given Navigate to QA Environment
    When Login with PPC user credentials
    Then Login should be successfully


    Scenario: logout from application

        And User goes to menu
        And User goes to Account page
        And User selects Log Out button
        Then User should be Logout successfully