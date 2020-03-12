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
  color: ${({ theme }) => theme.link};
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
`;

export const Icons = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ViewButton = styled.button`
  color: #fff;
  border: 2px solid transparent;
  background: #0938a4 !important;
  font-size: 18px;
  border-radius: 4px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  padding: 3px 18px;
`;

export const GitButton = styled.button`
  color: ${({ theme }) => theme.buttonColor};
  border: 2px solid transparent;
  background: ${({ theme }) => theme.buttonBackground};
  font-size: 18px;
  border-radius: 4px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  padding: 3px 10px;
  margin-right: 15px;
`;
