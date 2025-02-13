import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import HomepageProducts from '../components/HomepageProducts';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>Product Instructions</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate>For LuiStudio Booth Store</Translate>
        </p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Instructions for LuiStudio's Products">
      <HomepageHeader />
      <main>
        <HomepageProducts />
      </main>
    </Layout>
  );
}
