import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper>
      <button className="amount-btn" type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h3 className="amount">{amount}</h3>
      <button className="amount-btn" type="button" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`;

export default AmountButtons;
