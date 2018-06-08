import { Component, Input } from '@angular/core';
import { SidenavService } from '../../sidenav.service';

@Component({
  selector: 'app-common-toolbar',
  templateUrl: './common-toolbar.component.html',
  styleUrls: ['./common-toolbar.component.css']
})
export class CommonToolbarComponent {

  @Input() title: string;

  constructor(
    private sidenavService: SidenavService
  ) { }

  public openSidenav() {
    this.sidenavService.open();
  }

}
