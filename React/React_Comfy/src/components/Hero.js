import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <div className="small-screen-bg"></div>
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          reiciendis voluptate natus rem quo debitis et culpa nostrum quae
          harum.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="img1" className="main-img" />
        <img src={heroBcg2} alt="img2" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  position: relative;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  @media (max-width: 992px) {
    h1 {
      color: var(--clr-primary-9);
    }
    .content p {
      color: var(--clr-grey-9);
    }

    .btn {
      background-color: var(--clr-primary-7);
      color: var(--clr-grey-1);
    }

    .btn:hover {
      background-color: var(--clr-primary-4);
      color: var(--clr-grey-9);
    }

    .small-screen-bg {
      position: absolute;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      min-height: 300px;
      height: 60%;
      width: 100vw;
      z-index: -1;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${heroBcg});
    }
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 750px) {
    .content {
      padding-left: 3rem;
    }
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .small-screen-bg {
      display: none;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }

  @media (min-width: 1300px) {
    .content {
      padding-left: 0;
    }
  }
`;

export default Hero;
