import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('about-contructor');
  }

  counter = 0;
  timer = setInterval(() => {
    this.counter++;
    console.log('interval', this.counter);
  }, 1000);

  // Anguar Component Lifecyle
  // Lifecyle methodlarına Hooks ismini veriyoruz.
  ngOnDestroy(): void {
    console.log('about-page domadan çıktı');
    clearInterval(this.timer);
  }

  ngOnInit(): void {
    console.log('about-page-doma girdi');
  }
}
