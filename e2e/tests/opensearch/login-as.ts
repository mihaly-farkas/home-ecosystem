import {Page} from '@playwright/test';

export async function loginAs(page: Page, username: string, password: string) {
  // Open the login page
  await page.goto('http://opensearch.home.local/app/login');
  // Fill in the username and password fields and submit the form
  await page.locator('input[type="text"][data-test-subj="user-name"]').fill(username);
  await page.locator('input[type="password"][data-test-subj="password"]').fill(password);
  await page.locator('button[type="submit"][data-test-subj="submit"]').click();
}
