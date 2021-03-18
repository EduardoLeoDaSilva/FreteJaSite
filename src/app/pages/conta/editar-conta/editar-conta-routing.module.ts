import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarContaComponent } from './editar-conta.component';

const routes: Routes = [{ path: '', component: EditarContaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarContaRoutingModule { }
