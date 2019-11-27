import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() drawer: any

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToUrl(url: string) {this.router.navigate([url])}
}
