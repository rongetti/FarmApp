import { Component } from '@angular/core';
import { SidenavService } from '../../sidenav.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private sidenavService: SidenavService
  ) { }

  type = 'doughnut';
  data = {
    datasets: [
      {
        data: [5, 8, 12, 42],
        backgroundColor: ['lightblue', 'red', 'darkgreen']
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: true
  };

  public openSidenav() {
    this.sidenavService.open().then(() => { });
  }

}
