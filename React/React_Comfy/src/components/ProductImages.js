import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`img-container ${
                image.url === main.url ? "active" : ""
              }`}
            >
              <img
                src={image.url}
                alt={image.filename}
                onClick={() => setMain(images[index])}
                className="image-hover"
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
      transition: var(--transition);
    }
  }

  .active {
    box-shadow: 0px 0px 0px 3px var(--clr-primary-6);
    filter: brightness(40%);
  }

  .image-hover:hover {
    height: 120px;
  }

  .img-container {
    height: 100px;
    overflow: hidden;
    border-radius: var(--radius);
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
    .image-hover:hover {
      height: 60px;
    }

    .img-container {
      height: 50px;
      overflow: hidden;
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }

    .image-hover:hover {
      height: 90px;
    }

    .img-container {
      height: 75px;
      overflow: hidden;
    }
  }
`;

export default ProductImages;
