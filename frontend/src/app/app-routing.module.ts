import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { MyScoreComponent } from "./pages/my-score/my-score.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "score", component: MyScoreComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "notifications", component: NotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
