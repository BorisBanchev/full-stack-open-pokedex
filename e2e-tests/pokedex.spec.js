const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
  test('pokemon page can be opened from the front page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=ivysaur')
    await expect(page).toHaveURL('/pokemon/ivysaur')
    await expect(page.getByText('ivysaur')).toBeVisible()
  })
})
