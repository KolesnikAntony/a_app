import React from 'react';
import MainEmpty from './main-empty';
import MainList from './main-list/main-list';

const MainBody = () => {
  return (
    <Choose>
      <When condition={false}>
        <MainEmpty />
      </When>
      <Otherwise>
        <MainList />
      </Otherwise>
    </Choose>
  );
};

export default MainBody;
