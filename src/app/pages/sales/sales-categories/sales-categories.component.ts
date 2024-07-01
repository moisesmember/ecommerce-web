import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-categories',
  templateUrl: './sales-categories.component.html',
  styleUrls: ['./sales-categories.component.css']
})
export class SalesCategoriesComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Eletrônicos', 'Livros e Mídia', 'Casa e Decoração', 'Brinquedos e Jogos'],
      datasets: [
        {
          data: [100, 50, 40, 30],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733']
        }]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    };
  }
}
