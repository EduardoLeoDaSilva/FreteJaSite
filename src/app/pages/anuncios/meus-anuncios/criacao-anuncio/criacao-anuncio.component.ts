import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './criacao-anuncio.component.html',
  styleUrls: ['./criacao-anuncio.component.css']
})
export class CriacaoAnuncioComponent implements OnInit {


  ELEMENT_DATA: any[] = [
    {tipo: 'RG',  numero: '998354132', status: 'check_circle'},
    {tipo: 'CNH',  numero: '998354132', status: 'pending'},
    {tipo: 'CPF',  numero: '998354132', status: 'highlight_off'},
    {tipo: 'Titulo Eleitor',  numero: '998354132', status: 'input'}
  ];


  displayedColumns: string[] = ['tipo', 'numero', 'status', 'arquivo'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
