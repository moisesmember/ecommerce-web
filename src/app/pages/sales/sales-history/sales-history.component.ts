import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.css']
})
export class SalesHistoryComponent implements OnInit {
  salesHistory: any[];
  constructor() { 
    this.salesHistory = [
      { date: '01/01/2023', time: '10:30', product: 'Smartphone Samsung Galaxy A03', client: 'Rafael Castro', seller: 'Fernando Oliveira', note: 'Entrega na casa do cliente' },
      { date: '01/01/2023', time: '11:00', product: 'Smart TV LG 32LQ621C', client: 'Laura Oliveira', seller: 'Renato da Silva', note: 'Observação' },
      { date: '01/01/2023', time: '12:00', product: 'Tablet Samsung Galaxy Tab', client: 'Beatriz Silva', seller: 'Renato da Silva', note: 'Observação' },
      { date: '01/01/2023', time: '14:30', product: 'Celular iPhone 11 5G', client: 'Luis Felipe', seller: 'Ricardo Santos', note: 'Retorno de balcão' },
    ];
  }

  ngOnInit(): void {
    // this.salesHistory = [
    //   { date: '01/01/2023', time: '10:30', product: 'Smartphone Samsung Galaxy A03', client: 'Rafael Castro', seller: 'Fernando Oliveira', note: 'Entrega na casa do cliente' },
    //   { date: '01/01/2023', time: '11:00', product: 'Smart TV LG 32LQ621C', client: 'Laura Oliveira', seller: 'Renato da Silva', note: 'Observação' },
    //   { date: '01/01/2023', time: '12:00', product: 'Tablet Samsung Galaxy Tab', client: 'Beatriz Silva', seller: 'Renato da Silva', note: 'Observação' },
    //   { date: '01/01/2023', time: '14:30', product: 'Celular iPhone 11 5G', client: 'Luis Felipe', seller: 'Ricardo Santos', note: 'Retorno de balcão' },
    // ];
  }

}
