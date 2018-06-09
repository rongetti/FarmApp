import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { HerdService } from './herd.service';
import { ANIMATE_IN_OUT } from '../const/animations';

@Component({
  templateUrl: './herd.component.html',
  styleUrls: ['./herd.component.css'],
  animations: ANIMATE_IN_OUT
})
export class HerdComponent implements OnInit {

  public selectedNo = 0;
  public showSearch = false;
  private selectedNo$;
  public activeTab: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public herdService: HerdService
  ) { }

  ngOnInit() {
    this.herdService.selectedNo$.subscribe(number => this.selectedNo = number);
    this.activeTab = this.route.snapshot.firstChild.url[0].path;
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), switchMap(() =>
      (this.route.firstChild && this.route.firstChild.url) || of({})
    )).subscribe(params => {
      this.activeTab = params[0].path;
      this.showSearch = false;
    });
  }

  public toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  public searchInList(value) {
    this.herdService.searchInList(value);
  }

}
