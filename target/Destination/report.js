$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8474467800,
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
  "duration": 112021500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userEntersUsername()"
});
formatter.result({
  "duration": 169941500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userEntersPassword()"
});
formatter.result({
  "duration": 181459300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_LOGIN_button()"
});
formatter.result({
  "duration": 1209710700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 323706200,
  "status": "passed"
});
formatter.after({
  "duration": 117254600,
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
  "duration": 7241444900,
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
  "duration": 5090600,
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
formatter.result({
  "duration": 130323300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidPassword(String)"
});
formatter.result({
  "duration": 106253000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_LOGIN_button()"
});
formatter.result({
  "duration": 38863000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.userShouldNotBeAbleToLoginSuccessfullyAnd(String)"
});
formatter.result({
  "duration": 30894900,
  "status": "passed"
});
formatter.after({
  "duration": 71666600,
  "status": "passed"
});
formatter.before({
  "duration": 7311675800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not be able to login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;;3",
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
  "name": "User enters invalid Username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters invalid Password \"admin123\"",
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
  "name": "User should not be able to login successfully and \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 5561400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidUsername(String)"
});
formatter.result({
  "duration": 135936800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidPassword(String)"
});
formatter.result({
  "duration": 141725100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_LOGIN_button()"
});
formatter.result({
  "duration": 44389100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.userShouldNotBeAbleToLoginSuccessfullyAnd(String)"
});
formatter.result({
  "duration": 35822600,
  "status": "passed"
});
formatter.after({
  "duration": 56905100,
  "status": "passed"
});
formatter.before({
  "duration": 7236120000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should not be able to login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-login-successfully-with-invalid-credentials;;4",
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
  "name": "User enters invalid Username \"ADMIN\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters invalid Password \"Admin123\"",
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
  "name": "User should not be able to login successfully and \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 4294400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidUsername(String)"
});
formatter.result({
  "duration": 127581900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin123",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidPassword(String)"
});
formatter.result({
  "duration": 208578700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_LOGIN_button()"
});
formatter.result({
  "duration": 524210200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.userShouldNotBeAbleToLoginSuccessfullyAnd(String)"
});
formatter.result({
  "duration": 32656300,
  "status": "passed"
});
formatter.after({
  "duration": 89279800,
  "status": "passed"
});
});