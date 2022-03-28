import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 220px;
  background-color: white;
  border: 1px solid #cccccc;
  padding: 28px 32px;

  @media screen and (max-width: 550px) {
    width: 90%;
    height: 280px;
  }
`;

export const Welcome = styled.p`
  color: black;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 13px;
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #777777;
  padding: 10px;
  margin-bottom: 20px;
`;
