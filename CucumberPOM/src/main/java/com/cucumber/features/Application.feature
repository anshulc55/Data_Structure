Feature: Test Free CRM Web Application

Scenario: Verify Application Landing Page
	Given User is on Application Landing Page 
	Then verify user is on Application Landing Page
	
Scenario: Application Login
	Given User is on Application Landing Page 
	Then Login FreeCRM Application
	Then Verify User is on Application Home
	
Scenario: Create New Contact in Application
	Given User is on Application Landing Page 
	Then Login FreeCRM Application
	Then Open Contact Page
	Then Create new Contact 