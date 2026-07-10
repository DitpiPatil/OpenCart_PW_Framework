
import { LoginPage } from "../src/pages/LoginPage";
import { test, expect } from "../src/fixtures/pagefixtures";
import { ExcelHelper } from "../src/utils/ExcelHelper";
import { CsvHelper } from "../src/utils/CsvHelper";
import { JsonHelper } from "../src/utils/JsonHelper";

test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
})
test("Login page title  Test", async ({ loginPage, page }) => {
    expect(await loginPage.getLoginPageTitle()).toBe("Account Login");

})

test("forgot password link exist test", async ({ loginPage }) => {
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();

})

test("user is able to Login test", async ({ loginPage, page }) => {
    await loginPage.doLogin(process.env.APPUSERNAME!, process.env.PASSWORD!);
    
})

let loginTestData = ExcelHelper.readExcel("./src/Data/LoginexcelData.xlsx", "Sheet1")
for (let row of loginTestData) {
    test(`invalid login test with excel data ${row.Username}- ${row.Password}`, async ({ loginPage, page }) => {
        await loginPage.doLogin(row.Username, row.Password);
        expect(loginPage.isLoginErrorDisplayed()).toBeTruthy();

    })
}




//invalid login test with csv data with fixtures
test(`invalid login test with csv data with fixtures`, async ({ loginPage, testData }) => {
    for (let row of loginData) {
        await loginPage.doLogin(row.Username, row.Password);
        expect(loginPage.isLoginErrorDisplayed()).toBeTruthy();
    }
})


let loginData = CsvHelper.readCsv("./src/Data/LoginData.csv")
for (let row of loginData) {
    test(`invalid login test with csv  data ${row.Username}- ${row.Password}`, async ({ loginPage }) => {

        await loginPage.doLogin(row.Username, row.Password);
        expect(loginPage.isLoginErrorDisplayed()).toBeTruthy();

    })
}


let loginJsonData = JsonHelper.readJson("./src/Data/Login.json")
for (let row of loginJsonData) {
    test(`invalid login test with json  data ${row.Username}- ${row.Password}`, async ({ loginPage }) => {

        await loginPage.doLogin(row.Username, row.Password);
        expect(loginPage.isLoginErrorDisplayed()).toBeTruthy();

    })
}