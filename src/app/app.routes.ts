import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Redireciona para login ao iniciar
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: 'sign-in' }, // Redireciona para login se a rota não existir
];
