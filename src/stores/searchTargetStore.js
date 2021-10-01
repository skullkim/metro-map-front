import {observable} from "mobx";

const SearchTargetStore = observable({
  target: '',
  from: '',
  to: '',
  stopover: '',
  stopoverSelected: false,

  selectTarget(target) {
    this.target = target;
  },

  setFrom(from) {
    this.from = from;
  },

  setTo(to) {
    this.to = to;
  },

  setStopoverSelected() {
    this.stopoverSelected = !this.stopoverSelected;
  }

});

export default SearchTargetStore;