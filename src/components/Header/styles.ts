import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-100"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  img{
    width: 5.3rem;
    height: 2.5rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme["purple-300"]};
  color: ${props => props.theme["purple-700"]};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  gap: 0.25rem;
  line-height: 130%;
`;

export const CartContainer = styled.div`
  background-color: ${props => props.theme["yellow-300"]};
  color: ${props => props.theme["yellow-700"]};
  padding: 0.5rem;
  border-radius: 6px;

`;
