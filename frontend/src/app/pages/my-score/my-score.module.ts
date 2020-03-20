import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

import { MyScoreComponent } from "./my-score.component";

@NgModule({
  declarations: [MyScoreComponent],
  imports: [CommonModule, MatTableModule, MatIconModule]
})
export class MyScoreModule {}
