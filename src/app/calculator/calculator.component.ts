import { Component } from '@angular/core';
import { Operation } from '../models/operation';
import { Addition } from '../models/addition';
import { Subtraction } from '../models/subtraction';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  aritmeticOperations: Operation[] = [];

  constructor() {
    this.aritmeticOperations.push(new Addition());
    this.aritmeticOperations.push(new Subtraction());
  }
}
