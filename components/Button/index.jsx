import React, { useState } from "react";
import * as S from "./styles";

const Button = ({ disable, onClick, buttonText }) => {
  return (
    <S.Button disabled={disable} onClick={onClick}>
      {buttonText}
    </S.Button>
  );
};

export default Button;
