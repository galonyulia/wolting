import { expect } from '@playwright/test';
import { test } from '../../src/fixtures/apiFixtures';
import { OrderResponse } from '../../src/services/order';
import { SignInRequest } from '../../src/services/signIn';
import config from '../../config';
import { consoleLogTestStart } from '../../src/utils/consoleLogTestStart';

const TESTS = {
  ORDER_A_DELICIOUS_MEAL: 'Order a delicious meal',
  COMPLETE_ORDER_FLOW: 'Should complete the full order flow via API'
};

test.describe(TESTS.ORDER_A_DELICIOUS_MEAL, () => {
  let TOKEN: string;
  const SIGN_IN_REQUEST: SignInRequest = {
    email: config.USER,
    password: config.PASSWORD
  };

  test.beforeAll(async ({ apiSignInFixture }) => {
    const signInResponse = await apiSignInFixture.getSignInToken(SIGN_IN_REQUEST);
    TOKEN = signInResponse.token;
    expect(TOKEN).toBeTruthy();
  });

  test(TESTS.COMPLETE_ORDER_FLOW, async ({ apiOrderFixture }) => {
    consoleLogTestStart(TESTS.COMPLETE_ORDER_FLOW);
    let orderResponse: OrderResponse;

    orderResponse = await apiOrderFixture.orderMyFavoriteFood(TOKEN);
    expect(orderResponse).toBeDefined();
    const isValid = await apiOrderFixture.validateOrderResponse(orderResponse);
    expect(isValid).toBe(true);
  });
}); 
