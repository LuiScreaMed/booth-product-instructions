import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import HomepageProducts from '../components/HomepageProducts';
import { useEffect } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
  const supportedLangs = [
    { code: 'en', lang: 'en' },
    { code: 'zh', lang: 'zh-Hans' },
    { code: 'ja', lang: 'ja' }
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const docId = params.get("i");
    if (!docId) return;

    const browserLang = navigator.language;
    if (!browserLang) return;

    let useLang = 'en';

    const browserLangCode = browserLang.split("-")[0].toLowerCase();

    for (const supportedLang of supportedLangs) {
      if (!browserLangCode.includes(supportedLang.code)) continue;
      useLang = supportedLang.lang;
      break;
    }

    const path = encodeURIComponent(docId);

    if (path === "index") {
      window.location.replace(`/${useLang}`);
    } else {
      window.location.replace(`/${useLang}/docs/${path}`);
    }
  });

  const { siteConfig } = useDocusaurusContext();
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
