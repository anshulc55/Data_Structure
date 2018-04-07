Feature: Login Application feature

Scenario: User Login Scenario
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM
	#Then user enters username and password
	Then user enters "anshulc55" and "Anshul@123"
	And user clicks on Login Butoon
	When User navigate to user Profile page
	