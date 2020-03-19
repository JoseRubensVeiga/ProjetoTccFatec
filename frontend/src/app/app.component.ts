import { AuthService } from "./auth/auth.service";
import { Observable } from "rxjs";
import { Component, ViewChild } from "@angular/core";
import { SidebarComponent } from "./common/sidebar/sidebar.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("sidebar", { static: false }) SidebarComponent: SidebarComponent;
  isLoggedIn: Observable<boolean>;
  showSidebar = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  toggleSidebar() {
    this.SidebarComponent.toggleSidebar();
  }
}
