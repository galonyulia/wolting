import { test } from '../../src/fixtures/componentFixtures';
import { LOCATIONS } from '../../src/utils/constants/woltConstants';
import { consoleLogTestStart } from '../../src/utils/consoleLogTestStart';

const TESTS = {
  LOCATION_PICKER : 'Location picker',
  SELECT_LOCATION: 'Should allow selecting a location'
};

test.describe(TESTS.LOCATION_PICKER, () => {
  test.beforeEach(async ({ discoveryPage }) => {
    await discoveryPage.navigateToDiscovery();
  });

  test(TESTS.SELECT_LOCATION, async ({ locationPicker }) => {
    consoleLogTestStart(TESTS.SELECT_LOCATION);
    await test.step('Select location', async () => {
      await locationPicker.selectLocation(LOCATIONS.HELSINKI);
    });
    await test.step('Assert location selected', async () => {
      await locationPicker.assertLocationSelected(LOCATIONS.HELSINKI);
    });
  });
}); 
