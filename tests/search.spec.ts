import { test, expect } from "../src/fixtures/pagefixtures"
import { HomePage } from "../src/pages/HomePage";
import { CsvHelper } from "../src/utils/CsvHelper";

test.beforeEach(async ({ loginPage, homePage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.doLogin(process.env.appUSERNAME!, process.env.PASSWORD!);


})


 let productdata = CsvHelper.readCsv('./src/Data/ProductData.csv');
 for(let row of productdata){
test(`verify search with product -${row.SearchKey}-${row.ProductName}`, async ({ homePage, searchResultPage }) => {
   await homePage.doSearch(row.SearchKey);
 expect(await searchResultPage.getProductSearchResultCount()).toBe(Number(row.resultCount));
})

 }
for( let row of productdata ){
test(`verify user is land on productpage -${row.SearchKey}-${row.ProductName}`, async ({ homePage, searchResultPage, page }) => {
   await homePage.doSearch(row.SearchKey);
  await searchResultPage.selecProduct(row.ProductName);
  expect(await page.title()).toBe(row.ProductName);

})
}