Feature: Add New Contact

Scenario Outline: Add New Contact Scenario
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM
	Then user enters "<username>" and "<password>"
	And user clicks on Login Butoon
	When User navigate to user Profile page
	Then Go to Contacts
	Then Open Contact Form
	Then user enters Contacts "<firstname>" and "<lastname>" and "<mobile>" and "<position>"
	Then Save the Contact
	Then Close the Browser
	
Examples:
	| username | password | firstname | lastname | mobile | position |
	| anshulc55 | Anshul@123 | Anshul | Thakur | 9876543219 | SDET III |
	| anshulc55 | Anshul@123 | Desi | Solava | 459846839 | QA Tester |
	| anshulc55 | Anshul@123 | Amit | Bansal | 9999887766 | Principal Engineer |
	