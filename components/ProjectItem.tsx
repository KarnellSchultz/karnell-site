import styled from 'styled-components';

const OpenSourceItem = styled.div`
  @media screen and (max-width: 820px) {
    width: 100%;
  }
  width: 48%;
  min-width: 330px;
  height: 200px;
  min-height: 150px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 0.1px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 0.8rem 0.1rem;
  transition: all 300ms ease;
  padding-left: 0.5rem;
  h4 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    padding: 0 1rem 1rem 1rem;
    height: 30%;
  }
  h4:hover {
    text-decoration: underline;
  }

  :hover,
  :active,
  :focus {
    cursor: pointer;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled.a`
  color: inherit;
  :hover {
    text-decoration: none;
  }
`;
const StyledGitLink = styled(StyledLink)`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
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
