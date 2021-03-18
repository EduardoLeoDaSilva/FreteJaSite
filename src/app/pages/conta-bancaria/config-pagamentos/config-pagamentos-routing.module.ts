import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigPagamentosComponent } from './config-pagamentos.component';

const routes: Routes = [{ path: '', component: ConfigPagamentosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigPagamentosRoutingModule { }
