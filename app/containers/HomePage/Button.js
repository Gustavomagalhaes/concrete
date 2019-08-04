import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 50px;
  -webkit-border-top-right-radius: 2px;
  -webkit-border-bottom-right-radius: 2px;
  -moz-border-radius-topright: 2px;
  -moz-border-radius-bottomright: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
  outline: none;
  border: none;
  background-color: #ac53f2;
  &:hover {
    cursor: pointer;
  }
  `;

export default Button;
