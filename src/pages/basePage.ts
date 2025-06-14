import { Page, Locator } from '@playwright/test';
import { KEYBOARD_KEYS, ELEMENT_STATES, ElementWaitStates, PAGE_STATES } from '../utils/constants/constants';

export class BasePage {
  readonly page: Page;
  readonly DEFAULT_TIMEOUT = 20000;

  constructor(page: Page) {
    this.page = page;
  }

  async goToPage(urlPath: string): Promise<void> {
    if (urlPath) {
      await this.page.goto(urlPath, {
          waitUntil: PAGE_STATES.DOM_CONTENT_LOADED,
          timeout: this.DEFAULT_TIMEOUT,
      });
    }
  }

  async fillAndSubmitInput(text: string, locator: Locator, submitKey: string = KEYBOARD_KEYS.ENTER): Promise<void> {
    await locator.waitFor({ state: ELEMENT_STATES.VISIBLE });
    await locator.click();
    await locator.fill(text);
    await locator.press(submitKey);
    await this.page.waitForLoadState(PAGE_STATES.DOM_CONTENT_LOADED);
  }

  async waitForElementState(
    locator: Locator, 
    state: ElementWaitStates = ELEMENT_STATES.VISIBLE,
    timeout?: number
  ): Promise<void> {
    const options: { state: ElementWaitStates; timeout?: number } = { state };
    if (timeout) {
      options.timeout = timeout;
    }
    await locator.waitFor(options);
  }

  async isVisible(selector: string | Locator): Promise<boolean> {
    const element =
        typeof selector === 'string'
            ? this.page.locator(selector)
            : selector;
    return await element.isVisible();
  }

}
