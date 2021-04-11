import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'sb-charts-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit, AfterViewInit {
  @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor() {}
  ngOnInit(){}

  ngAfterViewInit() {
      this.chart = new Chart(this.myBarChart.nativeElement, {
          type: 'bar',
          data: {
              labels: ['6/4','7/4','8/4','9/4','10/4','11/4'],
          datasets: [
                  {
                      label: 'Revenue',
                      backgroundColor: 'rgba(2,117,216,1)',
                      borderColor: 'rgba(2,117,216,1)',
                      data: [4, 0, 0, 0, 5, 5],
                  },
              ],
          },
          options: {
              scales: {
                  xAxes: [
                      {
                          time: {
                              unit: 'month',
                          },
                          gridLines: {
                              display: false,
                          },
                          ticks: {
                              maxTicksLimit: 6,
                          },
                      },
                  ],
                  yAxes: [
                      {
                          ticks: {
                              min: 0,
                              max: 5,
                            //   maxTicksLimit: 5,
                          },
                          gridLines: {
                              display: true,
                          },
                      },
                  ],
              },
              legend: {
                  display: false,
              },
          },
      });
  }

}
