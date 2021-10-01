import {observable} from "mobx";

const SearchTargetStore = observable({
  target: '',
  from: '',
  to: '',

  selectTarget(target) {
    this.target = target;
  },

  setFrom(from) {
    this.from = from;
  },
  setTo(to) {
    this.to = to;
  }
});

export default SearchTargetStore;