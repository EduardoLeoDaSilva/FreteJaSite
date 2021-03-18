import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesComponent } from './detalhes-propostas/detalhes/detalhes.component';

import { PropostasComponent } from './propostas.component';

const routes: Routes = [
  { path: '', component: PropostasComponent },
  { path: 'detalhes', component: DetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropostasRoutingModule { }
