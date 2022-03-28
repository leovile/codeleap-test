import styled from "styled-components";

export const Button = styled.button`
  min-width: 111px;
  min-height: 33px;
  margin-left: auto;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: 700;
  background-color: black;
  border: none;

  :disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
