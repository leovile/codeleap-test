import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import Post from "../../components/Post";
import api from "../../actions/api";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

import useUsername from "../../hooks";

const Posts = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const { username, setUsername, posts, setPosts } = useUsername();

  if (typeof window !== "undefined") {
    setUsername(localStorage.getItem("username"));
  }

  useEffect(() => {
    api.get().then((response) => {
      setPosts(response.data.results);
    });
  }, [setPosts]);

  const createPost = () => {
    api.post("", { username, title, content });
    api.get().then((response) => {
      setPosts(response.data.results);
    });
  };

  const minutesAgo = (date) => {
    return differenceInMinutes(new Date(), new Date(date));
  };

  const hoursAgo = (date) => {
    return differenceInHours(new Date(), new Date(date));
  };

  const daysAgo = (date) => {
    return differenceInDays(new Date(), new Date(date));
  };

  const verifyDateUnit = (date) => {
    return minutesAgo(date) < 60
      ? `${minutesAgo(date)} minute(s) ago`
      : hoursAgo(date) > 24
      ? `${daysAgo(date)} day(s) ago`
      : `${hoursAgo(date)} hour(s) ago`;
  };

  return (
    <S.Container>
      <S.PostsWrapper>
        <S.Header>CodeLeap Network</S.Header>
        <S.Posts>
          <S.CreatePost>
            <S.Title>What’s on your mind?</S.Title>
            <S.TitleLabel>Title</S.TitleLabel>
            <S.Input
              placeholder="Hello world"
              value={title}
              onInput={(e) => setTitle(e.target.value)}
            ></S.Input>
            <S.ContentLabel>Content</S.ContentLabel>
            <S.Content
              placeholder="Content here"
              value={content}
              onInput={(e) => setContent(e.target.value)}
            ></S.Content>
            <Button
              buttonText={"CREATE"}
              disable={!title || !content}
              onClick={() => createPost()}
            />
          </S.CreatePost>
          {posts &&
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  id={post.id}
                  content={post.content}
                  date={verifyDateUnit(post.created_datetime)}
                  usernameAPI={post.username}
                  title={post.title}
                  showButtons={post.username === username}
                />
              );
            })}
        </S.Posts>
      </S.PostsWrapper>
    </S.Container>
  );
};

export default Posts;
