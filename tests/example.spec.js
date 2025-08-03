import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:8000/index.html'); // Assuming you'll serve your app locally
  await expect(page).toHaveTitle(/To-Do List/);
});

test('should allow adding a new task', async ({ page }) => {
  await page.goto('http://localhost:8000/index.html');
  await page.fill('#input-box', 'Learn Playwright');
  await page.click('button:has-text("Add")');
  await expect(page.locator('ul#list-container li')).toContainText('Learn Playwright');
});

test('should allow marking a task as complete', async ({ page }) => {
  await page.goto('http://localhost:8000/index.html');
  await page.fill('#input-box', 'Task to complete');
  await page.click('button:has-text("Add")');

  const taskItem = page.locator('ul#list-container li:has-text("Task to complete")');
  await taskItem.click(); // Click the task to mark it complete

  await expect(taskItem).toHaveClass(/checked/); // Verify the 'checked' class is applied
});

test('should allow deleting a task', async ({ page }) => {
  await page.goto('http://localhost:8000/index.html');
  await page.fill('#input-box', 'Task to delete');
  await page.click('button:has-text("Add")');

  const taskItem = page.locator('ul#list-container li:has-text("Task to delete")');
  await expect(taskItem).toBeVisible(); // Ensure the task is visible before attempting to delete

  // Click the delete (x) button for the task
  await taskItem.locator('span').click();

  // Verify the task is no longer visible
  await expect(taskItem).not.toBeVisible();
});

test('should persist tasks after page reload', async ({ page }) => {
  await page.goto('http://localhost:8000/index.html');
  await page.fill('#input-box', 'Persistent Task');
  await page.click('button:has-text("Add")');

  // Reload the page
  await page.reload();

  // Verify the task is still present
  await expect(page.locator('ul#list-container li:has-text("Persistent Task")')).toBeVisible();
});