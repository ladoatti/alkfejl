import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../classes/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {
  @Input()
  public pizza: Pizza;

  constructor()
  { }

  ngOnInit() {
  }

}
