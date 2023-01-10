import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  background-color: ${props => props.theme["gray-200"]};
  display: flex;
  align-items: center;
  border-radius: 6px 36px;

  img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  

  h1{
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
    margin-bottom: 0.5rem;
    margin-right: 1.25rem;
    margin-left: 1.25rem;
  }

  p{
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1375rem;
    color: ${props => props.theme["gray-600"]};
    text-align: center;
    margin-right: 1.25rem;
    margin-left: 1.25rem;
    margin-bottom: 2.0625rem;
  }
`;

export const DescriptionTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  margin: 0 auto 1.25rem;
  gap: 0.25rem;
  height: 1.5625rem;

  span{
    
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.8125rem;
    text-transform: uppercase;
    background-color: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }

`;

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 3rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  
  > span {
    color: ${(props) => props.theme["gray-700"]};
    margin-top: 0.25rem;
    font-size: 1rem;
  }

  strong {
    font-size: 1.5rem;
    font-family: "Baloo 2";
    margin-right: 0.5rem;
    color: ${(props) => props.theme["gray-700"]};
  }

`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 2.375rem;
  flex-wrap: wrap;
  background-color: ${props => props.theme["gray-400"]};
  border-radius: 6px;

  button{
    border: none;
    background-color: transparent;
    width: 1.5rem;
    height: 2.375rem;
    text-align: center;
    cursor: pointer;
    color: ${props => props.theme["purple-500"]};
  }

  button:focus{
    box-shadow: none;
  }

  button:hover{
    color: ${props => props.theme["purple-700"]};
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
  }
`;

export const CartButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  border: 0;
  background-color: ${props => props.theme["purple-700"]};
  color: ${props => props.theme["gray-100"]};
  border-radius: 6px;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme["purple-500"]};
  }
`;