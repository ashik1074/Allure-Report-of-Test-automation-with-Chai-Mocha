const { remote } = require('webdriverio');
const opts = {
 port: 4723,
 capabilities: {
 platformName: 'Android',
 deviceName: 'sdk_gphone64_x86_64',
 app: '/Users/HOME/Downloads/Sauce_demo.apk',
 automationName: 'UiAutomator2', // or 'XCUITest' for iOS
 },
};

it('should perform login', async () => {
    // Assuming you have found elements using appropriate locators (e.g., id, xpath, etc.)
     const usernameField = await $('//android.widget.EditText[@content-desc="test-Username"]');
    const passwordField = await $('//android.widget.EditText[@content-desc="test-Password"]');
    const loginButton = await $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    // Replace 'your_username', 'your_password' with actual login credentials
    const username = 'standard_user';
    const password = 'secret_sauce';
    // Input login credentials
    await usernameField.setValue(username);
    await passwordField.setValue(password);
    // Click the login button
    await loginButton.click();
    await browser.pause(5000);
});
it('Add one item to Cart', async () => {
    const addToCartButton = await $('(//android.widget.TextView[@text="ADD TO CART"])[2]');
    await addToCartButton.click();
    await browser.pause(5000);
});
it('Check Added Item', async () => {
    const checkCart = await $('//android.widget.TextView[@text="1"]');
    await checkCart.click();
    await browser.pause(5000);
    const checkoutButton = await $('//android.widget.TextView[@text="CHECKOUT"]');
    await checkoutButton.click();
  });
  it('Fill Checkout Form', async () => {
  const firstNameField = await $('//android.widget.EditText[@content-desc="test-First Name"]');
  await firstNameField.setValue('shanjida');
  const lastNameField = await $('//android.widget.EditText[@content-desc="test-Last Name"]');
  await lastNameField.setValue('labonno');
  const postalCodeField = await $('//android.widget.EditText[@content-desc="test-Zip/Postal Code"]');
  await postalCodeField.setValue('2400');
  const continueButton = await $('//android.widget.TextView[@text="CONTINUE"]');
  await continueButton.click();
  await browser.pause(5000);
});