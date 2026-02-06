import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    // Home page
    await page.goto('/')
    await expect(page).toHaveTitle(/Sign Solutions of Ohio/)
    await expect(page.locator('h1')).toContainText("It's Not Just A Sign")

    // About page
    await page.click('text=About')
    await expect(page).toHaveURL('/about')
    await expect(page.locator('h1')).toContainText('About Sign Solutions')

    // Services page
    await page.click('text=Services')
    await expect(page).toHaveURL('/services')
    await expect(page.locator('h1')).toContainText('Services')

    // Portfolio page
    await page.click('text=Portfolio')
    await expect(page).toHaveURL('/portfolio')
    await expect(page.locator('h1')).toContainText('Portfolio')

    // Contact page
    await page.click('text=Contact')
    await expect(page).toHaveURL('/contact')
    await expect(page.locator('h1')).toContainText('Contact')
  })

  test('should have working phone number link', async ({ page }) => {
    await page.goto('/')
    const phoneLink = page.locator('a[href="tel:4192242231"]').first()
    await expect(phoneLink).toBeVisible()
  })
})
