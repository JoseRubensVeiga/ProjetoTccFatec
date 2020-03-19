import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-password-recovery",
  templateUrl: "./password-recovery.component.html",
  styleUrls: ["./password-recovery.component.scss"]
})
export class PasswordRecoveryComponent implements OnInit {
  email: string;
  recoveryEmailSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  /**
   * Returns to login
   *
   * @memberof PasswordRecoveryComponent
   */
  goToLogin() {
    this.router.navigate(["./../login"], {
      relativeTo: this.activatedRoute
    });
  }

  onSubmit() {
    this.recoveryEmailSubscription = this.authService
      .recovery(this.email)
      .subscribe(
        response => {
          console.log({ response });
        },
        error => {
          console.log({ error });
        }
      );
  }

  ngOnDestroy() {
    this.recoveryEmailSubscription.unsubscribe();
  }
}
