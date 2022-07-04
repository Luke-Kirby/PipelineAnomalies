export interface AnomalyType {
  id: number;
  distance: number;
  depth: number;
  orientation: string;
  surfaceLocation: string;
}

//FUNCTION 1: find the deepest anomaly

export interface ReturnedAnomaly {
  distance: number;
  depth: number;
}

export function deepestAnomaly(anomalyArr: AnomalyType[]): ReturnedAnomaly {
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

//END FUNCTION 1: find the deepest anomaly
