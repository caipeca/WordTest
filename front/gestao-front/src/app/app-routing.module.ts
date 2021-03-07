import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CriarComponent } from './criar/criar.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path:'utilizadores', component:ListaComponent},
  {path:'criar', component:CriarComponent},
  {path:'', redirectTo:'utilizadores', pathMatch:'full'},
  {path:'atualizar/:id', component:AtualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
