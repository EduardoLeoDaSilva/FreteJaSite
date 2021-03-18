import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigPagamentosRoutingModule } from './config-pagamentos-routing.module';
import { ConfigPagamentosComponent } from './config-pagamentos.component';
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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [ConfigPagamentosComponent],
  imports: [
    CommonModule,
    ConfigPagamentosRoutingModule,
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
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class ConfigPagamentosModule { }
