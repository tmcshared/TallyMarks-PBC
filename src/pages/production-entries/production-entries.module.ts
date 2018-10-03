import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductionEntriesPage } from './production-entries';

@NgModule({
  declarations: [
    ProductionEntriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductionEntriesPage),
  ],
})
export class ProductionEntriesPageModule {}
