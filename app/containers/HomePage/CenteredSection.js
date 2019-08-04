import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
  position: absolute;
  left: calc(50% - 375px);
  top: calc(50% - 130px);
  text-align: center;
`;

export default CenteredSection;
