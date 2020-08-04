package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;
import sun.security.util.Password;

public class LoginPage extends Util{
    private String _ExpectedURL="https://opensource-demo.orangehrmlive.com/";
    String message="";
    String ActualURL=driver.getCurrentUrl();
    LoadProperty loadProperty=new LoadProperty();


    private By _UsernameText=By.xpath("//input[@id='txtUsername']");
    private By _PasswordText=By.xpath("//input[@id='txtPassword']");
    private By _LoginButton=By.xpath("//input[@id='btnLogin']");
    private By _ExpectedErrorMessage=By.id("spanMessage");

    public void verifyLoginPage(){
        Assert.assertEquals(ActualURL,_ExpectedURL);
    }

    public void userName(){
    typeText(_UsernameText,loadProperty.getProperty("Username"));}
    public void password(){//;
    typeText(_PasswordText,loadProperty.getProperty("Password"));}


    public void clickOnLoginButton(){javaScriptClick(_LoginButton);}

    public void verifyErrorMessage(String message){
        Assert.assertEquals(getTextFromElement(_ExpectedErrorMessage),message);
    }

    public void invalidUserName(String userName) {typeText(_UsernameText,(userName));
    }

    public void invalidPassword(String password) {typeText(_PasswordText, (password));
    }
}