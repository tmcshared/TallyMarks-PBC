import { Component } from "@angular/core";
import { NavController, MenuController, IonicPage } from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NetworkManagerService } from "./../../services/network-manager.service";
import { UtilityService } from "./../../services/utility.service";
import { RESPONSE_MESSAGE } from "../../shared/constant/message";
import { Storage } from '@ionic/storage';
import { ACCOUNT_REQUEST } from "../../shared/constant/request/xmlAccountRequest";
import { URL } from "../../shared/constant/config";
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private storage: Storage,
    public nav: NavController,
    private service: NetworkManagerService,
    public menu: MenuController,
    private utility: UtilityService
  ) {
    this.menu.swipeEnable(false);
  }

  ngOnInit() {
    this.InitializeForm();
  }

  InitializeForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userPassword: new FormControl(null, [Validators.required])
    });
  }
  authenticateUser() {
    const data = this.loginForm.value;
    const spinner = this.utility.createLoader(RESPONSE_MESSAGE.LOADING);
    spinner.present();
    this.service.post(URL.LOGIN, ACCOUNT_REQUEST.LOGIN(data)).subscribe(
      response => {
        spinner.dismiss();
        response = JSON.parse(response.UserLoginResponse[0].UserLoginResult[0]);
        if (response) {
          this.storage.set("IsAuthenticated", "true");
          this.nav.setRoot("TabsPage");
        } else {
          this.utility
            .createToast(RESPONSE_MESSAGE.INVALID_CREDENTIAL, 3000)
            .present();
        }
      },
      error => {
        spinner.dismiss();
        this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
      }
    );
  }
}
