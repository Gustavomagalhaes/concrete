/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Description from 'components/Description';
import StarNumber from 'components/StarNumber';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';
import StarWrapper from './StarWrapper';
import starIcon from 'images/star-icon.svg';

export function RepoListItem(props) {
  const { item } = props;
  let nameprefix = '';

  // If the repository is owned by a different person than we got the data for
  // it's a fork and we should show the name of the owner
  if (item.owner.login !== props.currentUser) {
    nameprefix = `${item.owner.login}/`;
  }

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <RepoLink href={item.html_url} target="_blank">
        {item.name}
      </RepoLink>
      <Description>
        {item.description}
      </Description>
      <StarWrapper>
        <img src={starIcon} width='25px'/>
        <StarNumber>
          <FormattedNumber value={item.stargazers_count} />
        </StarNumber>
      </StarWrapper>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);
