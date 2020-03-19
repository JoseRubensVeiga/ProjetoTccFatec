import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { MyScoreComponent } from "./pages/home/my-score/my-score.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "score", component: MyScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
