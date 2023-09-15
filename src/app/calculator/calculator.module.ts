import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { BtnModule } from '../btn/btn.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
