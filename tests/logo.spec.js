import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login';

test.describe('Swag Labs Logo', () => {

  test('Validate Swag Labs logo text after successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // Validate logo is visible
    const appLogo = page.locator('.app_logo');
    await expect(appLogo).toBeVisible();

    // Validate logo text
    await expect(appLogo).toHaveText('Swag Labs');
  });

});