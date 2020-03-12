import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  min-width: 150px;
`;

export const ProfileContent = styled.div`
  margin: 10px 0 0 50px;
  h1 {
    color: ${({ theme }) => theme.h1};
    font-size: 45px;
    letter-spacing: 2px;
    margin: 0;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 30px;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    margin: 25px 0 0;
    width: 100%;
  }
`;
