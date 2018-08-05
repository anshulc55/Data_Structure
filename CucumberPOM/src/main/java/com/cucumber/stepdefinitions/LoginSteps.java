package com.cucumber.stepdefinitions;

import com.cucumberpom.base.BaseTest;
import com.cucumberpom.pages.HomePage;
import com.cucumberpom.pages.LoginPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class LoginSteps extends BaseTest {
	
	@Before
	public void openBrowser(){
		BaseTest.initBrowser();
	}
	
	@After 
	public void tearDown(){
		driver.close();
	}
	
	LoginPage loginPage;
	HomePage homePage;
	
	@Given("^User is on Application Landing Page$")
	public void user_is_on_Application_Landing_Page(){
		
		String URL = prop.getProperty("ApplicationURL");
		driver.get(URL);  
		loginPage =  new LoginPage();
	}
	
	@Then("^verify user is on Application Landing Page$")
	public void verify_user_is_on_Application_Landing_Page() {
	    String expectedTitle = "Free CRM software in the cloud powers sales and customer service";
	    Assert.assertEquals(expectedTitle, loginPage.getTitle());
	}
	
	@Then("^Login FreeCRM Application$")
	public void login_FreeCRM_Application() {
	    homePage = loginPage.doLogin();
	}

}
