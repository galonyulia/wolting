import { test } from '../../src/fixtures/componentFixtures';
import { FOOD_TYPES } from '../../src/utils/constants/woltConstants';
import { consoleLogTestStart } from '../../src/utils/consoleLogTestStart';

const TESTS = {
  SEARCH_FUNCTIONALITY: 'Search functionality',
  COMPREHENSIVE_SEARCH_SCENARIOS: 'Comprehensive search scenarios',
  NO_RESULTS_SEARCH: 'Should handle no results search gracefully'
};

test.describe(TESTS.SEARCH_FUNCTIONALITY, () => {
  test.beforeEach(async ({ discoveryPage }) => {
    await discoveryPage.navigateToDiscovery();
  });

  test(TESTS.COMPREHENSIVE_SEARCH_SCENARIOS, async ({ searchComponent }) => {
    consoleLogTestStart(TESTS.COMPREHENSIVE_SEARCH_SCENARIOS);
    for (const searchTerm of FOOD_TYPES) {
      await test.step(`Search for '${searchTerm}'`, async () => {
        await searchComponent.searchFor(searchTerm);
      });
      await test.step('Assert search results visible', async () => {
        await searchComponent.assertSearchResultsVisible(searchTerm);
      });
    }
  });

  test(TESTS.NO_RESULTS_SEARCH, async ({ searchComponent }) => {
    consoleLogTestStart(TESTS.NO_RESULTS_SEARCH);
    const INVALID_SEARCH = 'xyzabc123nonexistent';
    await test.step(`Search for non-existent term '${INVALID_SEARCH}'`, async () => {
      await searchComponent.searchFor(INVALID_SEARCH);
    });

    await test.step('Verify page handles no results gracefully', async () => {
      await searchComponent.assertNoSearchResultsVisible();
    });
  });
});
