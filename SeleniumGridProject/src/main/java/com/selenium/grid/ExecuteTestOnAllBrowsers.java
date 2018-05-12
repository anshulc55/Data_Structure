package com.selenium.grid;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class ExecuteTestOnAllBrowsers {

	public RemoteWebDriver driver;
	public static String appURL = "http://www.google.com";

	@BeforeTest
	@Parameters({ "browser" })
	public void setUp(String browser) throws MalformedURLException {
		
		System.out.println("*******Invoking "+browser+ "************");
		DesiredCapabilities capabilities = null;

		// Decide which browser need to invoke
		if (browser.equalsIgnoreCase("firefox")) {
			capabilities = DesiredCapabilities.firefox();
		} else if (browser.equalsIgnoreCase("chrome")) {
			capabilities = DesiredCapabilities.chrome();
		} else if (browser.equalsIgnoreCase("IE")) {
			capabilities = DesiredCapabilities.internetExplorer();
		}

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
	
	@Test
	public void testSearchGoogle() {
		System.out.println("Opening Google..");
		driver.navigate().to(appURL);
		driver.findElement(By.name("q")).sendKeys("Selenium Tutorial Anshul + Udemy");
		driver.findElement(By.name("btnK")).click();
	}

	
	@AfterTest
	public void closeBrowser() {
		if (driver != null) {
			driver.quit();
		}
	}

}
