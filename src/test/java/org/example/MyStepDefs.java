package org.example;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs {
    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();
    @Given("^User is on login page$")
    public void user_is_on_login_page() {loginPage.verifyLoginPage();}

    @When("^User enters Username$")
    public void userEntersUsername() {loginPage.userName();}

    @And("^User enters Password$")
    public void userEntersPassword() {loginPage.password();}

    @And("^User click on LOGIN button$")
    public void user_click_on_LOGIN_button() {loginPage.clickOnLoginButton();}

    @Then("^User should be able to login successfully$")
    public void user_should_be_able_to_login_successfully() {homePage.verifyWelcomeMessage();}

    @When("^User enters invalid Username \"([^\"]*)\"$")
    public void userEntersInvalidUsername(String UserName) {loginPage.invalidUserName(UserName);}

    @And("^User enters invalid Password \"([^\"]*)\"$")
    public void userEntersInvalidPassword(String Password){loginPage.invalidPassword(Password);}

    @Then("^User should not be able to login successfully and \"([^\"]*)\"$")
    public void userShouldNotBeAbleToLoginSuccessfullyAnd(String message){loginPage.verifyErrorMessage(message);}
}

