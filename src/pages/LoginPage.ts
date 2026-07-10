import { Locator, Page } from "@playwright/test";
import {BasePage} from "./BasePage";
export class LoginPage extends BasePage {

    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly forgottenPwdLink: Locator;
    private readonly logo:Locator;
    private readonly loginError:Locator;
     constructor(page:Page){
         super(page);
        this.emailId= page.getByRole("textbox", {name: "E-Mail Address"});
        this. password=page.getByRole("textbox", {name:"Password"});
        this.loginBtn=page.getByRole("button",{name: "Login"});
        this.forgottenPwdLink=page.getByRole("link",{name:"Forgotten Password"}).first();
        this.logo=page.getByAltText("naveenopencart");
        this.loginError=page.locator("//div[@class='alert alert-danger alert-dismissible']");

     }
     async gotoLoginPage():Promise<void>{
       await this.page.goto("/opencart/index.php?route=account/login")
     }

     async getLoginPageTitle():Promise<string>{
       return await this.page.title();
     }

     async isForgotPwdLinkExist():Promise<Boolean>{
        return await this.forgottenPwdLink.isVisible();
     }
     
     async doLogin(APPUSERNAME:string, password: string):Promise<void>{
      console.log(`username: ${APPUSERNAME}, password: ${password}`);
      await this.emailId.clear();
      await this.emailId.fill(APPUSERNAME);
      await this.page.waitForTimeout(2000);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async isLoginErrorDisplayed():Promise<boolean>{
      return await this.loginError.isVisible();
    }


}