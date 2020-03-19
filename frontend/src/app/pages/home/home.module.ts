import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

import { HomeComponent } from "./home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MiniCardComponent } from "./mini-card/mini-card.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [HomeComponent, MiniCardComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    ChartsModule,

    SharedModule
  ]
})
export class HomeModule {}
