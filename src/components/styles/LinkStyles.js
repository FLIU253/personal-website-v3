import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;

export const LinkTitle = styled.a`
  border-bottom: 1px solid #3997dc;
  color: ${({ theme }) => theme.link};
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  text-decoration: none;
  :hover {
    color: #3997dc;
  }
`;

export const Title = styled.span`
  color: #32404b;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
`;
