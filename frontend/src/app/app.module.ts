// Angular modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./providers/token.interceptor";

// Angular Material Modules
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

// Personal Modules
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./pages/home/home.module";
import { SharedModule } from "./shared/shared.module";

import { CommonComponentsModule } from "./common/common.module";

// Personal Components
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular Modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Angular Material Modules
    MatInputModule,
    MatButtonModule,

    // Personal Modules
    AuthModule,
    HomeModule,
    CommonComponentsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
