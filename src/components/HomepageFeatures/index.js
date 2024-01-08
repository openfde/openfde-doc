import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// 首页的网页内容介绍
const FeatureList = [
  {
    title: 'Community Guides',
    href: 'docs/category/community-guides',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      <Link href="/docs/community/behavior-rules">
      Code of Conduct </Link><br/>
      <Link href="/docs/community/contribution-strategy">
      Contribution and Strategy </Link><br/>
      </>
    ),
  },
  {
    title: 'User Guides',
    href: 'docs/category/user-guides',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Link href="/docs/documentation/installation-guide">
        Installation Guide </Link><br/>

        <Link href="/docs/documentation/user-manual"> 
        User manual </Link><br/>
      </>
    ),
  },
  {
    title: 'Developer Guides',
    href: 'docs/category/developer-guides',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <Link href="/docs/developer/debug-skills">Debug Skills</Link><br/>
      <Link href="/docs/developer/quick-start">Quick Start </Link><br/>
      </>
    
    ),
  },
];

function Feature({Svg, title, description,href}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><Link href={href}>{title}</Link></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
