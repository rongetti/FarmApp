import { Component, OnInit } from '@angular/core';

import { ANIMATE_SPLASH_LOGO, ANIMATE_SPLASH_LOADING } from '../const/animations';

@Component({
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  animations: [ANIMATE_SPLASH_LOGO, ANIMATE_SPLASH_LOADING]
})
export class SplashComponent implements OnInit {

  constructor(  ) { }

  ngOnInit() {

  }

}
