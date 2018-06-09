import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';
import * as moment from 'moment';

import { HerdService } from '../herd/herd.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('animalsChart') animalsChart: ChartComponent;
  @ViewChild('farmChart') farmChart: ChartComponent;

  public totalAnimals = 0;
  public dueToCalf = 0;
  public inWithdrawal = 0;
  public nearThirtyMo = 0;

  public animalsOptions = {
    type: 'doughnut',
    data : {
      datasets: [
        {
          data: [],
          backgroundColor: ['grey', 'lightblue', 'red', 'darkgreen']
        }
      ],
      labels: ['Rest', 'Due to calf', 'In withdrawal', 'Near 30 mo.']
    },
    options: {
      legend: false,
      responsive: true,
      maintainAspectRatio: true
    }
  };

  public farmOptions = {
    type: 'doughnut',
    data : {
      datasets: [
        {
          data: [],
          backgroundColor: ['grey', 'lightblue', 'red', 'darkgreen']
        }
      ]
    },
    options: {
      legend: false,
      responsive: true,
      maintainAspectRatio: true
    }
  };

  constructor(
    public herdService: HerdService
  ) {  }

  ngOnInit() {
    this.getData();
  }

  private getData() {

    this.herdService.getAnimals().then(data => {

      this.totalAnimals = data.docs.length;
      for (let animal of data.docs) {
        if (animal['inCalf']) {
          ++this.dueToCalf;
        }
        if (animal.hasOwnProperty('inWithdrawal') && animal['inWithdrawal']) {
          ++this.inWithdrawal;
        }
        let today = moment();
        let dob = moment(animal['dob'], 'DD/MM/YYYY');
        if (today.diff(dob, 'days') < 870) {
          ++this.nearThirtyMo;
        }
      }
      let remainingAnimals = this.totalAnimals - this.dueToCalf - this.inWithdrawal - this.nearThirtyMo;
      this.animalsOptions.data.datasets[0].data = [remainingAnimals, this.dueToCalf, this.inWithdrawal, this.nearThirtyMo];
      this.animalsChart.chart.update();

      this.farmOptions.data.datasets[0].data = [25, 10, 6, 3];
      this.farmChart.chart.update();

    });
  }

}
