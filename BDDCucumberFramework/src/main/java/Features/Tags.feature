Feature: Dummy Tags Scenarios 

@SmokeTest @Regression @Anshul @Selenium
Scenario: Login Free CRM 
	Given user is on Application HomePage
	
@SmokeTest	
Scenario: Login with Invalid Credentials 
	Given user is on Application HomePage
	
@Functional @Regression	
Scenario: Create Deal 
	Given user is on Application HomePage
	
@End2End 	
Scenario: Create Contact
	Given user is on Application HomePage

@Task @End2End	
Scenario: Create Task
	Given user is on Application HomePage
	
@Create @Regression	
Scenario: Create Case
	Given user is on Application HomePage
	
@SmokeTest @End2End	
Scenario: Create Email
	Given user is on Application HomePage