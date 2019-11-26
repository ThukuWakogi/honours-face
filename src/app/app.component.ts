import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer', { static: false }) drawer: ElementRef

  ngOnInit() {
    console.log(this.drawer)
  }

  ngAfterViewInit() {
    console.log(this.drawer)
  }
}
