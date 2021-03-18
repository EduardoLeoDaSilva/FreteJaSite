import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAnunciosComponent } from './ver-anuncios.component';

const routes: Routes = [{ path: '', component: VerAnunciosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerAnunciosRoutingModule { }
