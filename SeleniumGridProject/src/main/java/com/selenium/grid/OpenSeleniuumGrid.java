package com.selenium.grid;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class OpenSeleniuumGrid {
	
	public RemoteWebDriver driver;
	public static String appURL = "http://www.google.com";
	
	@BeforeTest
	public void setUp() throws MalformedURLException {
		DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
		driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
		driver.manage().window().maximize();
	}
	
	@Test
	public void testGooglePageTitleInIEBrowser() {
		System.out.println("*** Navigation to Application ***");
		driver.navigate().to(appURL);
		String strPageTitle = driver.getTitle();
		System.out.println("*** Verifying page title ***");
		Assert.assertTrue(strPageTitle.equalsIgnoreCase("Google"), "Page title doesn't match");
	}
	
	@AfterClass
	public void closeBrowser() {
		if (driver != null) {
			driver.quit();
		}
	}
}
