import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Wrapper from './Wrapper';
import LabelWrapper from './LabelWrapper';
import Label from './Label';
import Name from './Name';
import UserName from './UserName';
import starIcon from 'images/star-icon.svg';
import repositoriesIcon from 'images/repositorie-icon.svg';
import locationIcon from 'images/location-icon.svg';
import organizationIcon from 'images/organization-icon.svg';
import followersIcon from 'images/followers-icon.svg';
import Img from './Img';

function ReposUser({ user }) {
  if (user !== false) {
    return (
      <Wrapper>
        <Avatar src={user.avatar_url}/>
        <Name>{user.name}</Name>
        <UserName>{user.login}</UserName>

        <LabelWrapper>
          <Img src={organizationIcon}/>
          <Label>{user.company || 'N/A'}</Label>
        </LabelWrapper>

        <LabelWrapper>
          <Img src={locationIcon}/>
          <Label>{user.location}</Label>
        </LabelWrapper>

        <LabelWrapper>
          <Img src={starIcon}/>
          <Label>{user.public_gists}</Label>
        </LabelWrapper>

        <LabelWrapper>
          <Img src={repositoriesIcon}/>
          <Label>{user.public_repos}</Label>
        </LabelWrapper>

        <LabelWrapper>
          <Img src={followersIcon}/>
          <Label>{user.followers}</Label>
        </LabelWrapper>
      </Wrapper>
    );
  }

  return null;
}

ReposUser.propTypes = {
  user: PropTypes.any,
};

export default ReposUser;
