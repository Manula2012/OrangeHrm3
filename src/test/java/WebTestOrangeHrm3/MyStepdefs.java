package WebTestOrangeHrm3;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepdefs {

    LogInPage logInPage = new LogInPage();
    @Given("user is in the login page")
    public void userIsInTheLoginPage() {
    }

    @When("user enters invalid {string} and {string}")
    public void userEntersInvalidAnd(String username, String password)
    {
        logInPage.userEntersDetails(username,password);

    }

    @Then("user should not be able to log in and able to see {string}")
    public void userShouldNotBeAbleToLogInAndAbleToSee(String expected_error_message)
    {
        logInPage.verifyErrorMessage(expected_error_message);

    }
}
