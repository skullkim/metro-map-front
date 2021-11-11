import { observer } from 'mobx-react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';
import PathTable from '../components/user/PathTable';
import TokenApi from '../lib/customAxios';
import { ServerPath } from '../lib/dataPath';
import { getUserInfo } from '../lib/localStorage';
import indexStore from '../stores/indexStore';

const BookmarkBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const userInfo = getUserInfo();
  const {SearchTargetStore, ModalOpenStore} = indexStore();

  useEffect(() => {
    if(!userInfo) return;

    TokenApi({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.getUserBookMark}/${userInfo.userId}`,
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      }
    })
      .then(({data: {data}}) => {
        setBookmarks(data);
      })
      .catch(err => err);
  }, []);

  const handleClick = ({target: {className}}, pathInfo) => {
    if(className !== 'bookmark' && pathInfo) {
      SearchTargetStore.setTargetInfo(pathInfo);
      ModalOpenStore.setSearchResultModal(true);
    }
  }

  return (
    <Wrapper>
      <BookmarkBox>
        <PageTitle>즐겨찾기 목록</PageTitle>
        <PathTable pathLists={bookmarks} handleClick={handleClick} />
      </BookmarkBox>
    </Wrapper>
  );
};

export default observer(Bookmark);