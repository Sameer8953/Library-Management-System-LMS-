import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PadeHeaderComponent } from './components/pade-header/pade-header.component';



@NgModule({
  declarations: [
    PadeHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    PadeHeaderComponent
  ],
})
export class SharedModule { }
