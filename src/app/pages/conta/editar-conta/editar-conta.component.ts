import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.component.html',
  styleUrls: ['./editar-conta.component.css']
})
export class EditarContaComponent implements OnInit {


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
