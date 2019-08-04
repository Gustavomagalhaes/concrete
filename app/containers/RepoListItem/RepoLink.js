import styled from 'styled-components';
import NormalA from 'components/A';

const RepoLink = styled(NormalA)`
  color: #ac53f2;
  font-family: Raleway;
  font-size: 35px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;
  &:hover {
    color: #ac53f2;
    cursor: pointer;
  }
`;

export default RepoLink;
