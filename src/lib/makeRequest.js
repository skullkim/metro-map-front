import { PATH } from "./dataServerPath";

export const makePathData = ({stopoverSelected, startStation, stopoverStation, arriveStation}, {cost, distance, time}) => {
  return [
    {
      title: stopoverSelected ? '출발역/경유지/도착역' : '출발역/도착역',
      data: stopoverSelected ?
        `${startStation} -> ${stopoverStation} -> ${arriveStation}` :
        `${startStation} -> ${arriveStation}`,
      first: true,
    },
    {
      title: '요금 정보',
      data: cost,
      first: false,
    },
    {
      title: '거리 정보',
      data: distance,
      first: false,
    },
    {
      title: '소요 시간',
      data: time,
      first: false,
    }
  ]
}

export const makeReqUrl = ({stopoverSelected, target}) => {
  return stopoverSelected ?
    `${PATH.MIN_PATH_STOPOVER}${target}` :
    `${PATH.MIN_PATH}${target}`;
}

export const makeReqQuery = ({stopoverSelected, startStation, stopoverStation, arriveStation}) => {
  return stopoverSelected ? {
    startStation,
    stopoverStation,
    arriveStation,
  } : {
    startStation,
    arriveStation,
  };

}