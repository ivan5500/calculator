import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { BtnModule } from '../btn/btn.module';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    BtnModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
