import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  visible: boolean = false;
  items!: MenuItem[];
  constructor() {
    // this.items = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-fw pi-home',
    //     routerLink: '/'
    //   },
    //   {
    //     label: 'Dashboard',
    //     icon: 'pi pi-fw pi-chart-line',
    //     routerLink: '/dashboard'
    //   },
    //   {
    //     label: 'Histórico de Vendas',
    //     icon: 'pi pi-fw pi-calendar',
    //     routerLink: '/sales-history'
    //   },
    //   {
    //     label: 'Vendas por Categorias',
    //     icon: 'pi pi-fw pi-tags',
    //     routerLink: '/sales-by-category'
    //   },
    //   {
    //     label: 'Produtos mais Vendidos',
    //     icon: 'pi pi-fw pi-shopping-cart',
    //     routerLink: '/top-products'
    //   }
    // ];
  }

  ngOnInit(): void {
  this.items = [
      {
          separator: true
      },
      {
          label: 'Documents',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-plus',
                  routerLink: '⌘+N'
              },
              {
                  label: 'Search',
                  icon: 'pi pi-search',
                  routerLink: '⌘+S'
              }
          ]
      },
      {
          label: 'Profile',
          items: [
              {
                  label: 'Settings',
                  icon: 'pi pi-cog',
                  routerLink: '⌘+O'
              },
              {
                  label: 'Messages',
                  icon: 'pi pi-inbox',
                  badge: '2'
              },
              {
                  label: 'Logout',
                  icon: 'pi pi-sign-out',
                  routerLink: '⌘+Q'
              }
          ]
      },
      {
          separator: true
      }
  ];
}

  // ngOnInit(): void {
  //   this.items = [
  //     {
  //       label: 'Home',
  //       icon: 'pi pi-fw pi-home',
  //       routerLink: '/'
  //     },
  //     {
  //       label: 'Dashboard',
  //       icon: 'pi pi-fw pi-chart-line',
  //       routerLink: '/dashboard'
  //     },
  //     {
  //       label: 'Histórico de Vendas',
  //       icon: 'pi pi-fw pi-calendar',
  //       routerLink: '/sales-history'
  //     },
  //     {
  //       label: 'Vendas por Categorias',
  //       icon: 'pi pi-fw pi-tags',
  //       routerLink: '/sales-by-category'
  //     },
  //     {
  //       label: 'Produtos mais Vendidos',
  //       icon: 'pi pi-fw pi-shopping-cart',
  //       routerLink: '/top-products'
  //     }
  //   ];
  // }

}
