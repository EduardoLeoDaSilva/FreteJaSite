import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/models/tablesTeste/modelTable';

@Component({
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {


  //Mudar dps, data source das datatable
  ELEMENT_DATA: any[] = [
    {nome: 'Eduardo', email: 'edu@gmail.com', celular: '998354132', empresa: 'Teste'}
  ];


  displayedColumns: string[] = ['nome', 'email', 'celular', 'empresa'];
  dataSource = this.ELEMENT_DATA;


  //expand options ja aparecer aberto
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
