import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class AngularMaterialModule { }
