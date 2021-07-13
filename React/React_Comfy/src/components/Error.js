import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = ({ msg = "" }) => {
  return (
    <section className="section-center section text-center">
      <h2>error loading products</h2>
      {msg && (
        <Wrapper>
          <h4>Redirecting back to home</h4>
          <Link to="/" className="btn">
            click here if you're not redirected
          </Link>
        </Wrapper>
      )}
    </section>
  );
};

const Wrapper = styled.main`
  padding-top: 1rem;
  color: var(--clr-primary-4);
`;

export default Error;
