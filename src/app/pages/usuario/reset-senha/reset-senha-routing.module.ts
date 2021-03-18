import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetSenhaComponent } from './reset-senha.component';

const routes: Routes = [{ path: '', component: ResetSenhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetSenhaRoutingModule { }
