$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Add New Contact",
  "description": "",
  "id": "add-new-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Login Scenario",
  "description": "",
  "id": "add-new-contact;user-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
formatter.step({
  "line": 9,
  "name": "Go to Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Open Contact Form",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters Contacts \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cmobile\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Save the Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "add-new-contact;user-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "mobile",
        "position"
      ],
      "line": 16,
      "id": "add-new-contact;user-login-scenario;;1"
    },
    {
      "cells": [
        "anshulc55",
        "Anshul@123",
        "Anshul",
        "Thakur",
        "9876543219",
        "SDET III"
      ],
      "line": 17,
      "id": "add-new-contact;user-login-scenario;;2"
    },
    {
      "cells": [
        "anshulc55",
        "Anshul@123",
        "Desi",
        "Solava",
        "459846839",
        "QA Tester"
      ],
      "line": 18,
      "id": "add-new-contact;user-login-scenario;;3"
    },
    {
      "cells": [
        "anshulc55",
        "Anshul@123",
        "Amit",
        "Bansal",
        "9999887766",
        "Principal Engineer"
      ],
      "line": 19,
      "id": "add-new-contact;user-login-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User Login Scenario",
  "description": "",
  "id": "add-new-contact;user-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "matchedColumns": [
    0,
    1
  ],
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
formatter.step({
  "line": 9,
  "name": "Go to Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Open Contact Form",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters Contacts \"Anshul\" and \"Thakur\" and \"9876543219\" and \"SDET III\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Save the Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 8336548000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 11725778,
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
  "duration": 222277333,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 7751299112,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 9908889,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.go_to_Contacts()"
});
formatter.result({
  "duration": 134297778,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.open_Contact_Form()"
});
formatter.result({
  "duration": 112250222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anshul",
      "offset": 22
    },
    {
      "val": "Thakur",
      "offset": 35
    },
    {
      "val": "9876543219",
      "offset": 48
    },
    {
      "val": "SDET III",
      "offset": 65
    }
  ],
  "location": "LoginSteps.user_enters_Contacts_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 5628400000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.save_the_Contact()"
});
formatter.result({
  "duration": 103965333,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_Browser()"
});
formatter.result({
  "duration": 57536889,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Login Scenario",
  "description": "",
  "id": "add-new-contact;user-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "matchedColumns": [
    0,
    1
  ],
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
formatter.step({
  "line": 9,
  "name": "Go to Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Open Contact Form",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters Contacts \"Desi\" and \"Solava\" and \"459846839\" and \"QA Tester\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Save the Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 7085627111,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 9878222,
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
  "duration": 197112000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 8473928445,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 9155556,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.go_to_Contacts()"
});
formatter.result({
  "duration": 119784889,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.open_Contact_Form()"
});
formatter.result({
  "duration": 99289333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desi",
      "offset": 22
    },
    {
      "val": "Solava",
      "offset": 33
    },
    {
      "val": "459846839",
      "offset": 46
    },
    {
      "val": "QA Tester",
      "offset": 62
    }
  ],
  "location": "LoginSteps.user_enters_Contacts_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 5648267112,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.save_the_Contact()"
});
formatter.result({
  "duration": 103268000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_Browser()"
});
formatter.result({
  "duration": 59296889,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Login Scenario",
  "description": "",
  "id": "add-new-contact;user-login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "matchedColumns": [
    0,
    1
  ],
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
formatter.step({
  "line": 9,
  "name": "Go to Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Open Contact Form",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters Contacts \"Amit\" and \"Bansal\" and \"9999887766\" and \"Principal Engineer\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Save the Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 8596236000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 7707556,
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
  "duration": 196140444,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 5282200444,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 10319111,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.go_to_Contacts()"
});
formatter.result({
  "duration": 120233777,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.open_Contact_Form()"
});
formatter.result({
  "duration": 123661778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amit",
      "offset": 22
    },
    {
      "val": "Bansal",
      "offset": 33
    },
    {
      "val": "9999887766",
      "offset": 46
    },
    {
      "val": "Principal Engineer",
      "offset": 63
    }
  ],
  "location": "LoginSteps.user_enters_Contacts_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 6057977777,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.save_the_Contact()"
});
formatter.result({
  "duration": 105784000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_Browser()"
});
formatter.result({
  "duration": 60905778,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Application feature",
  "description": "",
  "id": "login-application-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# Scenario without Example Annotation"
    },
    {
      "line": 4,
      "value": "#Scenario: User Login Scenario"
    },
    {
      "line": 5,
      "value": "#\tGiven User is on Application Home Page"
    },
    {
      "line": 6,
      "value": "#\tWhen Application Page Tittle is FREE CRM"
    },
    {
      "line": 7,
      "value": "#\t#Then user enters username and password"
    },
    {
      "line": 8,
      "value": "#\tThen user enters \"anshulc55\" and \"Anshul@123\""
    },
    {
      "line": 9,
      "value": "#\tAnd user clicks on Login Butoon"
    },
    {
      "line": 10,
      "value": "#\tWhen User navigate to user Profile page"
    },
    {
      "line": 13,
      "value": "# Scenario with Example Annotation"
    }
  ],
  "line": 14,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-application-feature;user-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login-application-feature;user-login-scenario;;1"
    },
    {
      "cells": [
        "anshulc55",
        "Anshul@123"
      ],
      "line": 25,
      "id": "login-application-feature;user-login-scenario;;2"
    },
    {
      "cells": [
        "tomhank",
        "tomhank123"
      ],
      "line": 26,
      "id": "login-application-feature;user-login-scenario;;3"
    },
    {
      "cells": [
        "Terri",
        "Terri@123"
      ],
      "line": 27,
      "id": "login-application-feature;user-login-scenario;;4"
    },
    {
      "cells": [
        "ABC",
        "ABC@123"
      ],
      "line": 28,
      "id": "login-application-feature;user-login-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 18,
  "name": "user enters \"anshulc55\" and \"Anshul@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 7884404444,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 7044889,
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
  "duration": 207474666,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 5510682667,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 7068888,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_Browser()"
});
formatter.result({
  "duration": 85610666,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 18,
  "name": "user enters \"tomhank\" and \"tomhank123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 9018818223,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 8965778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomhank",
      "offset": 13
    },
    {
      "val": "tomhank123",
      "offset": 27
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 197580000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 986004445,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 13928000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[Free CRM in the cloud software boosts sales]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginSteps.user_navigate_to_user_Profile_page(LoginSteps.java:58)\r\n\tat ✽.When User navigate to user Profile page(Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 18,
  "name": "user enters \"Terri\" and \"Terri@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 8582496000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 9408445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terri",
      "offset": 13
    },
    {
      "val": "Terri@123",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 194054222,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 985855556,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 7236000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[Free CRM in the cloud software boosts sales]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginSteps.user_navigate_to_user_Profile_page(LoginSteps.java:58)\r\n\tat ✽.When User navigate to user Profile page(Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Then user enters username and password"
    }
  ],
  "line": 18,
  "name": "user enters \"ABC\" and \"ABC@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 8143232000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 9247111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 13
    },
    {
      "val": "ABC@123",
      "offset": 23
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 161892889,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 1051989334,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 5973778,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[Free CRM in the cloud software boosts sales]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginSteps.user_navigate_to_user_Profile_page(LoginSteps.java:58)\r\n\tat ✽.When User navigate to user Profile page(Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});