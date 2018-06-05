import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SidenavService } from '../../sidenav.service';
import { HerdService } from '../herd.service';

@Component({
  selector: 'app-herd-toolbar',
  templateUrl: './herd-toolbar.component.html',
  styleUrls: ['./herd-toolbar.component.css']
})
export class HerdToolbarComponent {

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

  public toggleSearch() {
    this.showSearchChangeEvent.emit(!this.showSearch);
  }

}
