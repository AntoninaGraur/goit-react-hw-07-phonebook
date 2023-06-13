import styled from '@emotion/styled';

export const ContactMenu = styled.ul`
  font-size: 18px;
  color: #18084b;
  text-shadow: 1px 1px 2px rgb(42 36 36 / 89%);
 list-style: none;
`;
export const ContactsLi = styled.li`
display: flex;
justify-content: space-between;
align-items: center;

`;

export const DeleteBtn = styled.button`
  min-width: 45px;
  padding: 7px 10px;
  color: #151216d6;
  background-color: #03a9f4;
  border-radius: 20px;
  border: transparent;
  outline: transparent;
  margin: 0px 0px 25px 25px;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  box-shadow: -1px 8px 20px -3px rgba(0, 0, 0, 0.43);
 display: inline-block;
  &:hover {
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;
