import {test, expect} from '@playwright/test'

test('user logins successfully', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('.logo')).toBeVisible();
    await page.getByRole('link',{name:'Signup / Login'}).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await page.locator('[data-qa="login-email"]').fill('sehar12@example.com');
    await page.getByPlaceholder('Password').fill('1234567');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Logged in as')).toBeVisible();
    await page.getByRole('link',{name:'Delete Account'}).click();
    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
})