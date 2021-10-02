import {observable} from "mobx";

const SearchTargetStore = observable({
  target: '',
  startStation: '',
  arriveStation: '',
  stopoverStation: '',
  stopoverSelected: false,

  selectTarget(target) {
    this.target = target;
  },

  setStartStation(startStation) {
    this.startStation = startStation;
  },

  setArriveState(arriveStation) {
    this.arriveStation = arriveStation;
  },

  setStopoverStation(stopoverStation) {
    this.stopoverStation = stopoverStation;
  },

  setStopoverSelected() {
    this.stopoverSelected = !this.stopoverSelected;
  }

});

export default SearchTargetStore;