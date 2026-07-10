//import { LoginPage } from "../src/pages/LoginPage";
import { test, expect } from "../src/fixtures/pagefixtures"
import { HomePage } from "../src/pages/HomePage";

test.beforeEach(async ({ loginPage, homePage }) => {
    await loginPage.gotoLoginPage();
    console.log(process.env.APPUSERNAME!, process.env.PASSWORD!);
    await loginPage.doLogin(process.env.APPUSERNAME!, process.env.PASSWORD!);


})
test("Homepage title test", async ({ homePage }) => {
    let homePageTitle = await homePage.getHomePageTitle();
    expect(homePageTitle).toBe("My Account")
})

test("logout link exist test", async ({ homePage }) => {
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
})

test("homepage Header exist page", async ({ homePage }) => {
    let homePageHeaders = await homePage.getHomePageHeaders();
    console.log(homePageHeaders);
    expect.soft(homePageHeaders).toHaveLength(4);
    expect.soft(homePageHeaders).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ]);
})