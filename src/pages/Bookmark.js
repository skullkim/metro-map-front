import { observer } from 'mobx-react';
import {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';
import PathTable from '../components/user/PathTable';
import TokenApi from '../lib/customAxios';
import { getDeleteUserBookMarkUrl, ServerPath } from '../lib/dataPath';
import { getUserInfo } from '../lib/localStorage';
import indexStore from '../stores/indexStore';

const BookmarkBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkDeleted, setBookmarkDeleted] = useState(false);
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
  }, [bookmarkDeleted]);

  const handleClick = useCallback(({target: {className}}, pathInfo) => {
    if(className !== 'bookmark' && pathInfo) {
      SearchTargetStore.setTargetInfo(pathInfo);
      ModalOpenStore.setSearchResultModal(true);
    }
    else {
      TokenApi({
        method: 'DELETE',
        url: getDeleteUserBookMarkUrl(pathInfo.id, userInfo.userId),
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
        data: {
          pathInfo
        }
      })
        .then(() => {
          setBookmarkDeleted(!bookmarkDeleted);
        })
        .catch(err => err);
    }
  }, [bookmarkDeleted]);

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