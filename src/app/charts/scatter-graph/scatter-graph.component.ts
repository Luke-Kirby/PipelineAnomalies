import { Component, OnInit, Input } from '@angular/core';
import testData from '../../../assets/data/db.json';
import {
  AnomalyType,
  chartData,
  scatterData,
} from 'src/app/anomalyFunctions/anomalyFunctions';

@Component({
  selector: 'app-scatter-graph',
  templateUrl: './scatter-graph.component.html',
  styleUrls: ['./scatter-graph.component.scss'],
})
export class ScatterGraphComponent implements OnInit {
  @Input() anomalyType: AnomalyType = 'corrosion';

  ngOnInit(): void {
    //console.log(this.anomalyType);
  }
  options: any = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        type: 'scatter',
        data: scatterData(testData.anomalies[this.anomalyType]),
      },
    ],
  };

  constructor() {}
}
