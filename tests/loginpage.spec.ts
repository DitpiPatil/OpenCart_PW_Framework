
import { LoginPage } from "../src/pages/LoginPage";
import { test, expect } from "@playwright/test";
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
})
test("Login page title  Test", async ({ page }) => {
    expect(await loginPage.getLoginPageTitle()).toBe("Account Login");
})

test("forgot password link exist test", async ({ page }) => {
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
})

test("user is able to Login test", async ({ page }) => {
    await loginPage.doLogin("pwtestbatch@open.com", "pw123");
})