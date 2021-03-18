import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusAnunciosRoutingModule } from './meus-anuncios-routing.module';
import { MeusAnunciosComponent } from './meus-anuncios.component';
import { CriacaoAnuncioComponent } from './criacao-anuncio/criacao-anuncio.component';
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
  declarations: [MeusAnunciosComponent, CriacaoAnuncioComponent],
  imports: [
    CommonModule,
    MeusAnunciosRoutingModule,
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
    MatSelectModule
  ]
})
export class MeusAnunciosModule { }
