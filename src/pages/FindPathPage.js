import SubwayMap from '../components/map/SubwayMap';
import SearchResultModal from "../components/modal/SearchResultModal";
import SearchContainer from '../components/search/SearchContainer';

const FindPathPage = () => {
  return (
    <>
      <SearchContainer />
      <SubwayMap />
      <SearchResultModal />
    </>
  );
};

export default FindPathPage;
