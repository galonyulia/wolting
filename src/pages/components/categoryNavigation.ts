import { expect, Locator } from '@playwright/test';
import { BasePage } from '../basePage';

export class CategoryNavigation extends BasePage {
  private readonly CATEGORY_SELECTOR_TEMPLATE = '[data-test-id="ProductLine"]:has-text("{{category}}")';
  private readonly selectors = {
    categoryTitle: this.page.locator('h1[data-test-id="DiscoveryPageTitle"]'),
    categoryGrid: this.page.locator('[data-test-id="ProductLine.Grid"]'),
  };

  async clickCategory(category: string): Promise<void> {
    console.log(`Click category ${category}`);
    await this.page.locator(this.CATEGORY_SELECTOR_TEMPLATE.replace('{{category}}', category)).click();
  }

  //without the expand all categories functionality, only the visible categories are returned
  async getAllCategoryNames(): Promise<string[]> {
    const categoryLocators = this.page.locator('[data-test-id="ProductLine.Title"]');
    const categoryCount = await categoryLocators.count();
    const categories: string[] = [];
    for (let i = 0; i < categoryCount; i++) {
      const text = await categoryLocators.nth(i).textContent();
      if (text) categories.push(text.trim());
    }
    return categories;
  }

  async assertCategoryTitle(category: string): Promise<void> {
    console.log(`Assert category title ${category}`);
    await expect(this.selectors.categoryTitle).toBeVisible();
    await expect(this.selectors.categoryTitle).toContainText(category); //in an ideal world (with more time) i would have a mapped list of categories and their titles
  }

  async assertCategoriesGridVisible(): Promise<void> {
    console.log('Assert categories grid visible');
    await expect(this.selectors.categoryGrid).toBeVisible();
  }

  getCategoryLocator(category: string): Locator {
    return this.page.locator(this.CATEGORY_SELECTOR_TEMPLATE.replace('{{category}}', category));
  }
} 
