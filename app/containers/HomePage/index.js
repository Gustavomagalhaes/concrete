/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { history } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectUser,
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import ReposList from 'components/ReposList';
import ReposUser from 'components/ReposUser';
import CenteredSection from './CenteredSection';
import ContentSection from './ContentSection';
import Form from './Form';
import Input from './Input';
import Github from './../../components/Github';
import Search from './../../components/Search';
import searchIcon from 'images/search-icon.svg';
import Button from './Button';
import Header from './Header';
import LogoWrapper from './LogoWrapper';
import Icon from './Icon';
import messages from './messages';
import { loadRepos, loadUser } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  user,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm(history);
  }, []);

  const userProps = {
    loading,
    error,
    user,
  };

  const reposListProps = {
    loading,
    error,
    repos,
  };

  if (!reposListProps.repos && !reposListProps.error && !reposListProps.loading) {
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="A React.js concrete challenge homepage"
          />
        </Helmet>
        <CenteredSection>
          <div>
            <Github size={60}>
              <FormattedMessage {...messages.github} />
            </Github>
            <Search size={60}>
              <FormattedMessage {...messages.search} />
            </Search>
          </div>
          <Form onSubmit={onSubmitForm}>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={onChangeUsername}
            />
            <Button><Icon src={searchIcon}/></Button>
          </Form>
        </CenteredSection>
      </article>
    );
  } else if (reposListProps.repos.length > 0 && !reposListProps.error) {
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="A React.js concrete challenge homepage"
          />
        </Helmet>
        <ContentSection>
          <Header>
            <LogoWrapper href="/">
              <Github size={40}>
                <FormattedMessage {...messages.github} />
              </Github>
              <Search size={40}>
                <FormattedMessage {...messages.search} />
              </Search>
            </LogoWrapper>
            <Form onSubmit={onSubmitForm}>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={onChangeUsername}
              />
              <Button><Icon src={searchIcon}/></Button>
            </Form>
          </Header>
          <div style={{display: 'flex'}}>
            <ReposUser {...userProps} />
            <ReposList {...reposListProps} />
          </div>
        </ContentSection>
      </article>
    );
  } else if (!!reposListProps.error) {
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="A React.js concrete challenge homepage"
          />
        </Helmet>
        <ContentSection>
          <Header>
            <LogoWrapper href="/">
              <Github size={40}>
                <FormattedMessage {...messages.github} />
              </Github>
              <Search size={40}>
                <FormattedMessage {...messages.search} />
              </Search>
            </LogoWrapper>
            <Form onSubmit={onSubmitForm}>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={onChangeUsername}
              />
              <Button><Icon src={searchIcon}/></Button>
            </Form>
          </Header>
          <ReposList {...reposListProps} />
        </ContentSection>
      </article>
    );
  } else if (reposListProps.loading) {
    return null;
  }

}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  user: makeSelectUser(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
      dispatch(loadUser());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
