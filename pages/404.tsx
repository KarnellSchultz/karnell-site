import Layout from 'components/Layout';
import Footer from 'components/Footer';

export default function Custom404() {
  return (
    <>
      <Layout pageName={'404'}>
        <section>
          <h3>{`404 - 🤦‍♀️ that wasn't supposed to happen . . .`}</h3>
        </section>
        <Footer />
      </Layout>
    </>
  );
}
