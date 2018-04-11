package com.cucumberpom.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumberpom.base.BaseTest;

public class HomePage extends BaseTest{
	
	@FindBy(xpath="//a[contains(text(), 'Contacts')]")
	WebElement contacts;
	
	@FindBy(xpath="//a[contains(text(), 'New Contact')]")
	WebElement newContacts;
	
	public HomePage(){
		PageFactory.initElements(driver, this);
	}
	
	public String getTitle(){
		return driver.getTitle();
	}
	
	public ContactsPage gotoContacts(){
		driver.switchTo().frame("mainpanel");
		Actions builder = new Actions(driver);
		builder.moveToElement(contacts).build().perform();
		newContacts.click();
		
		return new ContactsPage();
	}

}
