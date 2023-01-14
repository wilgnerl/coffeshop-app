import styled from "styled-components";

export const CardItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme["gray-400"]};
  
  img{
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
  

  span{
    display: flex;
    font-size: 1rem;
    font-family: "Roboto";
    line-height: 1.3rem;
    margin: 0;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 10.6875rem;

  span{
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  height: 2rem;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.2rem;
  padding: 0.5rem;
  border: 0;
  background-color: ${props => props.theme["gray-400"]};
  color: ${props => props.theme["gray-700"]};
  border-radius: 6px;
  gap: 0.25rem;
  width: 5.6875rem;
  height: 2rem;

  div{
    display: flex;
    align-items: center;
    color: ${props => props.theme["purple-500"]};

  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 4.5rem;
  background-color: ${props => props.theme["gray-400"]};
  border-radius: 6px;
  padding: 0.5rem;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    margin: 0;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme["purple-500"]};
    border: 0;
    width: 1.5rem;
    background-color: transparent;
    cursor: pointer;
  }

  button:hover{
    color: ${props => props.theme["purple-700"]};
  }
`;
