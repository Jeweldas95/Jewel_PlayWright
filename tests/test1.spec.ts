// Import Playwright test runner and assertion library
import { test, expect } from '@playwright/test';

// Define a test case with a descriptive name
test('Verify Page Title', async ({ page }) => {

  // Navigate to the target URL
  // Playwright waits for the page to reach the "load" state by default
  // (can be customized with waitUntil if needed)
  await page.goto('https://qabrains.com/practice-site');

  // Assertion: Verify the page title
  // - Uses Playwright's built-in auto-waiting mechanism
  // - Retries until the expected title is matched or timeout (default 5s) is reached
  // - More reliable than manually fetching page.title()
  await expect(page).toHaveTitle(
    'Automation Testing Practice Website for QA | QA Brains'
  );

});