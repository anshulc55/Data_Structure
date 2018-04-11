package com.cucumber.stepdefinitions;

import com.cucumberpom.base.BaseTest;
import com.cucumberpom.pages.ContactsPage;
import com.cucumberpom.pages.HomePage;

import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageSteps extends BaseTest {
	
	HomePage homePage = new HomePage();
	ContactsPage contactPage;
	
	@Then("^Verify User is on Application Home$")
	public void verify_User_is_on_Application_Home() {
	    String expectedTitle = "CRMPRO";
	    Assert.assertEquals(expectedTitle, homePage.getTitle());
	}
	
	@Then("^Open Contact Page$")
	public void Open_Contact_Page() {
	   contactPage = homePage.gotoContacts();
	}
	
	@Then("^Create new Contact$")
	public void create_New_Contact() {
	   contactPage.saveContact();
	}

}
