import {expect, Page} from '@playwright/test';

declare module '@playwright/test' {
  interface Matchers<R> {
    toBeOpensearchHomePage(): Promise<R>;
  }
}

expect.extend({
  async toBeOpensearchHomePage(page: Page) {
    const assertionName = 'toBeOpensearchHomePage';
    let pass: boolean;
    let matcherMessage: string | undefined;

    try {
      // The URL is the home page
      await expect(page).toHaveURL('http://opensearch.home.local/app/home#/');
      // The required home chrome is visible.
      await expect(
        page.locator('div[id="actionsMenu"][data-test-subj="account-popover"]'),
      ).toBeVisible();
      // The page is the OpenSearch home page
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
        'Expected page not to be OpenSearch home page, but it is.'
      : () =>
        this.utils.matcherHint(assertionName, undefined, undefined, {isNot: this.isNot}) +
        '\n\n' +
        'Expected page to be OpenSearch home page, but it is not.' +
        `${matcherMessage ? '\n\n' + matcherMessage : ''}`;

    return {
      message,
      pass,
      name: assertionName,
    };
  },
});
