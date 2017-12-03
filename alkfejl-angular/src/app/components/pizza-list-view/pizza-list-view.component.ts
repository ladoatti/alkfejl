import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../classes/pizza';
import { Topping } from "../../classes/topping";

@Component({
  selector: 'app-pizza-list-view',
  templateUrl: './pizza-list-view.component.html',
  styleUrls: ['./pizza-list-view.component.css']
})
export class PizzaListViewComponent implements OnInit {
    private pizzas: Pizza[];
    private toppings1: Topping[];
    private toppings2: Topping[];
    private toppings3: Topping[];
  
    constructor() { 
      this.toppings1 = [new Topping(1, "Sonka"), new Topping(2, "Sajt")];
      this.toppings2 = [new Topping(3, "Szalámi"), new Topping(2, "Sajt")];
      this.toppings3 = [new Topping(4, "Paprika"), new Topping(2, "Sajt")];
      this.pizzas = [new Pizza(1, "Sonkas", 32, 1300, this.toppings1, "http://luckypizzeria.hu/product_image/rectangle_640/50.png"), new Pizza(1, "Szalamis", 32, 1300, this.toppings2, "http://luckypizzeria.hu/product_image/rectangle_640/24.png")];
    }
  
    ngOnInit() {
      
    }
}
