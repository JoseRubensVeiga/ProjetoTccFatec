import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() showMoreOptions: boolean = false;
  @Input() columns: string[];
  @Input() columnsDisplayed: string[];

  dataSource = [
    {
      startHour: "19:30",
      endHour: "19:30",
      subject: "Estrutura de Dados",
      teacher: "Roger"
    },
    {
      startHour: "19:30",
      endHour: "19:30",
      subject: "Estrutura de Dados",
      teacher: "Roger"
    },
    {
      startHour: "19:30",
      endHour: "19:30",
      subject: "Estrutura de Dados",
      teacher: "Roger"
    },
    {
      startHour: "19:30",
      endHour: "19:30",
      subject: "Estrutura de Dados",
      teacher: "Roger"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
