import React, { useState } from "react";
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io'
import flex from "../Common/flex";

function AddBtn() {

  return (
    <>
      <CircleButton>
        <IoIosAddCircle />
      </CircleButton>
    </>
  );
}

const CircleButton = styled.button`
${flex({ direction: "column" })}
  background: var(--primary);
  width: 30px;
  height: 30px;
  font-size: 100px;
  border-radius: 50%;
  margin: 0px;
  padding: 0px;
  
  align-items: center;
  cursor: pointer;
`;

export default AddBtn;