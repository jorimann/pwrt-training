import {test, expect} from "@playwright/test"

test('has own title', async ({ page }) => {
    await page.goto("https://www.saucedemo.com")
    await expect(page).toHaveTitle(/Swag Labs/)
} )

test('able to login with valid user', async ({page}) => {
    await page.goto("https://www.saucedemo.com")

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();    
    await expect(page.locator('id=shopping_cart_container')).toBeVisible();
})