import { Component } from "@angular/core";

@Component({
    moduleId: __filename,
    selector: "sdk-app",
    template: `
        <GridLayout>
            <page-router-outlet></page-router-outlet>
        </GridLayout>
    `
})

export class AppComponent {
}
