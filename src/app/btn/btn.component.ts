import { Component, Input } from '@angular/core';
import { Operation } from '../models/operation';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Input() operation?: Operation;

  constructor() { 

  }
}
