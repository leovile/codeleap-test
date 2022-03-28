import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #999999;
  margin-bottom: 45px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  padding: 0 30px;
  font-size: 22px;
  font-weight: 700;
`;

export const UsernameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Username = styled.p`
  color: #777777;
  font-size: 18px;
  font-weight: 700;
`;

export const Date = styled.p`
  color: #777777;
  font-size: 18px;
  font-weight: 400;
`;

export const Content = styled.p``;

export const HeaderTitle = styled.p``;

export const DeleteIcon = styled.div`
  cursor: pointer;
`;

export const EditIcon = styled.div`
  cursor: pointer;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const customStyles = {
  content: {
    display: "flex",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Edit = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 34px;
`;

export const TitleLabel = styled.p``;

export const TitleInput = styled.input`
  width: 100%;
  height: 28px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #777777;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ContentLabel = styled.p``;

export const ContentInput = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid #777777;
  padding: 10px;
  margin-bottom: 20px;
  resize: none;
`;
