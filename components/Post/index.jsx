import React, { useState } from "react";
import * as S from "./styles";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import api from "../../actions/api";
import useUsername from "../../hooks";
import Button from "../Button";
import Modal from "react-modal";

const Post = ({ title, usernameAPI, content, date, showButtons, id }) => {
  const { setPosts } = useUsername();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const deletePost = () => {
    api.delete(`/${id}/`).then((response) => {
      api.get().then((data) => {
        setPosts(data.data.results);
      });
    });
  };

  const editPost = () => {
    api
      .patch(`/${id}/`, { title: newTitle, content: newContent })
      .then((response) => {
        api.get().then((data) => {
          setPosts(data.data.results);
        });
      });
  };

  return (
    <S.Container>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={S.customStyles}
      >
        <S.EditWrapper>
          <S.Edit>Edit Item</S.Edit>
          <S.TitleLabel>Title</S.TitleLabel>
          <S.TitleInput
            value={newTitle}
            onInput={(e) => setNewTitle(e.target.value)}
          ></S.TitleInput>
          <S.ContentLabel>Content</S.ContentLabel>
          <S.ContentInput
            value={newContent}
            onInput={(e) => setNewContent(e.target.value)}
          ></S.ContentInput>
          <Button
            buttonText="SAVE"
            onClick={() => {
              editPost();
              setIsModalOpen(false);
            }}
          />
        </S.EditWrapper>
      </Modal>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        {showButtons && (
          <S.IconsWrapper>
            <S.DeleteIcon
              onClick={() => {
                if (confirm("Are you sure you want to delete this item?")) {
                  deletePost();
                }
                return;
              }}
            >
              <MdDeleteForever />
            </S.DeleteIcon>
            <S.EditIcon onClick={() => setIsModalOpen(true)}>
              <MdEdit />
            </S.EditIcon>
          </S.IconsWrapper>
        )}
      </S.Header>
      <S.Wrapper>
        <S.UsernameWrapper>
          <S.Username>@{usernameAPI}</S.Username>
          <S.Date>{date}</S.Date>
        </S.UsernameWrapper>
        <S.Content>{content}</S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Post;
