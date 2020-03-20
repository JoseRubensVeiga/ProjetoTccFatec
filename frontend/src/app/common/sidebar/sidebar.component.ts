import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @ViewChild("drawer", { static: false }) drawer: any;

  menuGroups = [
    {
      title: "Aluno",
      items: [
        {
          icon: "view_compact",
          label: "Painel",
          url: "/home",
          active: false
        },
        {
          icon: "book",
          label: "Notas e faltas",
          url: "/score",
          active: false
        },
        {
          icon: "access_alarm",
          label: "Horário",
          url: "/schedule",
          active: false
        },
        {
          icon: "notifications",
          label: "Avisos",
          url: "/notifications",
          active: false
        }
      ]
    },
    {
      title: "Professor",
      items: [
        {
          icon: "view_compact",
          label: "Painel",
          active: false
        },
        {
          icon: "done",
          label: "Lançar notas",
          active: false
        },
        {
          icon: "access_alarm",
          label: "Configurar horários",
          active: false
        },
        {
          icon: "notifications",
          label: "Enviar avisos",
          active: false
        },
        {
          icon: "save",
          label: "Cadastrar Alunos",
          active: false
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.initActivatedItem();
  }

  onItemClick(item: any) {
    this.activeItem(item);
    this.toggleSidebar();
    this.router.navigate([`${item.url}`]);
  }

  toggleSidebar() {
    this.drawer.toggle();
  }

  activeItem(item: any) {
    this.menuGroups.forEach(group => {
      group.items.forEach(item => {
        item.active = false;
      });
    });
    item.active = true;
  }

  initActivatedItem() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(val => {
        let route = this.router.url;
        const uri = route.split("/")[1];

        this.menuGroups.forEach(group => {
          group.items.forEach(item => {
            if (item.url === `/${uri}`) {
              this.activeItem(item);
            }
          });
        });
      });
  }
}
