import { Routes } from '@angular/router';

//export const routes: Routes = [];
//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Inicio } from './componentes/inicio/inicio';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'inicio', component: Inicio }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
//export class AppRoutingModule {}

