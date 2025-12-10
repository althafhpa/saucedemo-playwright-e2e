# SauceDemo End-to-End Playwright Test

This project automates the end-to-end purchase flow on the SauceDemo website (https://www.saucedemo.com) using Playwright, including documentation of test scenarios and CI integration via GitHub Actions.

---

## Objective

The goal is to validate that a user can successfully:
1. Log in  
2. Add a product to the cart  
3. Proceed through checkout  
4. Complete the order  
5. View a confirmation message  

This work was developed as part of a technical assignment.

---

## Visual Preview

### ✔ Successful Order Completion
![Order Success Screenshot](https://github.com/althafhpa/saucedemo-playwright-e2e/blob/main/assets/test-success.png?raw=true)

### ✔ Sample Playwright HTML Report
![HTML Report Screenshot](https://github.com/althafhpa/saucedemo-playwright-e2e/blob/main/assets/html-report.png?raw=true)

---

## Test Scenario Documentation

Complete scenario documentation, including verification points and assumptions, is available in:

[TEST_SCENARIOS.md](TEST_SCENARIOS.md)

---

## Automated Test Details

The Playwright script performs the following:
- Logs in using valid credentials  
- Adds one product to the cart  
- Verifies the cart  
- Completes the checkout flow  
- Confirms the order success  

Test file location:  
[tests/purchase.spec.ts](tests/purchase.spec.ts)

---

## Tech Stack

- Playwright (Chromium-only for this assignment)  
- TypeScript / Node.js  
- GitHub Actions CI

---

## Browser Scope (Important)

- Tests run only in Chromium  
- CI uses headless mode  
- Cross-browser testing (Firefox/WebKit) is intentionally excluded  

(Also documented in TEST_SCENARIOS.md)

---

## CI/CD Integration

GitHub Actions runs the automated test on:
- Pushes to main  
- Pull requests  
- Manual workflow triggers  

Workflow file:  
[.github/workflows/playwright.yml](.github/workflows/playwright.yml)

The CI pipeline:
1. Sets up Node.js  
2. Installs dependencies  
3. Installs Playwright + Chromium  
4. Runs tests in headless mode  
5. Uploads the Playwright HTML report as an artifact  

---

## Downloading the Test Report from CI

After any CI run:

1. Open GitHub Actions  
2. Open the latest workflow run  
3. Scroll to the Artifacts section  
4. Download the artifact named **playwright-report**  
5. Extract the ZIP file  
6. Open the report file named **index.html**  

The report includes steps, logs, and failure snapshots (if any).

---

## Running Locally

Install dependencies:  
npm install

Run tests in UI mode:  
npx playwright test --ui

Run headless:  
npx playwright test

---

## Project Structure

saucedemo-playwright-e2e/  
│  
├── tests/  
│   └── purchase.spec.ts  
│  
├── TEST_SCENARIOS.md  
├── CHECKLIST.md  
├── README.md  
│  
├── playwright.config.ts  
├── package.json  
└── .github/  
    └── workflows/  
        └── playwright.yml