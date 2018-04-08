Feature: Add New Deal

Scenario: Add New Deal Scenario
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM
	Then user enters username and password
	| anshulc55 | Anshul@123 |
	
	And user clicks on Login Butoon
	When User navigate to user Profile page
	Then Go to Deals
	Then Open New Deal Form
	Then user enters deal data
	| New Deal | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
	
	#Then Save the Deal
	Then Close the Browser