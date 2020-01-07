import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs';
import { MediaService } from './../media-service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  smallResolution: Observable<boolean>;
  isLoggedIn: Observable<boolean>;

  menuItems: MenuItem[] = [
    {icon: 'home', label: 'Lorem', url: '/lorem'},
    {icon: 'exclamation-circle', label: 'Ipsum', url: '/ipsum'},
    {icon: 'bicycle', label: 'Sic dol', url: '/sic'},
    {icon: 'biohazard', label: 'Dolor a', url: '/dolor'},
    {icon: 'bolt', label: 'Met as', url: '/amet'},
    {icon: 'book', label: 'Adipsc', url: '/vini'},
    {
      icon: 'calendar-alt',
      label: 'Scing Lo',
      url: '/home',
      childrens: [
        {icon: 'home', label: 'Lorem', url: '/home'},
        {icon: 'home', label: 'Lorem', url: '/home'},
        {icon: 'home', label: 'Lorem', url: '/home'},
        {icon: 'home', label: 'Lorem', url: '/home'},
      ]
    },
  ];

  constructor(
    private mediaService: MediaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.smallResolution = this.mediaService.isActive('small');

  }

  selectItem(index: number) {

    if(this.menuItems[index].selected) {
      this.menuItems[index].selected = false;
      return;
    }
    this.menuItems.forEach(item => item.selected = false);
    this.menuItems[index].selected = true;
  }
}

export class MenuItem {
  icon: string;
  label: string;
  url: string;
  selected?: boolean;
  childrens?: MenuItem[];
}
