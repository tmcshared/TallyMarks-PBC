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
      showCloseButton: true
    });
  }
  createLoader(message = "Processing...") {
    return this.spinner.create({
      content: message
    });
  }
  getTimingOrder(timeSlot) {
    switch (timeSlot) {
      case "6:00 - 7:00 AM":
        return 1;

      case "7:00 - 8:00 AM":
        return 2;

      case "8:00 - 9:00 AM":
        return 3;

      case "9:00 - 10:00 AM":
        return 4;

      case "10:00 - 11:00 AM":
        return 5;

      case "11:00 - 12:00 AM":
        return 6;

      case "12:00 - 1:00 PM":
        return 7;

      case "1:00 - 2:00 PM":
        return 8;

      case "2:00 - 3:00 PM":
        return 9;

      case "3:00 - 4:00 PM":
        return 10;

      case "4:00 - 5:00 PM":
        return 11;

      case "5:00 - 6:00 PM":
        return 12;

      case "6:00 - 7:00 PM":
        return 13;

      case "7:00 - 8:00 PM":
        return 14;

      case "8:00 - 9:00 PM":
        return 15;

      case "9:00 - 10:00 PM":
        return 16;

      case "10:00 - 11:00 PM":
        return 17;

      case "11:00 - 12:00 PM":
        return 18;

      case "12:00 - 1:00 AM":
        return 19;

      case "1:00 - 2:00 AM":
        return 20;

      case "2:00 - 3:00 AM":
        return 21;

      case "3:00 - 4:00 AM":
        return 22;

      case "4:00 - 5:00 AM":
        return 23;

      case "5:00 - 6:00 AM":
        return 24;

      default:
    }
  }
  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
}
