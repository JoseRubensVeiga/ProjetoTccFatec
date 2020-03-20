import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { MyScoreComponent } from "./pages/my-score/my-score.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { UserSettingsComponent } from "./pages/user-settings/user-settings.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { RegisterScoresComponent } from "./pages/register-scores/register-scores.component";
import { RegisterSchedulesComponent } from "./pages/register-schedules/register-schedules.component";
import { SendNotificationsComponent } from "./pages/send-notifications/send-notifications.component";
import { RegisterStudentsComponent } from "./pages/register-students/register-students.component";

const routes: Routes = [
  // students
  { path: "home", component: HomeComponent },
  { path: "score", component: MyScoreComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "notifications", component: NotificationsComponent },

  // teacher
  { path: "register-scores", component: RegisterScoresComponent },
  { path: "register-schedules", component: RegisterSchedulesComponent },
  { path: "register-students", component: RegisterStudentsComponent },
  { path: "send-notifications", component: SendNotificationsComponent },

  // common
  { path: "me", component: UserSettingsComponent },
  { path: "settings", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
