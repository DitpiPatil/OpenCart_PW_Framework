import{test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

import {CsvHelper} from "../utils/CsvHelper";
import { SearchResultPage } from "../pages/SearchResultPage";
type pageFixtures={
loginPage:LoginPage,
homePage:HomePage,
searchResultPage: SearchResultPage,
testData:Record<string, string>[]
}

export let test= baseTest.extend<pageFixtures>({
loginPage: async({page},use)=>{
    let loginpage= new LoginPage(page);
    await use(loginpage);
},

homePage: async({page},use)=>{
    let homePage =new HomePage(page);
    await use(homePage);
},

searchResultPage: async({page},use)=>{
    let searchResultPage= new SearchResultPage(page);
    await use(searchResultPage);
},

testData: async({},use)=>{
let testData= CsvHelper.readCsv("Data/LoginData.csv")
    await use(testData);

},



})
export {expect} from "@playwright/test";