import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: #cccccc;
`;

export const PostsWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: black;
  color: white;
  font-size: 22px;
  font-weight: 700;
  padding: 0 37px;
`;

export const Posts = styled.div`
  width: 100%;
  height: 100%;
  padding: 44px 37px;
`;

export const CreatePost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 349px;
  border: 1px solid #999999;
  padding: 23px 30px;
  margin-bottom: 35px;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 34px;
`;

export const TitleLabel = styled.p`
  margin-bottom: 13px;
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  margin-bottom: 19px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #777777;
  padding: 10px;
`;

export const ContentLabel = styled.p`
  margin-bottom: 13px;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 74px;
  margin-bottom: 35px;
  resize: none;
  outline: none;
  border-radius: 4px;
  border: 1px solid #777777;
  padding: 10px;
`;
