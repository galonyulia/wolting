//import { consoleLogTestStart } from '../../src/utils/consoleLogTestStart';
// import { test } from '../../src/fixtures/componentFixtures';
// import { CATEGORIES, LOCATIONS } from '../../src/utils/constants/woltConstants';

// test.describe('Cart Functionality', () => {
//   test.beforeEach(async ({ discoveryPage, locationPicker }) => {
//     await discoveryPage.navigateToDiscovery();
//     await locationPicker.selectLocation(LOCATIONS.HELSINKI);
//     await discoveryPage.assertDiscoveryPageLoaded();
  
//     });

//   test('add first item from groceries category to cart', async ({ restaurantList, categoryNavigation, cartComponent }) => {
//     test.step('select first item in groceries category', async () => {
//       const category = CATEGORIES.GROCERIES;
//       await categoryNavigation.clickCategory(category);
//       await restaurantList.addFirstMenuItemToCart();
//     }); 

//     test.step('add first menu item to cart and proceed to checkout', async () => {
//       await cartComponent.addToCartAndProceedToCheckout();
//     });

//     test.step('validate create account or sign in pop up is visible', async () => {
//       await cartComponent.validateCreateAccountOrSignInPopUpVisible();
//     });
//   });

// }); 
