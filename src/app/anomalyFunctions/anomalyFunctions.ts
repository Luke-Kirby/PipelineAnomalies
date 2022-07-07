import testData from '../../assets/data/db.json';

//change to anomaly
export interface Anomaly {
  id: number;
  distance: number;
  depth: number;
  orientation: string;
  surfaceLocation: string;
}

export type AnomalyType = keyof typeof testData['anomalies'];

//FUNCTION 1: find the deepest anomaly

export interface ReturnedAnomaly {
  distance: number;
  depth: number;
}

export function deepestAnomaly(anomalyArr: Anomaly[]): ReturnedAnomaly {
  let returnedAnomaly: ReturnedAnomaly = {
    distance: 0,
    depth: 0,
  };

  if (anomalyArr.length === 1) {
    returnedAnomaly.distance = anomalyArr[0].distance;
    returnedAnomaly.depth = anomalyArr[0].depth;
  } else {
    for (let i = 0; i < anomalyArr.length; i++) {
      if (anomalyArr[i].depth >= returnedAnomaly.depth) {
        returnedAnomaly.distance = anomalyArr[i].distance;
        returnedAnomaly.depth = anomalyArr[i].depth;
      }
    }
  }

  return returnedAnomaly;
}

//FUNCTION 2: return data as scattergraph array

export function scatterData(anomalyArr: Anomaly[]) {
  let scatterArr: number[][] = [];

  for (let i = 0; i < anomalyArr.length; i++) {
    scatterArr.push([anomalyArr[i].distance, anomalyArr[i].depth]);
  }

  return scatterArr;
}

//FUNCTION 3: return chart data

export function chartData(anomaly: string): any {
  if (anomaly === 'corrosion') {
    return testData.anomalies.corrosion;
  } else if (anomaly === 'milling') {
    return testData.anomalies.milling;
  } else if (anomaly === 'girthWeld') {
    return testData.anomalies.milling;
  } else {
    return '';
  }
}
