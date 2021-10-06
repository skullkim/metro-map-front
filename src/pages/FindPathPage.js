import {useObserver} from 'mobx-react';

import SubwayMap from '../components/map/SubwayMap';
import SearchResultModal from "../components/modal/SearchResultModal";
import SearchContainer from '../components/search/SearchContainer';
import indexStore from "../stores/indexStore";

const FindPathPage = () => {
  const {ModalOpenStore: openModal} = indexStore();

  return useObserver(() => (
    <>
      <SearchContainer />
      <SubwayMap />
      {openModal.searchResultModal && <SearchResultModal />}
    </>
  ));
};

export default FindPathPage;
