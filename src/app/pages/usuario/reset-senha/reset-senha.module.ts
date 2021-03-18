import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetSenhaRoutingModule } from './reset-senha-routing.module';
import { ResetSenhaComponent } from './reset-senha.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [ResetSenhaComponent],
  imports: [
    CommonModule,
    ResetSenhaRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule

  ]
})
export class ResetSenhaModule { }
