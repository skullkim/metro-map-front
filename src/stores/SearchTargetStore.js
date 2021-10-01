import {observable} from "mobx";

const SearchTargetStore = observable({
  target: '',

  selectTarget(target) {
    this.target = target;
  }
});

export default SearchTargetStore;