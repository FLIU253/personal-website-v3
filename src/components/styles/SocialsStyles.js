import styled from "styled-components";

export const List = styled.ul`
  margin: 15px 0 0;
  padding: 0;
`;

export const Item = styled.li`
  display: inline-block;
  list-style: none;
  margin-right: 20px;
  color: #787a82;
  font-size: 24px;
  :hover {
    color: #3997dc;
  }
`;

export const ThemeIcon = styled.img`
  height: 28px;
  width: 28px;
  min-width: 28px;
  cursor: pointer;
  margin-right: 40px;
`;
