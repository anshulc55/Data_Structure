$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Add New Deal",
  "description": "",
  "id": "add-new-deal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4002293776,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login Free CRM with Valid Creadentials",
  "description": "",
  "id": "add-new-deal;login-free-crm-with-valid-creadentials",
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
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "anshulc55",
        "Anshul@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MultiDealsSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 3469859582,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 13273321,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 215601586,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 5910310302,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 11123546,
  "status": "passed"
});
formatter.after({
  "duration": 620260782,
  "status": "passed"
});
formatter.before({
  "duration": 219555,
  "status": "passed"
});
formatter.before({
  "duration": 3095195471,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Free CRM with InValid Creadentials",
  "description": "",
  "id": "add-new-deal;login-free-crm-with-invalid-creadentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    }
  ]
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
  "line": 17,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18
    },
    {
      "cells": [
        "anshulc55",
        "nshul@123"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "MultiDealsSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 3655411862,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 10655101,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 204170485,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 1031653750,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 9392436,
  "status": "passed"
});
formatter.after({
  "duration": 632958993,
  "status": "passed"
});
formatter.after({
  "duration": 120445,
  "status": "passed"
});
formatter.before({
  "duration": 3116423008,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add New Multi Deal",
  "description": "",
  "id": "add-new-deal;add-new-multi-deal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29
    },
    {
      "cells": [
        "anshulc55",
        "Anshul@123"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user clicks on Login Butoon",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User navigate to user Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Go to Deals",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Open New Deal Form",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user enters deal data",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Probability",
        "Commission",
        "Description",
        "Next Step"
      ],
      "line": 37
    },
    {
      "cells": [
        "New Deal",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed"
      ],
      "line": 38
    },
    {
      "cells": [
        "CX Deal",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed"
      ],
      "line": 39
    },
    {
      "cells": [
        "Shoes Top",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed"
      ],
      "line": 40
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Save the Deal",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 3272630868,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 8263549,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 192337162,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 3837463255,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 7455104,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.go_to_Deals()"
});
formatter.result({
  "duration": 140301653,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.open_New_Deal_Form()"
});
formatter.result({
  "duration": 154798529,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_enters_deal_data(DataTable)"
});
formatter.result({
  "duration": 13821023270,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.save_the_Deal()"
});
formatter.result({
  "duration": 1032967082,
  "status": "passed"
});
formatter.after({
  "duration": 610761234,
  "status": "passed"
});
});