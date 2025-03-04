import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://vargab-dev.github.io/test-automation-portfolio/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React/);

  await page.getByRole('link', { name: 'Projects' }).click();
  // await expect(page.getByText('E2E UI Testing with PlaywrightAutomated UI testing for web applications.')).toBeVisible();
  await page.getByText('API Testing with RestAssuredValidating REST APIs using Java.').click();
  await page.getByText('Performance Testing with JMeterTesting load and stress with JMeter.').click();

  await page.pause();
});
