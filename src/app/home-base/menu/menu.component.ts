import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

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
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'Category',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/auth/error']
                    },
                    {
                        label: 'Variety',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/auth/access']
                    },
                    {
                        label: 'Supplier',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/auth/access']
                    }
                ] },
                  { label: 'Orders', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
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
