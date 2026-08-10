import {Page, test} from '@playwright/test';
import {loginAs} from './login-as';

const adminUsername = 'admin';
const adminPassword = process.env.HOME_ECOSYSTEM_OPENSEARCH_ADMIN_PASSWORD;

export async function loginAsAdmin(page: Page) {
  test.skip(
    !adminPassword,
    'Set HOME_ECOSYSTEM_OPENSEARCH_ADMIN_PASSWORD to run the admin login test.',
  );
  await loginAs(page, adminUsername, adminPassword!);
}
