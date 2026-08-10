import {expect, Page} from '@playwright/test';

declare module '@playwright/test' {
  interface Matchers<R> {
    toBeHomeboxLoginPage(): Promise<R>;
  }
}

expect.extend({
  async toBeHomeboxLoginPage(page: Page) {
    const assertionName = 'toBeHomeboxLoginPage';
    let pass: boolean;
    let matcherMessage: string | undefined;

    try {
      // The URL is the login page
      await expect(page).toHaveURL('http://homebox.home.local');
      // The required elements are visible
      await expect(page.locator('input[type="text"][id="login-username"]')).toBeVisible();
      await expect(page.locator('input[type="password"][id="login-password"]')).toBeVisible();
      await expect(page.locator('button[type="submit"]')).toBeVisible();
      // The page is the HomeBox login page
      pass = true;
    } catch (e: unknown) {
      if (typeof e === 'object' && e !== null && 'matcherResult' in e) {
        const maybeMatcherResult = (e as { matcherResult?: { message?: string } }).matcherResult;
        matcherMessage = maybeMatcherResult?.message;
      }

      if (!matcherMessage && e instanceof Error) {
        matcherMessage = e.message;
      }

      pass = false;
    }

    if (this.isNot) {
      pass = !pass;
    }

    const message = pass
      ? () =>
        this.utils.matcherHint(assertionName, undefined, undefined, {isNot: this.isNot}) +
        '\n\n' +
        'Expected page not to be HomeBox login page, but it is.'
      : () =>
        this.utils.matcherHint(assertionName, undefined, undefined, {isNot: this.isNot}) +
        '\n\n' +
        'Expected page to be HomeBox login page, but it is not.' +
        `${matcherMessage ? '\n\n' + matcherMessage : ''}`;

    return {
      message,
      pass,
      name: assertionName,
    };
  },
});
