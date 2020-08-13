import styled from 'styled-components';
import Link from 'next/link';
import { PostDetails } from '../content/posts/PostDetails';

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
  background: ${({ theme }) => theme.colors.body2};
  :hover,
  :active,
  :focus {
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primaryHover};
    background: ${({ theme }) => theme.colors.body2Hover};
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
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

const StyledHeading = styled.article`
  display: flex;
  align-items: center;
  button {
    margin-left: 2rem;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    list-style: none;
  }
`;

const PostRow = (
  PostDetails: {
    id: number;
    title: string;
    date: string;
    link: string;
  }[]
): React.ReactNode => {
  return PostDetails.map((row) => {
    return (
      <li key={row.id}>
        <Link href={row.link}>
          <StyledPostRow>
            <h3> {row.title} </h3>
          </StyledPostRow>
        </Link>
      </li>
    );
  });
};

export default function Post() {
  return (
    <>
      <StyledHeading>
        <h2>Blogs</h2>
      </StyledHeading>
      <em>A collection of my learnings and expeiences in tech.</em>
      <StyledList>{PostRow(PostDetails)}</StyledList>
    </>
  );
}
