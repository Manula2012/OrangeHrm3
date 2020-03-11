package WebTestOrangeHrm3;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,features ="src/test/resources/features/login.feature", tags = "@login",plugin = {"pretty","html:target/Destination"})




public class RunTest {
}
