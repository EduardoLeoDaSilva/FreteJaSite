import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarContaRoutingModule } from './editar-conta-routing.module';
import { EditarContaComponent } from './editar-conta.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [EditarContaComponent],
  imports: [
    CommonModule,
    EditarContaRoutingModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class EditarContaModule { }
