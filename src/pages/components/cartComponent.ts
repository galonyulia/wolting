import { expect } from '@playwright/test';
import { BasePage } from '../basePage';

export class CartComponent extends BasePage {
  private readonly selectors = {
    addToOrderButton: this.page.getByTestId('product-modal.submit'),
    showItemsButton: this.page.getByTestId('cart-view-button'),
    goToCheckoutButton: this.page.getByTestId('CartViewNextStepButton'),
    createAccountOrSignInTitle: this.page.getByText('Create an account or log in'),
  };


  async addToCartAndProceedToCheckout(): Promise<void> {
    console.log('Add to cart and proceed to checkout');
    await this.pressAddToOrderButton();
    await this.clickShowItemsButton();
    await this.clickGoToCheckoutButton();
  }

  async pressAddToOrderButton(): Promise<void> {
    await this.selectors.addToOrderButton.click();
  }

  async clickShowItemsButton(): Promise<void> {
    await this.selectors.showItemsButton.click();
  }

  async clickGoToCheckoutButton(): Promise<void> {
    await this.selectors.goToCheckoutButton.click();
  }

  async validateCreateAccountOrSignInPopUpVisible(): Promise<void> {
    console.log('Validate create account or sign in pop up visible');
    await expect(this.selectors.createAccountOrSignInTitle).toBeVisible();
  }
} 
