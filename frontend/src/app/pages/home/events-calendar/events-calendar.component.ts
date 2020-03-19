import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import PTBR from "@fullcalendar/core/locales/pt-BR";

@Component({
  selector: "app-events-calendar",
  templateUrl: "./events-calendar.component.html",
  styleUrls: ["./events-calendar.component.scss"]
})
export class EventsCalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];

  locales = [PTBR];

  constructor() {}

  ngOnInit() {}
}
