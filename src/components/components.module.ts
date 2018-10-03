import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ValidationMessageComponent } from './validation-message/validation-message';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [ValidationMessageComponent],
	imports: [CommonModule],
	exports: [ValidationMessageComponent],
	schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
