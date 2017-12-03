import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from './modules/router/router.module';

import { AppComponent } from './app.component';
import { UserItemViewComponent } from './components/user-item-view/user-item-view.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { RegistrationViewComponent } from './components/registration-view/registration-view.component';
import { PizzaListViewComponent } from './components/pizza-list-view/pizza-list-view.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemViewComponent,
    LoginViewComponent,
    RegistrationViewComponent,
    PizzaListViewComponent,
    PizzaComponent,
    CartViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
