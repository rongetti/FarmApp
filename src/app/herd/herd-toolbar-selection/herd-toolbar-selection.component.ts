import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SidenavService } from '../../sidenav.service';
import { HerdService } from '../herd.service';

@Component({
  selector: 'app-herd-toolbar-selection',
  templateUrl: './herd-toolbar-selection.component.html',
  styleUrls: ['./herd-toolbar-selection.component.css']
})
export class HerdToolbarSelectionComponent {

  @Input() selectedNo: number;
  @Input() showSearch: boolean;
  @Output() showSearchChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private sidenavService: SidenavService,
    private herdService: HerdService
  ) { }

  public openSidenav() {
    this.sidenavService.open().then(() => { });
  }

  public selectAll() {
    this.herdService.listSelectAll();
  }

  public deselectAll() {
    this.herdService.listDeselectAll();
  }

  public toggleSearch() {
    this.showSearchChangeEvent.emit(!this.showSearch);
  }

}
