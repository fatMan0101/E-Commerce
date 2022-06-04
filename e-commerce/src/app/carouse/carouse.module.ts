import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouseComponent } from "./carouse.component"


@NgModule({
  declarations:[
    CarouseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouseComponent
  ]
})

export class CarouseModule { }

