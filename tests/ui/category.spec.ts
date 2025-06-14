import { test } from '../../src/fixtures/componentFixtures';
import { consoleLogTestStart } from '../../src/utils/consoleLogTestStart';

const TESTS = {
  CATEGORY_NAVIGATION: 'Category navigation',
  NAVIGATE_TO_CATEGORY: (category: string) => `Should navigate to category ${category}`
};

test.describe(TESTS.CATEGORY_NAVIGATION, () => {
  let categories: string[];

  test.beforeEach(async ({ discoveryPage, categoryNavigation }) => {
    await discoveryPage.navigateToDiscovery();
    await categoryNavigation.assertCategoriesGridVisible();
    categories = await categoryNavigation.getAllCategoryNames();
  });

  test('Should navigate to all categories from live page', async ({ categoryNavigation, discoveryPage }) => {
    for (const category of categories) {
      
      await test.step(`Click category: ${category}`, async () => {
        consoleLogTestStart(TESTS.NAVIGATE_TO_CATEGORY(category));
        await categoryNavigation.clickCategory(category);
      });
      
      await test.step('Assert category title', async () => {
        await categoryNavigation.assertCategoryTitle(category);
      });

      await test.step('Navigate back to discovery page', async () => {
        await discoveryPage.navigateToDiscovery();
      });
    }
  });
}); 
