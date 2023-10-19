Feature: Login Functionality

    Scenario: Login to QA with valid PPC username and password
        Given Navigate to QA Environment
        When Login with PPC user credentials
        Then Login should be successfully