Feature: Login Application feature

# Scenario without Example Annotation
#Scenario: User Login Scenario
#	Given User is on Application Home Page 
#	When Application Page Tittle is FREE CRM
#	#Then user enters username and password
#	Then user enters "anshulc55" and "Anshul@123"
#	And user clicks on Login Butoon
#	When User navigate to user Profile page
	

# Scenario with Example Annotation	
Scenario Outline: User Login Scenario
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM
	#Then user enters username and password
	Then user enters "<username>" and "<password>"
	And user clicks on Login Butoon
	When User navigate to user Profile page
	Then Close the Browser
	
Examples:
	| username | password |
	| anshulc55 | Anshul@123 |
	| tomhank	| tomhank123 |
	| Terri 	| Terri@123	|
	| ABC		| ABC@123 |	
