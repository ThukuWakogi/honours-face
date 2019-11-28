import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() drawer: any
  currentUser: any

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this
      .authenticationService
      .currentUser
      .subscribe(user => this.currentUser = user)
  }

  ngOnInit() {
  }

  navigateToUrl(url: string) {this.router.navigate([url])}
}
