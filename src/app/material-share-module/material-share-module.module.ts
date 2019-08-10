import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { BootstrapAngularModulesNGGXModule } from "./bootstrap-angular-modules-nggx.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, BootstrapAngularModulesNGGXModule],
  exports: [MaterialModule, BootstrapAngularModulesNGGXModule]
})
export class MaterialShareModuleModule {}
