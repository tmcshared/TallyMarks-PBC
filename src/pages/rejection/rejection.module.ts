import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectionPage } from './rejection';
import { ComponentsModule } from '../../components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    RejectionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RejectionPage),
    IonicSelectableModule,
  ],
})
export class RejectionPageModule {}
