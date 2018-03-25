$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Application feature",
  "description": "",
  "id": "login-application-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 7239523768,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 8581786,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 201290401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 10347693643,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});