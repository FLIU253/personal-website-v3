import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Left = styled.div`
  width: 300px;

  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.h3};
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 30px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const Right = styled.div`
  flex: 1;
  max-width: 700px;

  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
