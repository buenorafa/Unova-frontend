import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import {StoreComponent} from "./store/store.component";
import {AddProductComponent} from "./add-product/add-product.component";

export const appRoutes: Routes = [
  // { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Redireciona para login ao iniciar
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'store', component: StoreComponent },
  { path: 'add-product', component:AddProductComponent},

   { path: '**', redirectTo: 'homepage' }, // Redireciona para login se a rota não existir
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
