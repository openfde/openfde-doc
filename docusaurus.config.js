// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const isDev = process.env.NODE_ENV !== 'production';
const isInternalEnv = process.env.DEPLOY_ENV === 'internal';

const siteUrl = isDev
  ? 'http://localhost:3000'
  : isInternalEnv
  ? 'https://internal.docs.openfde.com'
  : 'https://docs.openfde.com';
console.debug('>>> siteUrl =', siteUrl);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenFDE',
  tagline: 'Open Fusion Desktop Environment',
  favicon: 'img/favicon1.ico',

  // Set the production url of your site here
  url: 'https://docs.openfde.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OpenFDE', // Usually your GitHub org/user name.
  projectName: 'OpenFDE', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
           editUrl:
          'https://gitee.com/openfde/openfde-doc/tree/master',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 5, // 博客侧边栏展示最近访问的5篇博客
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitee.com/openfde/openfde-doc/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenFDE',
        logo: {
          alt: 'OpenFDE Logo',
          src: 'img/logo.svg',
          href: 'https://openfde.com',
        },
        items: [
          //  {
          //    type: 'docSidebar',
          //    sidebarId: 'tutorialSidebar',
          //    position: 'left',
          //    label: '文档',
          //  },
          // {to: '/blog', label: '博客', position: 'left'},
          //   {
          //    href: 'https://github.com/facebook/docusaurus', // OpenFDE的开源代码仓库
          //    label: 'GitHub',
          //    position: 'right',
          // },
          //  {
          //    type: 'localeDropdown',
          //    position: 'left',
          //    persistLocale: true,
          //  }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Policy and Agreements',
            items: [
              {
                label: 'User Agreements',
                to: 'user-service-agreement',
              },
              {
                label: 'Privacy Policy',
                to: 'privacy-policy',
              },
              {
                label: 'Legal Statements',
                to: 'law-glossary',
              },
            ],
          },
          {
            title: 'Join in Us',
            items: [
              {
                label: 'About Our Teams',
                href: '/about-us',
              },
              {
                label: 'Official Account',
                href: siteUrl + '/img/WeChat-Official.jpg', // OpenFDE社区群
              },
              {
                label: 'Discord Community',
                href: siteUrl + '/img/discord-openfde.jpg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Official Website',
                href: 'https://openfde.com',
                // to: '/blog',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/openfde', // OpenFDE的开源代码仓库
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenFDE, this website built using <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [{ src: '/js/baidu-stats.js' }],
};

module.exports = config;
