import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer', { static: false }) drawer: any

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  navigateToUrl(url: string): void {
    this.drawer.toggle()
    this.router.navigate([url])
  }
}
