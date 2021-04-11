
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'sb-charts-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart-area.component.html',
  styleUrls: ['chart-area.component.scss'],
})
export class ChartAreaComponent implements OnInit, AfterViewInit {
  @ViewChild('myAreaChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
      this.chart = new Chart(this.myAreaChart.nativeElement, {
          type: 'line',
          data: {
              labels: ['6/4','7/4','8/4','9/4','10/4','11/4'
              ],
              datasets: [
                  {
                      label: 'T°Suolo',
                      lineTension: 0.3,
                      // backgroundColor: '#rgba(255,255,255,0.5)',
                      borderColor: '#FF8900',
                      pointRadius: 5,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgba(2,117,216,1)',
                      pointHitRadius: 50,
                      pointBorderWidth: 2,
                      data: [
                        5,
                        3,
                        6,
                        5,
                        8,
                        8
                      ],
                  },
                  {
                    label: 'T°Atmosferica',
                    borderColor: '#FF5e00',
                    // backgroundColor: '#rgba(0,0,0,0.5)',
                    data: [
                      9,
                      8,
                      9,
                      9,
                      11,
                      10
                    ]
                  }
              ],
          },
          options: {
              // stacked: false,
              scales: {
                  xAxes: [
                      {
                          time: {
                              unit: 'day',
                          },
                          gridLines: {
                              display: false,
                          },
                          ticks: {
                              maxTicksLimit: 7,
                          },
                      },
                  ],
                  yAxes: [
                      {
                          ticks: {
                              min: 0,
                              max: 15,
                              // maxTicksLimit: 5,
                          },
                          // gridLines: {
                          //     color: 'rgba(0, 0, 0, .125)',
                          // },
                      },
                  ],
              },
              legend: {
                  display: true,
              },
          },
      });
  }
}
