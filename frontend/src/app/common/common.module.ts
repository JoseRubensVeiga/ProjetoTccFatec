import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatSidenavModule } from "@angular/material/sidenav";

import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [NavbarComponent, SidebarComponent, FooterComponent]
})
export class CommonComponentsModule {}
