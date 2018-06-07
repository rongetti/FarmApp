import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit, OnDestroy {

  @Input() hideButton: boolean;
  @Input() placeholder: string;
  @ViewChild('searchField') searchField: ElementRef;
  @Output() showSearchChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchListEvent: EventEmitter<string> = new EventEmitter<string>();

  public list: string;

  constructor(  ) { }

  ngOnInit() {

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
