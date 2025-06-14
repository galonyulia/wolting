import { expect } from '@playwright/test';
import { BasePage } from '../basePage';

const NO_RESTAURANTS_COUNT = 0;

export class RestaurantList extends BasePage {
  private readonly selectors = {
    firstMenuItem: this.page.getByTestId('horizontal-item-card-button').first(),
    visibleVenueCards : this.page.getByTestId('venueCard.dense'),
  };

  async addFirstMenuItemToCart(): Promise<void> {
    console.log('Add first menu item to cart');
    await this.assertVenueCardsVisible();
    await this.selectors.visibleVenueCards.first().click();
    await this.selectors.firstMenuItem.click();
  }

  async clickSpecificRestaurant(restaurant: string): Promise<void> {
    console.log(`Click specific restaurant ${restaurant}`);
    const restaurantSelector = this.page.getByText(restaurant);
    await restaurantSelector.click();
  }

  async assertVenueCardsVisible(): Promise<void> {
    console.log('Assert restaurant cards visible');
    await this.waitForElementState(this.selectors.visibleVenueCards.first());
    const count = await this.selectors.visibleVenueCards.count();
    await expect(count).toBeGreaterThan(NO_RESTAURANTS_COUNT);
  }
} 
