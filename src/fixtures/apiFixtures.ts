import { test as base } from '@playwright/test';
import { SignInService } from '../services/signIn';
import { OrderService } from '../services/order';

type ApiFixtures = {
  apiSignInFixture: SignInService;
  apiOrderFixture: OrderService;
};

export const test = base.extend<ApiFixtures>({
  apiSignInFixture: async ({}, use) => {
    await use(new SignInService());
  },
  apiOrderFixture: async ({}, use) => {
    await use(new OrderService());
  }
}); 

  
