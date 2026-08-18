# Telegram Profile — Silo style

A static, mobile-first profile page inspired by modern personal profile pages.
It is an independent implementation and is ready for GitHub Pages.

## 1. Replace assets

Put your own files in `assets/`:

- `avatar.jpg` — profile image
- `background.jpg` — fallback background
- `background.mp4` — optional animated background
- `music.mp3` — optional profile music

## 2. Edit profile

Open `app.js` and change the `profile` object:

- displayName
- username
- bio
- avatar
- views
- location
- track
- socials

## 3. GitHub Pages

Create a GitHub repository and upload all files from this folder.

Then:

`Settings → Pages → Deploy from branch → main → / (root)`

Your page will be available at:

`https://USERNAME.github.io/REPOSITORY/`

## 4. Telegram Mini App

The page already detects Telegram WebApp and calls:

- `Telegram.WebApp.ready()`
- `Telegram.WebApp.expand()`

For a real Telegram bot, add this URL as your Mini App/Web App URL in your bot configuration.

## 5. Backend later

The frontend is intentionally separated from backend logic. You can later replace the static `profile` object with:

`GET https://your-api.example/profile/tinyaf`

and update views/social/profile data dynamically.

## Note

Do not copy another site's source code, proprietary assets, or branding. This template recreates the general type of profile experience with original HTML/CSS/JS.

