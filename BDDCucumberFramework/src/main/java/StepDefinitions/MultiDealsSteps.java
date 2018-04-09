package StepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class MultiDealsSteps {

	WebDriver driver;
	
	
	//Global Hooks
	@Before
	public void InitializeBrowser(){
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "\\src\\main\\java\\resources\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@After
	public void closeBrowser(){
		driver.quit();
	}
	
	@Given("^User is on Application Home Page$")
	public void user_is_on_Application_Home_Page() {
		driver.get("https://www.freecrm.com/index.html");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}
	
	@Before("@Smoke")
	public void beforeSmoke(){
		// Doing Some SetUp
		System.out.println("Hi I am Pre-Req of Smoke Test");
	}
	
	@After("@Smoke")
	public void afterSmoke(){
		//Do Some Code
		System.out.println("After Smoke Test");
	}

	@When("^Application Page Tittle is FREE CRM$")
	public void application_Page_Tittle_is_FREE_CRM() {
		String actualTitle = driver.getTitle();
		String expectedTitle = "Free CRM in the cloud software boosts sales";
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		for (Map<String, String> dataMap : credentials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(dataMap.get("username"));
			driver.findElement(By.name("password")).sendKeys(dataMap.get("password"));
		}
	}

	@Then("^user clicks on Login Butoon$")
	public void user_clicks_on_Login_Butoon() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);

	}

	@When("^User navigate to user Profile page$")
	public void user_navigate_to_user_Profile_page() {
		String actualTitle = driver.getTitle();
		String expectedTitle = "CRMPRO";
		Assert.assertEquals(expectedTitle, actualTitle);

	}

	@Then("^Go to Deals$")
	public void go_to_Deals() {
		driver.switchTo().frame("mainpanel");
		Actions builder = new Actions(driver);
		builder.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Deals')]"))).build().perform();
		// builder.moveToElement(driver.findElement(By.linkText("Contacts")));
	}

	@Then("^Open New Deal Form$")
	public void open_New_Deal_Form() {
		driver.findElement(By.xpath("//a[contains(text(), 'New Deal')]")).click();

	}

	@Then("^user enters deal data$")
	public void user_enters_deal_data(DataTable data) {
		for (Map<String, String> dataMap : data.asMaps(String.class, String.class)) {
			driver.findElement(By.id("title")).sendKeys(dataMap.get("Title"));
			driver.findElement(By.id("amount")).sendKeys(dataMap.get("Amount"));
			driver.findElement(By.id("probability")).sendKeys(dataMap.get("Probability"));
			driver.findElement(By.id("commission")).sendKeys(dataMap.get("Commission"));
			driver.findElement(By.id("description")).sendKeys(dataMap.get("Description"));
			driver.findElement(By.id("next_step")).sendKeys(dataMap.get("Next Step"));
			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
			
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			Actions builder = new Actions(driver);
			builder.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(), 'New Deal')]")).click();
		}
	}

	@Then("^Save the Deal$")
	public void save_the_Deal(){
	    driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}

	@Then("^Close the Browser$")
	public void close_the_Browser() {
		driver.close();
	}

}
