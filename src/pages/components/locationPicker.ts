import { BasePage } from '../basePage';
import { expect } from '@playwright/test';

export class LocationPicker extends BasePage {
  private readonly selectors = {
    selector: this.page.locator('[data-test-id="header.address-select-button"]'),
    addressInput: this.page.locator('[data-test-id="address-query-input"]'),
    suggestion: (city: string) => this.page.locator(`[data-test-id="${city}"]`),
    continueButton: this.page.locator('[data-test-id="continue-button"]'),
    backdrop: this.page.locator('.cb_ModalBase_Backdrop_954'),
    currentAddress: (city: string) => this.page.getByRole('button', { name: city })
  };

  async selectLocation(city: string): Promise<void> {
    console.log(`Select location ${city}`);
    await this.openLocationPicker();
    await this.selectCity(city);
  }

  async assertLocationSelected(city: string): Promise<void> {
    console.log(`Assert location selected ${city}`);
    await expect(this.selectors.currentAddress(city)).toBeVisible();
  }

  async openLocationPicker(): Promise<void> {
    console.log('Open location picker');
    const { selector, backdrop } = this.selectors;
    if (await backdrop.isVisible()) {
      await backdrop.click({ force: true });
    }
    await selector.first().click({ force: true });
  }

  async selectCity(city: string): Promise<void> {
    console.log(`Select city ${city}`);
    const { addressInput, suggestion, continueButton } = this.selectors;
    await addressInput.fill(city);
    await suggestion(city).first().click();
    await continueButton.click();
  }
} 
