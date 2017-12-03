import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { UserItemViewComponent } from '../../components/user-item-view/user-item-view.component';
import { LoginViewComponent } from '../../components/login-view/login-view.component';
import { RegistrationViewComponent } from '../../components/registration-view/registration-view.component';
import { PizzaListViewComponent } from '../../components/pizza-list-view/pizza-list-view.component';

const routes: Routes = [
  { path: 'user/:id', component: UserItemViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'order', component: PizzaListViewComponent },
  { path: 'registration', component: RegistrationViewComponent }
];

@NgModule({
  imports: [
    NgRouterModule.forRoot(routes)
  ],
  exports: [
    NgRouterModule
  ],
  declarations: []
})
export class RouterModule { }
