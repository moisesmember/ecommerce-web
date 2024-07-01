import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit(): void {
    this.data = {
      labels: [
        'Smartphone Samsung Galaxy A03',
        'Smart TV LG 32LQ621C',
        'Tablet Samsung Galaxy Tab',
        'Fritadeira Easy Fry 3.2 L',
        'Samsung Galaxy A14 5G',
        'Aquecedor elétrico Britânia AB1100N branco 127V',
        'Headset over-ear gamer JBL Quantum 100 - jbl: preto',
        'Fone de Ouvido Bluetooth 5.0',
        'Galaxy Book2 Intel Core i5',
        'Ar condicionado Philco Split Inverter'
      ],
      datasets: [
        {
          label: 'Top Produtos',
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FFEB3B', '#FF7043', '#AB47BC', '#26C6DA', '#FF5252', '#EC407A', '#D4E157'],
          data: [45, 37, 60, 70, 46, 33, 45, 30, 20, 10]
        }
      ]
    };
  }
}
