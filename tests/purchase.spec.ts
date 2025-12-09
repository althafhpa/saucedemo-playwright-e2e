import { test, expect } from '@playwright/test';

test('successful purchase of one product', async ({ page }) => {
  // 1. Login
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 2. Add Backpack to cart
  await page.click('text=Sauce Labs Backpack');
  await page.click('text=Add to cart');

  // 3. Go to cart
  await page.click('.shopping_cart_link');
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  // 4. Checkout
  await page.click('#checkout');
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '3000');
  await page.click('#continue');

  // 5. Finish
  await page.click('#finish');
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
