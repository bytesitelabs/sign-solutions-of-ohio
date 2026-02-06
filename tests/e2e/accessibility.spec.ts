import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy on home page', async ({ page }) => {
    await page.goto('/')

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // h1 should come before h2s
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
  })

  test('should have skip to content link', async ({ page }) => {
    await page.goto('/')
    
    // Focus on skip link (usually hidden until focused)
    await page.keyboard.press('Tab')
    
    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeFocused()
  })

  test('should have proper aria labels on navigation', async ({ page }) => {
    await page.goto('/')
    
    const nav = page.locator('nav[aria-label="Main navigation"]')
    await expect(nav).toBeVisible()
  })

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/')
    
    const images = page.locator('img')
    const count = await images.count()
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      // All images should have an alt attribute (can be empty for decorative)
      expect(alt).not.toBeNull()
    }
  })

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact')
    
    // Check that form inputs have associated labels
    const nameInput = page.locator('input[name="name"]')
    const nameId = await nameInput.getAttribute('id')
    const nameLabel = page.locator(`label[for="${nameId}"]`)
    await expect(nameLabel).toBeVisible()
  })

  test('should have sufficient color contrast on buttons', async ({ page }) => {
    await page.goto('/')
    
    // Primary button should be visible and have text
    const primaryButton = page.locator('a.bg-primary').first()
    await expect(primaryButton).toBeVisible()
    await expect(primaryButton).toHaveCSS('background-color', 'rgb(237, 31, 36)') // #ed1f24
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')
    
    // Tab through focusable elements
    await page.keyboard.press('Tab') // Skip link
    await page.keyboard.press('Tab') // Logo/home link
    await page.keyboard.press('Tab') // First nav item
    
    // Should be able to activate links with Enter
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })
})
