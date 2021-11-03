import {observable} from "mobx";

const SearchTargetStore = observable({
  target: '',
  startStation: '',
  arriveStation: '',
  stopoverStation: '',
  stopoverSelected: false,
  errorMessage: '',

  setTargetInfo(pathInfo) {
    this.setTargetInfo(pathInfo.target);
    this.setArriveState(pathInfo.from);
    this.setArriveState(pathInfo.to);
    if(pathInfo.stopover) {
      this.setStopoverSelected();
      this.stopoverStation(pathInfo.stopover);
    }
  },

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
  },

  setErrorMessage(errorMessage) {
    this.errorMessage = errorMessage;
  }

});

export default SearchTargetStore;