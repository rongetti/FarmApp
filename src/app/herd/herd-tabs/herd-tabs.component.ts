import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { HerdService } from '../herd.service';


@Component({
  selector: 'app-herd-tabs',
  templateUrl: './herd-tabs.component.html',
  styleUrls: ['./herd-tabs.component.css']
})
export class HerdTabsComponent implements OnInit, AfterViewInit {

  public activeTab: string;

  constructor(
    public herdService: HerdService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public tabs = this.herdService.animalTabs;

  ngOnInit() {
    this.activeTab = this.route.snapshot.firstChild.url[0].path;
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), switchMap(() =>
      (this.route.firstChild && this.route.firstChild.url) || of({})
    )).subscribe(params => {
      this.activeTab = params[0].path;
    });
  }

  ngAfterViewInit() {
    this.scrollTabsIntoView();
  }

  private scrollTabsIntoView() {
    let el = document.getElementsByClassName('mat-tab-label-active')[0];
    el.scrollIntoView(false);
  }

  public updateSettings() {
    this.herdService.updateTabSettings('animalTabs', this.tabs);
  }

}
