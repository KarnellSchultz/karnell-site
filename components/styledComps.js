import styled from "styled-components";

export default StyledButton = styled.button`
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0.75rem 1.25rem;
  background: ${({ theme }) => theme.colors.black};
  color: #ffffff;
  height: 100%;
  text-decoration: none;
  text-transform: none;
  border: none;

  &:hover {
    cursor: pointer;
    text-transform: none;
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
