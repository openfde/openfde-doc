import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// 首页的网页内容介绍
const FeatureList = [
  {
    title: '社区资料',
    href: '/community/',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      <a href="docs/community/community-membership">
      角色说明 </a><br/>
      <a href="docs/community/contributor/行为守则">
      行为守则 </a><br/>
      <a href="docs/community/contribution&stategy">
      贡献与攻略 </a><br/>
      </>
    ),
  },
  {
    title: '关于产品',
    href: '/documentation/',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <a href="docs/documentation/installation-guide">
        安装指南 </a><br/>

        <a href="docs/documentation/user-guide"> 
        用户手册 </a><br/>
      </>
    ),
  },
  {
    title: '开发使用',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <a href="">开发工具</a><br/>
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
        <h3><a href={href}>{title}</a></h3>
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
