const { Builder, By, Key, until } = require("selenium-webdriver");

// Set up the Selenium WebDriver for Chrome
const driver = new Builder().forBrowser("chrome").build();

// Base URL for the local development environment
const baseUrl = "http://localhost:3000";

// Function to simulate the lawyer registration flow
async function registerAsLawyer() {
  try {
    // Navigate to the registration page
    await driver.get(`${baseUrl}/register`);

    // Click on the Google authentication button
    const googleAuthButton = await driver.findElement(
      By.id("google-auth-button")
    );
    await googleAuthButton.click();

    // Wait for the redirect to the Google authentication page
    await driver.wait(until.urlContains("accounts.google.com"));

    // Simulate signing in with a Google account
    // (Note: You may need to provide your own Google account credentials)
    const emailInput = await driver.findElement(By.name("identifier"));
    await emailInput.sendKeys("your_google_email@gmail.com", Key.RETURN);

    // Add a delay to simulate manual interaction (replace with proper wait conditions)
    await driver.sleep(2000);

    // Choose the lawyer account type on the /choice page
    const lawyerChoiceButton = await driver.findElement(
      By.id("lawyer-choice-button")
    );
    await lawyerChoiceButton.click();

    // Wait for the page to load
    await driver.wait(until.urlContains("/lawyer-info"));

    // Fill in lawyer information on the /lawyer-info page
    const nameInput = await driver.findElement(By.name("name"));
    await nameInput.sendKeys("John Doe");

    const specialtyInput = await driver.findElement(By.name("specialty"));
    await specialtyInput.sendKeys("Criminal Law");

    // Add more fields as needed...

    // Move to the next page (e.g., /upload-documents)
    const nextButton = await driver.findElement(By.id("next-button"));
    await nextButton.click();

    // Wait for the registration to complete (replace with proper wait conditions)
    await driver.wait(until.urlContains("/registration-complete"));

    // Verify that the registration was successful (replace with your actual success check)
    const successMessage = await driver.findElement(By.id("success-message"));
    const successText = await successMessage.getText();
    if (successText.includes("Registration successful")) {
      console.log("Lawyer registration successful!");
    } else {
      console.error("Lawyer registration failed.");
    }
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// Run the registration test
registerAsLawyer();
