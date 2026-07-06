import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    private readonly logoutlink:Locator;
    private readonly headers:Locator;
    private readonly searchbox:Locator;
    private readonly searchIcon: Locator;
    



constructor(page:Page){
    super(page);
    this.logoutlink =page.getByRole("link", {name: "Logout"});
    this.headers= page.getByRole("heading",{level:2});
    this. searchbox= page.getByPlaceholder('Search')
    this.searchIcon=page.locator('button.btn.btn-default.btn-lg')

}

async getHomePageTitle(): Promise<string>{
   return await this.page.title();
}

async isLogoutLinkExist(): Promise<boolean>{
  return  await this.logoutlink.isVisible()
}

async getHomePageHeaders():Promise<string[]>{
    return await this.headers.allInnerTexts();
}

async doSearch(searchKey:string){
    await this.searchbox.fill(searchKey);
    await  this.searchIcon.click();
}
}