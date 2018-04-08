$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/MultiDeals.feature");
formatter.feature({
  "line": 1,
  "name": "Add New Deal",
  "description": "",
  "id": "add-new-deal",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add New Multi Deal",
  "description": "",
  "id": "add-new-deal;add-new-multi-deal",
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
formatter.step({
  "line": 12,
  "name": "Go to Deals",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Open New Deal Form",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
      "line": 15
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
      "line": 16
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
      "line": 17
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
      "line": 18
    },
    {
      "cells": [
        "Header Poster",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed"
      ],
      "line": 19
    },
    {
      "cells": [
        "Amazon Bottom",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed"
      ],
      "line": 20
    },
    {
      "cells": [
        "Flipkart",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed"
      ],
      "line": 21
    },
    {
      "cells": [
        "ebayl",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#Then Save the Deal"
    }
  ],
  "line": 25,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 8018924897,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "duration": 11672449,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 211997872,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_clicks_on_Login_Butoon()"
});
formatter.result({
  "duration": 8350193489,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_navigate_to_user_Profile_page()"
});
formatter.result({
  "duration": 12221339,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.go_to_Deals()"
});
formatter.result({
  "duration": 131535169,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.open_New_Deal_Form()"
});
formatter.result({
  "duration": 100321378,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.user_enters_deal_data(DataTable)"
});
formatter.result({
  "duration": 31604148268,
  "status": "passed"
});
formatter.match({
  "location": "MultiDealsSteps.close_the_Browser()"
});
formatter.result({
  "duration": 64716918,
  "status": "passed"
});
});