import { Component } from "@angular/core";
import { action } from "ui/dialogs";

@Component({
    moduleId: __filename,
    templateUrl: "./action-dialog.component.html"
})
export class ActionDialogComponent {
    displayActionDialog() {
        // >> action-dialog-code
        let options = {
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        };

        action(options).then((result) => {
            console.log(result);
        });
        // << action-dialog-code
    }
}
