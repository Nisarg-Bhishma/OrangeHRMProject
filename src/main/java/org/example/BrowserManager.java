package org.example;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserManager extends Util {
    public static final boolean SAUCE_LAB = true;
    public static LoadProperty loadProperty = new LoadProperty();
    public static String browser = loadProperty.getProperty("browser");
//    public static final String USERNAME = loadProperty.getProperty("SAUCE_USERNAME");
//    public static final String ACCESS_KEY = loadProperty.getProperty("SAUCE_ACCESS_KEY ");
//    public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
    public String URL = "https://Bhisma_Nisarg:e1aabcb0-aa8d-4f5a-b2e0-3ecef762a7fe@ondemand.us-west-1.saucelabs.com:443/wd/hub";

    public void setUpWebBrowser() {// re-usable method to setup web browser for gui
        System.out.println(browser);
        if (SAUCE_LAB) {
            System.out.println("running with SauceLabs" + browser);
            if (browser.equalsIgnoreCase("chrome")) {

                DesiredCapabilities capabilities = DesiredCapabilities.chrome();
                capabilities.setCapability("platformName", "Windows 10");
                capabilities.setCapability("browserVersion", "83.0");
                try {
                    driver = new RemoteWebDriver(new URL(URL), capabilities);

                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("firefox")) {
                DesiredCapabilities capabilities = DesiredCapabilities.firefox();
                capabilities.setCapability("platformName", "Windows 10");
                capabilities.setCapability("browserVersion", "79.0");

                try {
                    driver = new RemoteWebDriver(new URL(URL), capabilities);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("safari")) {
                DesiredCapabilities capabilities = DesiredCapabilities.safari();
                capabilities.setCapability("platformName", "Windows 10");
                capabilities.setCapability("browserVersion", "latest");
                try {
                    driver = new RemoteWebDriver(new URL(URL), capabilities);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else {
                System.out.println("browser name is empty" + browser);
            }

            //applying implicitly wait of 30 sec to the driver instance
            driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
            //open the URL
            driver.get(loadProperty.getProperty("url"));
        } else {
            if (browser.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDriver\\chromedriver.exe");
                driver = new ChromeDriver();
                System.out.println(loadProperty.getProperty("url"));
                driver.get(loadProperty.getProperty("url"));
            } else if (browser.equalsIgnoreCase("firefox")) {

                System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDriver\\geckodriver.exe");
//            File pathToBinary = new File("C:\\Users\\patel\\AppData\\Local\\Mozilla Firefox\\firefox.exe");
//            FirefoxBinary ffBinary = new FirefoxBinary(pathToBinary);

                //Now you can Initialize marionette driver to launch firefox
                DesiredCapabilities capabilities = DesiredCapabilities.firefox();
//            FirefoxOptions options = new FirefoxOptions();
//            capabilities.setCapability(FirefoxOptions.FIREFOX_OPTIONS, options.setBinary(ffBinary));
                capabilities.setCapability("marionette", true);

                driver = new FirefoxDriver();
                System.out.println(loadProperty.getProperty("url"));
                driver.get(loadProperty.getProperty("url"));
            } else if (browser.equalsIgnoreCase("ie")) {
                System.setProperty("webdriver.ie.driver", "src\\test\\resources\\BrowserDriver\\IEDriverServer.exe");
                driver = new InternetExplorerDriver();
                System.out.println(loadProperty.getProperty("url"));
                driver.get(loadProperty.getProperty("url"));
            } else {
                System.out.println("Please choose a valid web-browser");
            }
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
            driver.get(loadProperty.getProperty("url"));
        }
    }
    public void closeBrowser() {//re-usable method to close web-browser
        driver.close();
    }
}