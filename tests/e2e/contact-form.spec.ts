import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display the contact form', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible()
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="phone"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()
  })

  test('should require name and phone fields', async ({ page }) => {
    // Try to submit empty form
    await page.click('button[type="submit"]')

    // Check for browser validation
    const nameInput = page.locator('input[name="name"]')
    await expect(nameInput).toHaveAttribute('required', '')
    
    const phoneInput = page.locator('input[name="phone"]')
    await expect(phoneInput).toHaveAttribute('required', '')
  })

  test('should fill out and submit the form', async ({ page }) => {
    // Fill out the form
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="phone"]', '419-555-1234')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.selectOption('select[name="service"]', 'vehicle-wraps')
    await page.fill('textarea[name="message"]', 'I need a vehicle wrap for my business truck.')

    // Submit the form
    await page.click('button[type="submit"]')

    // Wait for success message
    await expect(page.locator('text=Thank You!')).toBeVisible({ timeout: 5000 })
  })

  test('should display contact information', async ({ page }) => {
    await expect(page.locator('text=419-224-2231')).toBeVisible()
    await expect(page.locator('text=2601 Central Point Parkway')).toBeVisible()
    await expect(page.locator('text=Lima, OH 45804')).toBeVisible()
  })
})
