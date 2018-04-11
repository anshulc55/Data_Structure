$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/cucumber/features/Application.feature");
formatter.feature({
  "line": 1,
  "name": "Test Free CRM Web Application",
  "description": "",
  "id": "test-free-crm-web-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4702767507,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Application Landing Page",
  "description": "",
  "id": "test-free-crm-web-application;verify-application-landing-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify user is on Application Landing Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 4122326948,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verify_user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 33648400,
  "status": "passed"
});
formatter.after({
  "duration": 127941608,
  "status": "passed"
});
formatter.before({
  "duration": 3933705422,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Application Login",
  "description": "",
  "id": "test-free-crm-web-application;application-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Login FreeCRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify User is on Application Home",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 4352382197,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_FreeCRM_Application()"
});
formatter.result({
  "duration": 7042585277,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verify_User_is_on_Application_Home()"
});
formatter.result({
  "duration": 31441736,
  "status": "passed"
});
formatter.after({
  "duration": 80845670,
  "status": "passed"
});
formatter.before({
  "duration": 3921919215,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create New Contact in Application",
  "description": "",
  "id": "test-free-crm-web-application;create-new-contact-in-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Login FreeCRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Open Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Create new Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 4166466889,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_FreeCRM_Application()"
});
formatter.result({
  "duration": 4094874095,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.Open_Contact_Page()"
});
formatter.result({
  "duration": 413633671,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.create_New_Contact()"
});
formatter.result({
  "duration": 7210746830,
  "status": "passed"
});
formatter.after({
  "duration": 73089680,
  "status": "passed"
});
});