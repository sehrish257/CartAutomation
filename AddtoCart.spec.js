import { test, expect } from '@playwright/test';

test('User login and add items to cart', async ({ page }) => {

  // Open site
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('.logo')).toBeVisible();

  // Login
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await expect(page.getByText('Login to your account')).toBeVisible();
  await page.locator('[data-qa="login-email"]').fill('sehar12@example.com');
  await page.getByPlaceholder('Password').fill('1234567');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify login success
  await expect(page.getByText('Logged in as')).toBeVisible();

  // Go to products page
  await page.getByRole('link', { name: 'Products' }).click();
  await expect(page.getByText('All Products')).toBeVisible();

  // Add first product
  await page.locator('[data-product-id="1"]').first().click();
  await expect(page.getByText('Added!')).toBeVisible();

  // Continue shopping
  await page.getByText('Continue Shopping').click();

  // Add second product
  await page.locator('[data-product-id="2"]').first().click();
  await expect(page.getByText('Added!')).toBeVisible();

  // View Cart
  await page.getByRole('link', { name: 'View Cart' }).click();

  // Verify items in cart
  await expect(page.locator('.cart_description')).toHaveCount(2);

});
