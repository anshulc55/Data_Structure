package com.cucumberpom.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumberpom.base.BaseTest;

public class ContactsPage extends BaseTest{
	
	@FindBy(id="first_name")
	WebElement firstName;
	

	@FindBy(id="surname")
	WebElement lastName;
	
	@FindBy(id="mobile")
	WebElement mobileNumber;
	
	@FindBy(id="company_position")
	WebElement position;
	
	@FindBy(xpath="//input[@type='submit' and @value='Save']")
	WebElement saveContact;
	
	public ContactsPage(){
		PageFactory.initElements(driver, this);
	}
	
	public void saveContact(){
		firstName.sendKeys("John");
		lastName.sendKeys("Hawkins");
		mobileNumber.sendKeys("9876536739");
		position.sendKeys("Chief Product Engineer");
		
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
		
		saveContact.click();
	}
}
