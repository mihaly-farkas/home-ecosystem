import {expect, test} from '@playwright/test';
import './opensearch/to-be-opensearch-login-page';
import './opensearch/to-be-opensearch-home-page';
import {loginAsAdmin} from './opensearch/login-as-admin';

test('opensearch login screen is displayed', async ({page}) => {
  await page.goto('http://opensearch.home.local');
  await expect(page).toBeOpensearchLoginPage();
});

test('opensearch admin can log in', async ({page}) => {
  await loginAsAdmin(page);
  await expect(page).toBeOpensearchHomePage();
});
