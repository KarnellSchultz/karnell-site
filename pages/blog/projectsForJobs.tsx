import React from 'react';
import { Layout } from 'components/Layout';
import ProjectsForJobs from 'content/posts/projectsForJobs.mdx';

export default function projectsForJobs() {
  return (
    <Layout
      blog
      pageName={
        'Hardest part of My First Three Months as a Developer'
      }>
      <section>
        <ProjectsForJobs />
      </section>
    </Layout>
  );
}
