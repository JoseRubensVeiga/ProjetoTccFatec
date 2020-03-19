import { Component, OnInit, Input, ViewChild } from "@angular/core";

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
          active: true
        },
        {
          icon: "book",
          label: "Notas e faltas",
          active: false
        },
        {
          icon: "access_alarm",
          label: "Horário",
          active: false
        },
        {
          icon: "notifications",
          label: "Avisos",
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

  constructor() {}

  ngOnInit() {}

  onItemClick(item: any) {
    this.menuGroups.forEach(group => {
      group.items.forEach(item => {
        item.active = false;
      });
    });
    item.active = true;
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.drawer.toggle();
  }
}
