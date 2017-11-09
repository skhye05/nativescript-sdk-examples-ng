require("./vendor-platform");

require("reflect-metadata");
require("@angular/platform-browser");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");

if ((<any>global).skipCodeGeneration) {
    require("nativescript-angular/platform");
} else {
    require("nativescript-angular/platform-static");
}

require("nativescript-angular/animations");
require("nativescript-angular/router");
require("nativescript-angular/forms");

