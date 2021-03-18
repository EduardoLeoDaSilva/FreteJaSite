import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsqueciSenhaRoutingModule } from './esqueci-senha-routing.module';
import { EsqueciSenhaComponent } from './esqueci-senha.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [EsqueciSenhaComponent],
  imports: [
    CommonModule,
    EsqueciSenhaRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule

  ]
})
export class EsqueciSenhaModule { }
