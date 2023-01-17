import styled from "styled-components";
import backgroundImg from "../../assets/Background.svg";

export const HomeContainer = styled.div`
`;

export const IntroContainer = styled.div`
  background-image: url(${backgroundImg});
  height: 34rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  
  img {
    height: 22.5rem;
    width: 29.75rem;
    margin-top: 5.75rem;
    margin-left: 3.5rem;
  }
`;

export const TextContainer = styled.div`
  width: 36.75rem;
  height: 7.75rem;
  margin-top: 5.875rem;

  h1{
    font-size: 3rem;
    font-weight: 800;
    font-family: "Baloo 2";
    line-height: 130%;
    margin-bottom: 1rem;
  }

  span {
    
    font-size: 1.25rem;

  }

`;

export const ItemContainer = styled.div`
  margin-top: 4.125rem;
  width: 35.4375rem;
  height: 5.25rem;

  display: grid;
  grid-template-columns: 14.4375rem 18.375rem;
  grid-row: auto auto;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;

    div{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 100%;
      width: 2rem;
      height: 2rem;
    }

    .icon-1{
      background-color: ${props => props.theme["yellow-700"]};
      color: ${props => props.theme["gray-100"]};
    }

    .icon-2{
      background-color: ${props => props.theme["gray-700"]};
      color: ${props => props.theme["gray-100"]};
    }

    .icon-3{
      background-color: ${props => props.theme["yellow-500"]};
      color: ${props => props.theme["gray-100"]};
    }

    .icon-4{
      background-color: ${props => props.theme["purple-500"]};
      color: ${props => props.theme["gray-100"]};
    }
  }
`;

export const CoffeListContainer = styled.div`
  margin-top: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;

  div{
    display: flex;
    flex-direction: column;
  }
`;

export const CofferListHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.375rem;

  h1{
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

`;

export const CoffeListMainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;