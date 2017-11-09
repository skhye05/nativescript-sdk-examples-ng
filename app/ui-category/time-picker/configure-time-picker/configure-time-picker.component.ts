import { Component } from "@angular/core";
import { TimePicker } from "ui/time-picker";

@Component({
    moduleId: __filename,
    templateUrl: "./configure-time-picker.component.html"
})
export class ConfigureTimePickerComponent {
    // >> time-picker-configure-code
    onPickerLoaded(args) {
        let timePicker = <TimePicker>args.object;

        timePicker.hour = 9;
        timePicker.minute = 25;
    }
    // << time-picker-configure-code
}
