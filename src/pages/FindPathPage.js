import SubwayMap from '../components/map/SubwayMap';
import { ModalBox } from "../components/modal/CommonModal";
import Portal from "../components/modal/Portal";
import SearchContainer from '../components/search/SearchContainer';

const FindPathPage = () => {
  return (
    <>
      <SearchContainer />
      <SubwayMap />
      <Portal>
        <ModalBox />
      </Portal>
    </>
  );
};

export default FindPathPage;
