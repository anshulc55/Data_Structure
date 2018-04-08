Feature: Add New Deal 

Scenario: Add New Multi Deal 
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM 
	Then user enters username and password 
		| username | password |
		| anshulc55 | Anshul@123 |
		
	And user clicks on Login Butoon 
	When User navigate to user Profile page 
	Then Go to Deals 
	Then Open New Deal Form 
	Then user enters deal data 
		| Title | Amount | Probability | Commission | Description | Next Step |
		| New Deal | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
		| CX Deal | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
		| Shoes Top | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
		| Header Poster | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
		| Amazon Bottom | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
		| Flipkart | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
		| ebayl | 1000 | 20 | 3 | This is new Deal | To Be Discussed |
		
		#Then Save the Deal
	Then Close the Browser