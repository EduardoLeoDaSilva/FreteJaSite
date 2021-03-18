import { ModalPagamentoComponent } from './../../../../components/modals/modal-pagamento/modal-pagamento.component';
import { ModalEnviarPropostaComponent } from './../../../../components/modals/modal-enviar-proposta/modal-enviar-proposta.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-ver-anuncios',
  templateUrl: './ver-anuncios.component.html',
  styleUrls: ['./ver-anuncios.component.css']
})
export class VerAnunciosComponent implements OnInit {


  ELEMENT_DATA: any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  ELEMENT_DATA2: any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
  ];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  linhas = this.ELEMENT_DATA;
  anuncios = this.ELEMENT_DATA2;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirModalProposta(): void{
    console.log(`Dialog result`);

    const dialogRef = this.dialog.open(ModalPagamentoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
