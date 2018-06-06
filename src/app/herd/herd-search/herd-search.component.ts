import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-herd-search',
  templateUrl: './herd-search.component.html',
  styleUrls: ['./herd-search.component.css']
})
export class HerdSearchComponent implements OnInit, OnDestroy {

  @ViewChild('searchField') searchField: ElementRef;
  @Output() showSearchChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchListEvent: EventEmitter<string> = new EventEmitter<string>();

  public list: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.firstChild.params.subscribe(params => {
      this.list = params['tab'];
    });
  }

  public closeSearch() {
    this.showSearchChangeEvent.emit(false);
  }

  public search(value) {
    this.searchListEvent.emit(value.trim().toLowerCase());
  }

  public clearSearch() {
    this.searchField.nativeElement.value = '';
    this.search('');
  }

  ngOnDestroy() {
    this.clearSearch();
  }

}
