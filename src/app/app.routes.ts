import { HomepageComponent } from './homepage/homepage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import {StoreComponent} from "./store/store.component";
import {AddProductComponent} from "./add-product/add-product.component";
import { UserInformationComponent } from './profile/user-information/user-information.component';
import { OrdersComponent } from './profile/orders/orders.component';
import { MyProductsComponent } from './profile/my-products/my-products.component';
import { MyCartComponent } from './my-cart/my-cart.component';

export const appRoutes: Routes = [
  // { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Redireciona para login ao iniciar
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'checkout/:total', component: CheckoutComponent },
  { path: 'store', component: StoreComponent },
  { path: 'add-product', component:AddProductComponent},
  {path:'my-cart', component: MyCartComponent},
  { path: 'profile', component: ProfileComponent,
    children:[
  { path: 'my-information', component: UserInformationComponent },
  { path: 'my-orders', component: OrdersComponent },
  { path: 'my-products', component: MyProductsComponent },
  { path: '**', redirectTo: 'my-information'}
    ],
  },
   { path: '**', redirectTo: 'homepage' }, // Redireciona para login se a rota não existir
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
