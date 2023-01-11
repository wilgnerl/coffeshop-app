import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;


`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  justify-content: center;
`;


export const FormContainer = styled.div`
  width: 40rem;
  
  span {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.426rem;
  }
`;

export const CardFormContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};
  margin-top: 0.9375rem;
  margin-bottom: 0.75rem;

  header{
    display: flex;
    width: 100%;
    padding: 2.5rem 2.5rem 2rem;
    gap: 0.5rem;

    div:first-child{
      color: ${props => props.theme["yellow-700"]};
      padding-bottom: 1.375rem;
      border-bottom: 100px 0 red;
      
    }

    div:nth-child(2){
      gap: 0.125rem;
      h1{
        font-family: "Roboto";
        color: ${props => props.theme["gray-800"]};
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 400;
      }

      span{
        font-family: "Roboto";
        font-size: 0.875rem;
        line-height: 1.1375rem;
        font-weight: 400;
      }
    }

    
  }

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2.5rem 2.5rem;
    gap: 1rem;

    input {
      height: 2.625rem;
      border: 1px solid ${props => props.theme["gray-400"]};
      background-color: ${props => props.theme["gray-300"]};
      color: ${props => props.theme["gray-700"]};
      padding: 0.75rem;
      font-size: 0.875rem;
      border-radius: 0.25rem;
    }

    input:focus{
      border: 0;
      box-shadow: 0 0 0 1px ${props => props.theme["yellow-500"]};
    }

    .cep, .numero, .bairro{
      width: 12.5rem;
    }

    .numero, .bairro{
      margin-right: 0.75rem;
    }

    .complemento{
      width: 21.75rem;
    }

    .cidade{
      width: 17.25rem;
      margin-right: 0.75rem;
    }

    .uf{
      width: 3.75rem;
    }  
  }

`;

export const PaymentMethodContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};

  header{
    display: flex;
    width: 100%;
    padding: 2.5rem 2.5rem 2rem;
    gap: 0.5rem;

    div:first-child{
      color: ${props => props.theme["purple-700"]};
      padding-bottom: 1.375rem;
      border-bottom: 100px 0 red;
      
    }

    div:nth-child(2){
      gap: 0.125rem;

      h1{
        font-family: "Roboto";
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 400;
        color: ${props => props.theme["gray-800"]};

      }

      span{
        font-family: "Roboto";
        font-size: 0.875rem;
        line-height: 1.1375rem;
        font-weight: 400;

      }
    }
  }
`;

export const PaymentMethodButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 2.5rem 2.5rem;
  gap: 0.75rem;
  
  button{
    flex: 1;
    display: flex;
    border: 0;
    background-color: ${props => props.theme["gray-400"]};
    padding: 1rem;
    gap: 0.75rem;
    font-size: 0.75rem;
    line-height: 1.2rem;
    text-transform: uppercase;
    border-radius: 6px;
    font-weight: 400;
    color: ${props => props.theme["gray-700"]};
    

    div:first-child{
      color: ${props => props.theme["purple-500"]};
    }
  }

  button:hover{
    background-color: ${props => props.theme["gray-500"]};
  }

  button:focus{
    background-color: ${props => props.theme["purple-300"]};
    box-shadow: 0 0 0 1px ${props => props.theme["purple-500"]};
  }
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