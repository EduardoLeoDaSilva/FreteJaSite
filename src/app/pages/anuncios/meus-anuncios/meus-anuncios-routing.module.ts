import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriacaoAnuncioComponent } from './criacao-anuncio/criacao-anuncio.component';

import { MeusAnunciosComponent } from './meus-anuncios.component';

const routes: Routes = [
  { path: '', component: MeusAnunciosComponent },
  { path: 'criacao', component: CriacaoAnuncioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusAnunciosRoutingModule { }
