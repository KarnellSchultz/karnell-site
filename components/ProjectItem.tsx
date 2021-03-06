import styled from 'styled-components';

const OpenSourceItem = styled.div`
  @media screen and (max-width: 890px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    min-width: 100%;
    min-height: 236px;
    padding: 1em;
  }
  display: flex;
  flex-wrap: wrap;

  min-height: 216px;
  padding: 1.2em;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 0.1px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 0.5rem 0;
  transition: all 300ms ease;

  h4 {
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0.1em 0;
    color: ${({ theme }) => theme.colors.body};
  }
  p {
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.body};
  }

  :hover,
  :active,
  :focus {
    cursor: pointer;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    h4 {
      text-decoration: underline;
    }
  }
`;

const StyledLink = styled.a`
  color: inherit;
  :hover {
    text-decoration: none;
  }
`;
const StyledGitLink = styled(StyledLink)`
  align-self: flex-end;
  min-width: 100%;

  transition: color 0.2s ease-out;
  :hover {
    color: var(--body-main);
  }
`;

interface props {
  title: string;
  blurb: string;
  link: string;
  gitLink: string;
}

function ProjectItem({
  title,
  blurb,
  link = '#',
  gitLink = '#',
}: props) {
  return (
    <>
      <OpenSourceItem>
        <StyledLink href={link}>
          <h4>{title}</h4>
          <p>{blurb.substring(0, 100)}</p>
        </StyledLink>
        <StyledGitLink href={gitLink}>View on GitHub</StyledGitLink>
      </OpenSourceItem>
    </>
  );
}

export { ProjectItem };
