import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocoesComponent } from './promocoes.component';

const routes: Routes = [{ path: '', component: PromocoesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocoesRoutingModule { }
