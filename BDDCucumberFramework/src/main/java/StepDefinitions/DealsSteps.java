/*package StepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsSteps {
	
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
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		List<List<String>> testData =  credentials.raw();
		
	  driver.findElement(By.name("username")).sendKeys(testData.get(0).get(0));
	  driver.findElement(By.name("password")).sendKeys(testData.get(0).get(1));
	   
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
	    //builder.moveToElement(driver.findElement(By.linkText("Contacts")));
	}
	
	@Then("^Open New Deal Form$")
	public void open_New_Deal_Form(){
		driver.findElement(By.xpath("//a[contains(text(), 'New Deal')]")).click();
	    
	}
	
	@Then("^user enters deal data$")
	public void user_enters_deal_data(DataTable data){
	   List<List<String>>  formData = data.raw();
	   driver.findElement(By.id("title")).sendKeys(formData.get(0).get(0));
	   driver.findElement(By.id("amount")).sendKeys(formData.get(0).get(1));
	   driver.findElement(By.id("probability")).sendKeys(formData.get(0).get(2));
	   driver.findElement(By.id("commission")).sendKeys(formData.get(0).get(3));
	   driver.findElement(By.id("description")).sendKeys(formData.get(0).get(4));
	   driver.findElement(By.id("next_step")).sendKeys(formData.get(0).get(5));
	   try {
		Thread.sleep(5000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	}
	
	@Then("^Save the Deal$")
	public void save_the_Deal(){
	    driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}
	
	@Then("^Close the Browser$")
	public void close_the_Browser(){
	    driver.close();
	}

}
*/