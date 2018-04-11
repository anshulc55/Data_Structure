package com.cucumberpom.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\com\\cucumber\\features\\Application.feature", //the path of the feature files
		glue={"com\\cucumber\\stepdefinitions"}, //the path of the step definition files
		format= {"pretty","html:test-outout", "json:report_json/cucumber.json", "junit:report_xml/cucumber.xml"},
		dryRun = false,
		monochrome = true,
		strict = true
		//tags = {"@Smoke"}
		)

public class TestRunner {

}
