Feature: Login Functionality

    Scenario: Login to QA with valid MAS username and password
        Given Navigate to QA Environment
        When Login with MAS user credentials
        Then Login should be successfully

