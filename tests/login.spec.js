const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');

test.describe('SauceDemo Login', () => {

    test('Verify successful login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Navigate to application
        await loginPage.navigate();

        // Login
        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // Validate URL
        await expect(page).toHaveURL(
            'https://www.saucedemo.com/inventory.html'
        );
    });

});