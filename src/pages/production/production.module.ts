import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProductionPage } from "./production";
import { ComponentsModule } from "../../components/components.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  declarations: [ProductionPage],
  imports: [
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    IonicPageModule.forChild(ProductionPage),
    IonicSelectableModule,

  ]
})
export class ProductionPageModule {}
