# Test Scenarios – SauceDemo Purchase Flow

## Objective
Validate that a user can complete a full purchase flow for any product on the SauceDemo website.

---

## Assumptions

1. A valid test account is available with the following credentials:
   - **Username:** standard_user  
   - **Password:** secret_sauce  

2. The SauceDemo application remains stable and accessible during testing.

3. At least one product is always listed on the inventory page.

4. The checkout form accepts basic valid data such as:
   - First Name: Test  
   - Last Name: User  
   - Postal Code: 12345  

5. Tests are executed **only in Chromium**, both locally and in CI (cross-browser testing is out of scope).

6. Only one successful end-to-end purchase flow is required.  
   Negative scenarios (invalid login, empty fields, cart editing, etc.) are intentionally excluded.

7. The CI environment runs tests in headless mode and generates a Playwright HTML report.

8. **Although the assignment references `https://www.saucedemo.com/inventory.html` as the website under test, the automated script intentionally begins at `https://www.saucedemo.com/` because the inventory page requires authentication and will always redirect to the login screen when accessed directly. Starting at the login page reflects the real end-user journey.**

---

## End-to-End Scenario: Successful Purchase of One Product

### 1. Navigate to the Login Page
**Action:**  
Open `https://www.saucedemo.com`

**Verification:**  
- Login form appears  
- Username and password fields are displayed  
- Login button is enabled  

---

### 2. Log In Using Valid Credentials
**Action:**  
Enter username and password and click **Login**

**Verification:**  
- User is redirected to the inventory page (`/inventory.html`)  
- Page title “Products” is displayed  
- Product grid loads  

---

### 3. Add One Product to the Cart
**Action:**  
Click **Add to cart** on any available product

**Verification:**  
- Button changes to **Remove**  
- Cart badge displays **1** item  

---

### 4. Navigate to the Cart
**Action:**  
Click the shopping cart icon

**Verification:**  
- Cart page loads (`/cart.html`)  
- Selected product appears  
- Quantity shows **1**  

---

### 5. Proceed to Checkout
**Action:**  
Click the **Checkout** button

**Verification:**  
- Checkout Step One loads  
- First Name, Last Name, and Postal Code fields are visible  

---

### 6. Enter Customer Information
**Action:**  
Fill in valid details and click **Continue**

**Verification:**  
- User is taken to Checkout Step Two  
- Order summary shows the selected product  

---

### 7. Complete the Order
**Action:**  
Click **Finish**

**Verification:**  
- User is redirected to the confirmation page  
- Success message **“THANK YOU FOR YOUR ORDER”** is visible  
- Confirmation graphic appears  

---

## Expected Result
The user completes the full purchase flow for a single product and receives a confirmation that the order has been placed successfully.
