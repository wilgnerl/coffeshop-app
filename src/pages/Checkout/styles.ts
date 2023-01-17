import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardsContainer = styled.form`
  display: flex;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CartContainer = styled.div`
  width: 28rem;

  h1 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.426rem;
  }
`;

export const CardCartContainer = styled.div`
  margin-top: 0.9375rem;
  background-color: ${props => props.theme["gray-200"]};
  padding: 2.5rem 2.5rem 2.5rem;
  border-radius: 6px 36px;

`;

export const ButtonCardCartContainer = styled.button`
  border: 0;
  cursor: pointer;
  padding: 0.75rem 7.34375rem;
  border-radius: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  width: 23rem;
  background-color: ${props => props.theme["yellow-500"]};
  color: ${props => props.theme["gray-100"]};
`;

export const BillingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1.5rem 0;
  gap: 0.75rem;

  div{
    display: flex;
    justify-content: space-between;
  }

  div:first-child, div:nth-child(2){
    span{
      font-size: 0.875rem;
      line-height: 1.1375rem;
      font-family: "Roboto";
      font-weight: 400;
    }
  }

  div:nth-child(3){
    span{
      font-size: 1.25rem;
      line-height: 1.1375rem;
      font-family: "Roboto";
      font-weight: 700;
    }
  }
`;