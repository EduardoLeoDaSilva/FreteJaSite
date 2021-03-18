import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerAnunciosRoutingModule } from './ver-anuncios-routing.module';
import { VerAnunciosComponent } from './ver-anuncios.component';
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
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [VerAnunciosComponent],
  imports: [
    CommonModule,
    VerAnunciosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class VerAnunciosModule { }
