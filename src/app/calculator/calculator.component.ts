import { Component } from '@angular/core';
import { Operation } from '../models/operation';
import { Addition } from '../models/addition';
import { Subtraction } from '../models/subtraction';
import { FormControl } from '@angular/forms';
import { Multiplication } from '../models/multiplication';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  public aritmeticOperations: Operation[] = [];
  public result: number = 0;
  public value1 = new FormControl();
  public value2 = new FormControl();
  private operationSelected: Operation = new Addition();

  constructor() {
    this.aritmeticOperations.push(new Addition());
    this.aritmeticOperations.push(new Subtraction());
    this.aritmeticOperations.push(new Multiplication());
    this.value1.setValue(0);
    this.value2.setValue(0);
  }
  setOperation(operation: Operation) {
    this.operationSelected = operation;
  }
  makeOperation() {
    this.result = 0;
    this.result = this.operationSelected.makeOperation(this.value1.value, this.value2.value);
  }

}
