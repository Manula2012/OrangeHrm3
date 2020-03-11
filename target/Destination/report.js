$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "User should not be able to log in with invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should not be able to log in and able to see \"\u003cexpected error message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected error message"
      ]
    },
    {
      "cells": [
        "Admin",
        "abc123",
        "Invalid credentials present"
      ]
    },
    {
      "cells": [
        "Masw",
        "admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Masw",
        "abc123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Masw",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "abc123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Admin\" and \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Invalid credentials present\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Invalid credentials] but found [Invalid credentials present]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat WebTestOrangeHrm3.Utils.assertTextMessage(Utils.java:24)\r\n\tat WebTestOrangeHrm3.LogInPage.verifyErrorMessage(LogInPage.java:20)\r\n\tat WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(MyStepdefs.java:24)\r\n\tat ✽.user should not be able to log in and able to see \"Invalid credentials present\"(file:///C:/Users/Admin/IdeaProjects/OrangeHrm3/src/test/resources/features/login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Masw\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Masw\" and \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Admin\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"Masw\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\" and \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userIsInTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userEntersInvalidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in and able to see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTestOrangeHrm3.MyStepdefs.userShouldNotBeAbleToLogInAndAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});