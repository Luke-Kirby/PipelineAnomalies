import { Component, OnInit } from '@angular/core';
import testData from '../../../assets/data/db.json';
import { ReturnedAnomaly } from '../../anomalyFunctions/anomalyFunctions';
import { deepestAnomaly } from '../../anomalyFunctions/anomalyFunctions';

@Component({
  selector: 'app-milling',
  templateUrl: './milling.component.html',
  styleUrls: ['./milling.component.scss'],
})
export class MillingComponent implements OnInit {
  anomaly: any = 'milling';

  constructor() {}

  numberOfAnomalies: number = testData.anomalies.milling.length;
  deepestAnomaly: ReturnedAnomaly = deepestAnomaly(testData.anomalies.milling);

  ngOnInit(): void {}
}
