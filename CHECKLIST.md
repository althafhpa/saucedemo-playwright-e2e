# Playwright Test Implementation Checklist

This checklist documents all items verified during the setup, execution, and CI integration of the SauceDemo end-to-end Playwright test.

---

## Pre-conditions
- [ ] Playwright installed (`npm install @playwright/test`)
- [ ] Chromium installed (`npx playwright install chromium`)
- [ ] Valid SauceDemo credentials available  
- [ ] Test environment accessible  
- [ ] Configuration set to headless mode for CI runs  
- [ ] Test file present: [`tests/purchase.spec.ts`](tests/purchase.spec.ts)

---

## Test Steps
- [ ] Navigate to login page  
- [ ] Enter username and password  
- [ ] Verify successful login (inventory page visible)  
- [ ] Add one product to cart  
- [ ] Confirm cart badge increments  
- [ ] Open cart page  
- [ ] Verify selected product appears in cart  
- [ ] Proceed to checkout  
- [ ] Fill checkout information  
- [ ] Continue to order overview  
- [ ] Verify product information and total  
- [ ] Complete purchase  
- [ ] Validate success message displayed  

---

## Validation Checks
- [ ] Correct URL at each stage (login → inventory → cart → checkout → finish)  
- [ ] Correct product name appears in cart and checkout  
- [ ] Cart count displays correctly  
- [ ] Order completion message is visible  
- [ ] No unexpected UI errors  
- [ ] No unhandled exceptions in console  

---

## CI/CD Requirements
- [ ] GitHub Actions workflow exists at  
      [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)  
- [ ] Workflow installs Node.js  
- [ ] Workflow installs project dependencies  
- [ ] Workflow installs Playwright browsers (Chromium only)  
- [ ] Tests run headless in CI  
- [ ] HTML report generated in `playwright-report/`  
- [ ] Workflow uploads HTML report via `actions/upload-artifact@v4`

---

## Artifacts
- [ ] Artifact named **playwright-report** is generated in CI  
- [ ] Artifact contains a valid HTML report (`index.html`)  
- [ ] Report opens correctly locally  
- [ ] Contains trace, logs, or screenshots (if enabled)  

---

## Post-Run Verification
- [ ] CI pipeline passes successfully on GitHub  
- [ ] No flaky behavior observed across multiple runs  
- [ ] Local and CI results match (consistent behavior)  
- [ ] Test remains stable in Chromium (scope defined in assumptions)

