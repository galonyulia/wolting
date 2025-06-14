import { test as base } from '@playwright/test';
import { LocationPicker } from '../pages/components/locationPicker';
import { SearchComponent } from '../pages/components/searchComponent';
import { CategoryNavigation } from '../pages/components/categoryNavigation';
import { RestaurantList } from '../pages/components/restaurantList';
import { CartComponent } from '../pages/components/cartComponent';
import { DiscoveryPage } from '@/pages/discoveryPage';

type ComponentFixtures = {
  locationPicker: LocationPicker;
  searchComponent: SearchComponent;
  categoryNavigation: CategoryNavigation;
  restaurantList: RestaurantList;
  cartComponent: CartComponent;
  discoveryPage: DiscoveryPage;
};

export const test = base.extend<ComponentFixtures>({
  discoveryPage: async ({ page }, use) => {
    await use(new DiscoveryPage(page));
  },
  locationPicker: async ({ page }, use) => {
    await use(new LocationPicker(page));
  },
  searchComponent: async ({ page }, use) => {
    await use(new SearchComponent(page));
  },
  categoryNavigation: async ({ page }, use) => {
    await use(new CategoryNavigation(page));
  },
  restaurantList: async ({ page }, use) => {
    await use(new RestaurantList(page));
  },
  cartComponent: async ({ page }, use) => {
    await use(new CartComponent(page));
  }
}); 
