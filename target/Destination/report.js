$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6621168400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-be-able-to-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 686895800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userEntersUsername()"
});
formatter.result({
  "duration": 1504347100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userEntersPassword()"
});
formatter.result({
  "duration": 2278981300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_LOGIN_button()"
});
formatter.result({
  "duration": 4632468600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1218104500,
  "status": "passed"
});
formatter.after({
  "duration": 427593600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "User should not be able to login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nagative"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters invalid Username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters invalid Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should not be able to login successfully and \"\u003creceive message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "receive message"
      ],
      "line": 20,
      "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 21,
      "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 22,
      "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "ADMIN",
        "Admin123",
        "Invalid credentials"
      ],
      "line": 23,
      "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10470663300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not be able to login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@nagative"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters invalid Username \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters invalid Password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should not be able to login successfully and \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 2196045400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidUsername(String)"
});
