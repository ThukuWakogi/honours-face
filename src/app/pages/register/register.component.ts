import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'
import { first } from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPassword = false
  sendingRequest = false
  submitted = false
  registerForm: FormGroup

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      }
    )
  }

  private get f(): any {return this.registerForm.controls}

  checkPasswordMatch(): boolean {
    return true
    ? this.submitted && this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value
    : false
  }

  onSubmit() {
    this.submitted = true
    console.log('submitting')
    console.log(this.registerForm)

    if (this.registerForm.invalid) return

    if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) return

    this.sendingRequest = true
    this
      .authenticationService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {this.router.navigate([''])},
        error => {
          console.log({error})
          this.sendingRequest = false
        }
      )
  }
}
