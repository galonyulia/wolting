import { test } from '../../src/fixtures/componentFixtures';
import { consoleLogTestStart } from '../../src/utils/consoleLogTestStart';

const TESTS = {
  BASIC_FUNCTIONALITY: 'Basic functionality',
  LOAD_DISCOVERY_PAGE: 'Should load discovery page'
};

test.describe(TESTS.BASIC_FUNCTIONALITY, () => {
  test.beforeEach(async ({ discoveryPage }) => {
    await discoveryPage.navigateToDiscovery();
  });

  test(TESTS.LOAD_DISCOVERY_PAGE, async ({ categoryNavigation, discoveryPage }) => {  
    consoleLogTestStart(TESTS.LOAD_DISCOVERY_PAGE);
    await test.step('Verify discovery page loaded', async () => {
      await discoveryPage.assertDiscoveryPageLoaded();
    });

    await test.step('Verify categories are visible', async () => {
      await categoryNavigation.assertCategoriesGridVisible();
    });
  });
}); 
