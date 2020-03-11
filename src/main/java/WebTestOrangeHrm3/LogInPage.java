package WebTestOrangeHrm3;

import org.openqa.selenium.By;

public class LogInPage extends Utils {
    private By _userName = By.id("txtUsername");
    private By _passWord = By.id("txtPassword");
    private By _login = By.cssSelector("input#btnLogin");
    private By _errorMessage = By.cssSelector("span#spanMessage");


    public void userEntersDetails(String username, String password) {
        enterText(_userName, username);
        enterText(_passWord, password);
        clickOnElement(_login);

    }

    public void verifyErrorMessage(String expected_error_message) {
        assertTextMessage(expected_error_message, _errorMessage);
    }
}


