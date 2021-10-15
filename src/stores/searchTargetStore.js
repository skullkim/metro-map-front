import {observable} from "mobx";

const SearchTargetStore = observable({
  target: '',
  startStation: '',
  arriveStation: '',
  stopoverStation: '',
  stopoverSelected: false,
  errorMessage: '',

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