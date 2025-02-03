import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarComponent } from './componentes/main/confirmar/confirmar.component';
import { FinalizarComponent } from './componentes/main/finalizar/finalizar.component';
import { FormComponent } from './componentes/main/form/form.component';
import { CadastrarComponent } from './componentes/main/cadastrar/cadastrar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrar',
    pathMatch: 'full'
  }, 
  {
    path: 'cadastrar',
    component: CadastrarComponent
  }, 
  {
    path: 'form',
    component: FormComponent
  }, 
  {
    path: 'confirmar',
    component: ConfirmarComponent
  }, 
  {
    path: 'finalizar',
    component: FinalizarComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
