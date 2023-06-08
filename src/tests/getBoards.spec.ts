import { test, expect } from '@playwright/test'

test('Get Boards', async ({ request }) => {
  const response = await request.get('https://kanban-task-management-api.vercel.app/api/v1/boards')

  expect(response.status()).toBe(200)
  console.log(await response.json())
})
