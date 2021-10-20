const StationKr = {
  START_STATION: '출발점',
  STOPOVER_STATION: '경유지',
  ARRIVE_STATION: '도착지',
}
const PathTarget = {
  TIME: 'time',
  DISTANCE: 'distance',
  COST: 'cost',
};
Object.freeze(StationKr);
Object.freeze(PathTarget);

const checkEmpty = (station, stationName) => {
  if (!station) {
    return `${stationName}이(가) 존재하지 않습니다`;
  }
  return '';
};

const involveChar = (station, stationName) => {
  const numRegx = /^[0-9]*$/;
  if (station.length >= 5 || !station.match(numRegx)) {
    return `존재하지 않는 ${stationName} 입니다`;
  }
  return '';

};

const checkPathTarget = (target) => {
  return !Object.values(PathTarget).includes(target)
    ? '길찾기 대상이 잘못되었습니다'
    : '';
};

const isSameStation = (
  station1,
  station2,
  stationName1,
  stationName2
) => {
  return station1 === station2 && station1 && station2
    ? `${stationName1} 와 ${stationName2}가 같을 수 없습니다`
    : '';
};


const validateTarget = ({target, startStation, arriveStation, stopoverStation, stopoverSelected}) => {
  const existPathTarget = checkPathTarget(target);

  const emptyStation =
    checkEmpty(startStation, StationKr.START_STATION) ||
    checkEmpty(arriveStation, StationKr.ARRIVE_STATION) ||
    (stopoverSelected ? checkEmpty(stopoverStation, StationKr.STOPOVER_STATION) : '');

  const sameStation =
    isSameStation(
      startStation,
      arriveStation,
      StationKr.START_STATION,
      StationKr.ARRIVE_STATION
    ) || (
      stopoverSelected ?
        isSameStation(
          startStation,
          stopoverStation,
          StationKr.START_STATION,
          StationKr.STOPOVER_STATION,
        ) : ''
    ) || (
      stopoverSelected ? 
        isSameStation(
          stopoverStation,
          arriveStation,
          StationKr.STOPOVER_STATION,
          StationKr.ARRIVE_STATION,
        ) : ''
    );

  const incorrectStationName =
    involveChar(startStation, StationKr.START_STATION) ||
    involveChar(arriveStation, StationKr.ARRIVE_STATION) ||
    (stopoverSelected ? involveChar(stopoverStation, StationKr.STOPOVER_STATION) : '');

  return existPathTarget || emptyStation || sameStation || incorrectStationName;
}

export default validateTarget;