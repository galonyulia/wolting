import { expect } from '@playwright/test';
import { BasePage } from '../basePage';
import { KEYBOARD_KEYS } from '../../utils/constants/constants';

export class SearchComponent extends BasePage {
  private readonly selectors = {
    input: this.page.getByPlaceholder('Search'),
    noResults: this.page.getByText('No results found'),
    venueCards: this.page.locator('[data-test-id^="venueCard."]'),
  };

  async searchFor(searchTerm: string): Promise<void> {
    console.log(`Search for ${searchTerm}`);
    await this.selectors.input.click();
    await this.selectors.input.fill(searchTerm);
    await this.selectors.input.press(KEYBOARD_KEYS.ENTER);
  }

  async assertSearchResultsVisible(searchTerm: string): Promise<void> {
    console.log(`Assert search results visible for ${searchTerm}`);
    await expect(this.selectors.venueCards.first()).toBeVisible();
  }

  async assertNoSearchResultsVisible(): Promise<void> {
    console.log('Assert no search results visible');
    await expect(this.selectors.venueCards).toHaveCount(0);
  }
} 
