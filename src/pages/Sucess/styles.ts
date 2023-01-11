import styled from "styled-components";

export const SucessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 5rem 10rem;
`;

export const SucessHeaderContainer = styled.div`
  gap: 0.25rem;
  h1{
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;
    color: ${props => props.theme["yellow-700"]};
  }

  p{
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`;

export const SucessMainContainer = styled.div`
  display: flex;
  gap: 6.375rem;
  flex-wrap: wrap;

  img{
    width: 30.75rem;
    height: 18.3125rem;
  }
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;
  gap: 2rem;
  
  border-radius: 6px 44px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
      to right, 
      ${props => props.theme["yellow-500"]}, 
      ${props => props.theme["purple-500"]}
    ) border-box;
  border: 1px solid transparent;  
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 2.625rem;

  
`;

const IconBase = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 1000px;
`;

export const InfoIcon1Container = styled(IconBase)`
  background-color: ${props => props.theme["purple-500"]};
  color: ${props => props.theme["gray-100"]};
`;

export const InfoIcon2Container = styled(IconBase)`
  background-color: ${props => props.theme["yellow-500"]};
  color: ${props => props.theme["gray-100"]};
`;

export const InfoIcon3Container = styled(IconBase)`
  background-color: ${props => props.theme["yellow-700"]};
  color: ${props => props.theme["gray-100"]};
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  span{
    width: 100%;
  }
`;

