import { Component, OnInit } from '@angular/core';
import testData from '../../../assets/data/db.json';
import { ReturnedAnomaly } from '../../anomalyFunctions/anomalyFunctions';
import { deepestAnomaly } from '../../anomalyFunctions/anomalyFunctions';

//to make an interface for the json import

@Component({
  selector: 'app-corrosion',
  templateUrl: './corrosion.component.html',
  styleUrls: ['./corrosion.component.scss'],
})
export class CorrosionComponent implements OnInit {
  constructor() {}
  numberOfAnomalies: number = testData.anomalies.corrosion.length;
  deepestAnomaly: ReturnedAnomaly = deepestAnomaly(
    testData.anomalies.corrosion
  );

  ngOnInit(): void {}
}
