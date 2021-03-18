import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-pagamentos',
  templateUrl: './config-pagamentos.component.html',
  styleUrls: ['./config-pagamentos.component.css']
})
export class ConfigPagamentosComponent implements OnInit {


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
