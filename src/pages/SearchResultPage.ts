import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage{
private readonly searchResult: Locator;
 constructor(page: Page){
    super(page);
    this.searchResult=page.locator('div.product-layout')
 }

async getProductSearchResultCount(): Promise<number>
{
    return await this.searchResult.count();

}
 
async selecProduct(productName: string){
    await this.page.getByRole('link',{name: productName, exact:true}).first().click();
}


}