import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer', { static: false }) drawer: any
  private currentUser: any

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this
      .authenticationService
      .currentUser
      .subscribe(user => this.currentUser = user)
    this.authenticationService.getLoggedInUser()
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  navigateToUrl(url: string): void {
    this.drawer.toggle()
    this.router.navigate([url])
  }

  logout() {
    this.drawer.toggle()
    this.authenticationService.logout()
    this.authenticationService.getLoggedInUser()
  }
}
