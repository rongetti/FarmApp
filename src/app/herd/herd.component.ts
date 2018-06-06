import { Component, OnInit, OnDestroy } from '@angular/core';

import { HerdService } from './herd.service';

@Component({
  templateUrl: './herd.component.html',
  styleUrls: ['./herd.component.css']
})
export class HerdComponent implements OnInit, OnDestroy {

  public selectedNo = 0;
  public showSearch = false;
  private selectedNo$;

  constructor(
    public herdService: HerdService
  ) { }

  ngOnInit() {
    this.herdService.selectedNo$.subscribe(number => this.selectedNo = number);
  }

  public toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  public searchInList(value) {
    this.herdService.searchInList(value);
  }

  ngOnDestroy() {
    this.selectedNo$.unsubscribe();
  }

}
