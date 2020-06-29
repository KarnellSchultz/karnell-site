import styled from 'styled-components';

const OpenSourceItem = styled.div`
  @media screen and (max-width: 890px) {
    flex-basis: 100%;
    min-height: 220px;
    max-height: 250px;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 49%;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 0.1px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 0.5rem 0;
  transition: all 300ms ease;
  padding: 0.3rem 0.3rem;
  h4 {
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0.1em 0;
    color: ${({ theme }) => theme.colors.body};
  }
  p {
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: inherit;
  :hover {
    text-decoration: none;
  }
`;
const StyledGitLink = styled(StyledLink)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-basis: 95%;
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

export default ProjectItem;
