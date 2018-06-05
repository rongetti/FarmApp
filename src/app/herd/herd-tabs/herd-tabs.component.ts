import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HerdService } from '../herd.service';


@Component({
  selector: 'app-herd-tabs',
  templateUrl: './herd-tabs.component.html',
  styleUrls: ['./herd-tabs.component.css']
})
export class HerdTabsComponent implements OnInit, AfterViewInit {

  public activeTab: string;

  public tabs = this.herdService.animalTabs;

  constructor(
    public herdService: HerdService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.activeTab = params['tab'] );
  }

  ngAfterViewInit() {
    this.scrollTabsIntoView();
  }

  private scrollTabsIntoView() {
    let el = document.getElementsByClassName('mat-tab-label-active')[0];
    el.scrollIntoView(false);
  }

  public updateSettings() {
    this.herdService.updateSettings();
  }

}
