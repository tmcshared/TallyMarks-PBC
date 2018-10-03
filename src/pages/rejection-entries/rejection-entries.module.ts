import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectionEntriesPage } from './rejection-entries';

@NgModule({
  declarations: [
    RejectionEntriesPage,
  ],
  imports: [
    IonicPageModule.forChild(RejectionEntriesPage),
  ],
})
export class RejectionEntriesPageModule {}
