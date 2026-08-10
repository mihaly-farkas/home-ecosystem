import {expect, test} from '@playwright/test';
import './homebox/to-be-homebox-login-page';

test('homebox login screen is displayed', async ({page}) => {
  await page.goto('http://homebox.home.local');
  await expect(page).toBeHomeboxLoginPage();
});
