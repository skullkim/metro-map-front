import {useEffect, useState} from 'react';

import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';
import TokenApi from '../lib/customAxios';
import { ServerPath } from '../lib/dataPath';
import { getUserInfo } from '../lib/localStorage';

const Bookmark = () => {
  // eslint-disable-next-line no-unused-vars
  const [bookmark, setBookmark] = useState([]);
  const userInfo = getUserInfo();

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
        setBookmark(data);
      })
      .catch(err => err);
  }, []);

  return (
    <Wrapper>
      <PageTitle>즐겨찾기 목록</PageTitle>
    </Wrapper>
  );
};

export default Bookmark;