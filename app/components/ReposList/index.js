import React from 'react';
import PropTypes from 'prop-types';

import RepoListItem from 'containers/RepoListItem';
import Wrapper from './Wrapper';
import List from 'components/List';
import UserNotFound from 'components/UserNotFound';
import LoadingIndicator from 'components/LoadingIndicator';

function ReposList({ loading, error, repos }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    return ( 
      <Wrapper>
        <UserNotFound>{`User not found :(`}</UserNotFound>
      </Wrapper>
    );
  }

  if (repos !== false) {
    return <List items={repos} component={RepoListItem} />;
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default ReposList;
