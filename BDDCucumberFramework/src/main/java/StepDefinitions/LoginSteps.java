package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	
	WebDriver driver;
	
	@Given("^User is on Application Home Page$")
	public void user_is_on_Application_Home_Page() {

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\main\\java\\resources\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.freecrm.com/index.html");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	    
	}

	@When("^Application Page Tittle is FREE CRM$")
	public void application_Page_Tittle_is_FREE_CRM() {
	    String actualTitle = driver.getTitle();
	    String expectedTitle = "Free CRM in the cloud software boosts sales";
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String uname, String password) {
	  driver.findElement(By.name("username")).sendKeys(uname);
	  driver.findElement(By.name("password")).sendKeys(password);
	   
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
	
	@Then("^user enters Contacts \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_Contacts_and_and_and(String firstName, String lastName, String mobile, String position){
	    driver.findElement(By.id("first_name")).sendKeys(firstName);
	    driver.findElement(By.id("surname")).sendKeys(lastName);
	    driver.findElement(By.id("mobile")).sendKeys(mobile);
	    driver.findElement(By.id("company_position")).sendKeys(position);
	    try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Then("^Go to Contacts$")
	public void go_to_Contacts() {
		driver.switchTo().frame("mainpanel");
		Actions builder = new Actions(driver);
		builder.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Contacts')]"))).build().perform();
	    //builder.moveToElement(driver.findElement(By.linkText("Contacts")));
	}

	@Then("^Open Contact Form$")
	public void open_Contact_Form(){
		driver.findElement(By.xpath("//a[contains(text(), 'New Contact')]")).click();
	    
	}

	@Then("^Save the Contact$")
	public void save_the_Contact(){
	    driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}

	@Then("^Close the Browser$")
	public void close_the_Browser(){
	    driver.close();
	}
}
