import React, { useState } from "react";
import { useRouter } from "next/router";

import * as S from "./styles";
import Button from "../../components/Button";

import useUsername from "../../hooks";
import { useEffect } from "react/cjs/react.production.min";

const Login = () => {
  const { username, setUsername } = useUsername();

  if (typeof window !== "undefined") {
    localStorage.setItem("username", username);
  }

  const router = useRouter();

  return (
    <S.Container>
      <S.WelcomeWrapper>
        <S.Welcome>Welcome to CodeLeap network!</S.Welcome>
        <S.Text>Please enter your username</S.Text>
        <S.Input
          placeholder="John Doe"
          value={username}
          onInput={(e) => setUsername(e.target.value)}
        />
        <Button
          onClick={() => router.push("/Posts")}
          disable={!username}
          buttonText="ENTER"
        />
      </S.WelcomeWrapper>
    </S.Container>
  );
};

export default Login;
