import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { FullCalendarModule } from "@fullcalendar/angular";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { HomeComponent } from "./home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MiniCardComponent } from "./mini-card/mini-card.component";
import { ChartsModule } from "ng2-charts";
import { EventsCalendarComponent } from "./events-calendar/events-calendar.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { MatButtonModule } from "@angular/material/button";
import { MyScoreComponent } from './my-score/my-score.component';

@NgModule({
  declarations: [
    HomeComponent,
    MiniCardComponent,
    EventsCalendarComponent,
    TodoListComponent,
    MyScoreComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ChartsModule,
    FullCalendarModule,
    DragDropModule,

    SharedModule
  ]
})
export class HomeModule {}
