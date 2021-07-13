import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import cart_reducer from "../reducers/cart_reducer";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout"></PageHero>
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Cart is empty</h2>
            <Link to="/products" className="btn">
              Shop Products
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .empty {
    margin-top: -4rem;
    text-align: center;
    h2 {
      margin-bottom: 2rem;
    }
  }
`;
export default CheckoutPage;
