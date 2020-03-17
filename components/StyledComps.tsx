import styled from "styled-components";

export { StyledPostRow };

const StyledPostRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  line-height: 3rem;
  letter-spacing: 0.2px;
  border-radius: 4px;

  transition: transform 300ms ease-in-out, box-shadow 400ms ease,
    background 100ms ease;
  background: ${({ theme }) => theme.colors.darkBackground};
  :hover,
  :active,
  :focus {
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.black};
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.01rem);
    h3 {
      color: ${({ theme }) => theme.colors.primary};
    }
    cursor: pointer;
  }
  @media (max-width: 576px) {
    height: 170px;
  }
  @media (max-width: 768px) {
    line-height: 3rem;
    height: 170px;
  }
`;
