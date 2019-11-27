import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false
  showPassword = false
  sendingRequest = false
  loginForm: FormGroup
  returnUrl: string
  error: any
  success: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || ''
  }

  private f(): any {return this.loginForm.controls}

  onSubmit() {
    this.submitted = true
    this.error = null
    this.success = null

    if (this.loginForm.invalid) return

    this.sendingRequest = true
    this
      .authenticationService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {this.router.navigate([this.returnUrl])},
        error => {
          console.log({error})
          this.sendingRequest = false
        }
      )
  }
}
