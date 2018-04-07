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
  "name": "user enters \"anshulc55\" and \"Anshul@123\"",
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
  "duration": 7617777333,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 12248444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anshulc55",
      "offset": 13
    },
    {
      "val": "Anshul@123",
      "offset": 29
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 201114667,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 7344114223,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 80928000,
  "status": "passed"
});
});