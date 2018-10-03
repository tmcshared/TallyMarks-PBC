import { Injectable } from "@angular/core";
import { ToastController, LoadingController } from "ionic-angular";

@Injectable()
export class UtilityService {
  constructor(
    private toast: ToastController,
    private spinner: LoadingController
  ) {}
  createToast(message, duration) {
    return this.toast.create({
      message: message,
      duration: duration,
      showCloseButton:true
    });
  }
  createLoader(message="Processing...") {
    return this.spinner.create({
      content: message
    });
  }
}
