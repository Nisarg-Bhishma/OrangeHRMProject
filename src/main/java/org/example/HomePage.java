package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Util{
    //private By ActualMessage=By.linkText("Welcome Admin");
    private By ActualMessage=By.xpath("//a[@id='welcome']");
    String _ExpectedMessage="Welcome Admin";
    public void verifyWelcomeMessage(){ Assert.assertEquals(getTextFromElement(ActualMessage),_ExpectedMessage);}
}