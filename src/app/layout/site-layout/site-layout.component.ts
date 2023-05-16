import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit(): void {
    // component ilk load olurken yapılacak olan işlemleri yazıyoruz.
    // component doma girerken apidan load edilecek olan verileri burada tanımlarız
    this.items = [
      {
        label: 'Hakkımızda',
        icon: 'pi pi-fw pi-about',
        routerLink: ['/about'],
        items: [
          {
            label: 'Vizyonumuz',
          },
          {
            label: 'Misyonumuz',
            url: '#',
          },
        ],
      },
      {
        label: 'Anasayfa',
        routerLink: ['/'],
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'İletişim',
        routerLink: ['/contact'],
        icon: 'pi pi-fw pi-phone',
      },
      {
        label: 'Google',
        url: 'https://www.google.com',
        icon: 'pi pi-fw pi-google',
      },
    ];
  }
}
