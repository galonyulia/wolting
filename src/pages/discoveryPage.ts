import { BasePage } from "./basePage";
import { DISCOVERY_PAGE_URL } from "../utils/constants/woltConstants";
import { expect } from "@playwright/test";


export class DiscoveryPage extends BasePage {
  private readonly selectors = {
    discoveryPage: this.page.locator('[data-test-id="MainDiscoveryContent"]'),
  };

  async navigateToDiscovery(): Promise<void> {
    console.log('Navigate to discovery page');
    await this.goToPage(DISCOVERY_PAGE_URL);
    await this.assertDiscoveryPageLoaded();
  }

  async assertDiscoveryPageLoaded(): Promise<void> {
    await expect(this.selectors.discoveryPage).toBeVisible();
  }
}
