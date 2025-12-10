# Test Scenarios – SauceDemo Purchase Flow

## Objective
Validate that a user can complete a full purchase flow for any product on the SauceDemo website.

---

## Assumptions

1. A valid test account is available with the following credentials:
   - Username: standard_user
   - Password: secret_sauce

2. The SauceDemo application remains stable and accessible during testing.

3. At least one product is always listed on the inventory page.

4. The checkout form accepts basic valid data such as:
   - First Name: Test
   - Last Name: User
   - Postal Code: 12345

5. Tests are executed only in Chromium, both locally and in CI (cross-browser testing is out of scope).

6. Only one successful end-to-end purchase flow is required.  
   Negative scenarios (invalid login, empty fields, cart editing, etc.) are intentionally excluded.

7. The CI environment runs tests in headless mode and generates a Playwright HTML report.

---

## End-to-End Scenario: Successful Purchase of One Product

### 1. Navigate to the Login Page
**Action:**  
Open https://www.saucedemo.com  

**Verification:**  
- Login form is visible  
- Username and password fields are displayed  
- Login button is enabled  

---

### 2. Log In Using Valid Credentials
**Action:**  
Enter username and password and click Login  

**Verification:**  
- User is redirected to the inventory page (/inventory.html)  
- Page title “Products” is shown  
- Product grid loads successfully  

---

### 3. Add One Product to the Cart
**Action:**  
Click “Add to cart” on any available product  

**Verification:**  
- Button changes to “Remove”  
- Cart badge updates to show 1 item  

---

### 4. Navigate to the Cart
**Action:**  
Click the shopping cart icon  

**Verification:**  
- Cart page loads (/cart.html)  
- Selected product appears in the cart  
- Quantity shows as 1  

---

### 5. Click Checkout
**Action:**  
Press the “Checkout” button  

**Verification:**  
- Checkout Step One page loads  
- First Name, Last Name, and Postal Code fields are displayed  

---

### 6. Enter Customer Information
**Action:**  
Fill in valid details and click Continue  

**Verification:**  
- User is redirected to Checkout Step Two  
- Order summary displays selected product and price  

---

### 7. Complete the Order
**Action:**  
Click Finish  

**Verification:**  
- User is redirected to the order confirmation page  
- Success message “THANK YOU FOR YOUR ORDER” is shown  
- Confirmation graphic is displayed  

---

## Expected Result
The user successfully completes the end-to-end purchase of a single product and receives a confirmation page indicating that the order was placed.
