import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
      this.model = [
          {
              label: 'Home',
              items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                  { label: 'Reviews', icon: 'pi pi-fw pi-circle', routerLink: ['/'] }
              ]
          },
          {
              label: 'Shop',
              items: [
                  { label: 'Products', icon: 'pi pi-fw pi-shopping-cart', items: [
                    {
                        label: 'All Products',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/products']
                    },
                    {
                        label: 'Category',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/category']
                    },
                    {
                        label: 'Variety',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/variety']
                    },
                    {
                        label: 'Supplier',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/supplier']
                    }
                ] },
                  { label: 'Orders', icon: 'pi pi-fw pi-check-square', routerLink: ['orders'] },
                  { label: 'Stock', icon: 'pi pi-fw pi-check-square', 
                  items: [
                    {
                        label: 'List of Werehouse',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['stock/list-werehouse']
                    },
                    {
                        label: 'List of Products',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['stock/list-product']
                    },
                    {
                        label: 'List of Packages',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['stock/list-package']
                    },
                    {
                        label: 'List of Stock',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['stock/list-stock']
                    }
                    ,
                    {
                        label: 'List of Categories',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['stock/list-category']
                    }
                ]
                },
                  { label: 'Shipping', icon: 'pi pi-fw pi-truck', routerLink: ['/uikit/floatlabel'] },
                  { label: 'Billing', icon: 'pi pi-fw pi-dollar', routerLink: ['/uikit/invalidstate'] }
              ]
          },
          {
            label: 'Users',
            items: [
                { label: 'Admin', icon: 'pi pi-fw pi-user', routerLink: ['/auth/access'] },
                { label: 'Delivery person', icon: 'pi pi-fw pi-users', routerLink: ['/auth/access'] }
            ]
        }
      ];
  }
}
