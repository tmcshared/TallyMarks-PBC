import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "validation-message",
  templateUrl: "validation-message.html"
})
export class ValidationMessageComponent {
  @Input()
  control: FormControl;
  validateControl(error) {
    let message = "";
    switch (true) {
      case error.numbers_only === true:
        message = "Numbers are required.";
        break;
      case error.required === true:
        message = "Field is required.";
        break;
      case error.min:
        message = "Input value is less than the required value.";
        break;
      case error.max:
        message = "Input value exceed the required length.";
        break;
      case error.numbers_decimal_only:
        message = "Numbers are required.";
        break;
      case !!error.maxlength.requiredLength:
        message = "Input value exceed the required length.";
        break;

      default:
        break;
    }
    console.log(message);
    return message;
  }
}
