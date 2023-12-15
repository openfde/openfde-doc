import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// 首页的网页内容介绍
const FeatureList = [
  {
    title: '社区中心',
    href: 'docs/category/社区中心',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      <Link href="/docs/community/behavior-rules">
      行为守则 </Link><br/>
      <Link href="/docs/community/contribution&strategy">
      贡献与攻略 </Link><br/>
      </>
    ),
  },
  {
    title: '关于产品',
    href: 'docs/category/用户中心',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Link href="/docs/documentation/installation-guide">
        安装指引 </Link><br/>

        <Link href="/docs/documentation/user-manual"> 
        用户手册 </Link><br/>
      </>
    ),
  },
  {
    title: '开发者中心',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <Link href="">开发工具</Link><br/>
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
