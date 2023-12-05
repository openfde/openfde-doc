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
    locales: ['en'],
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
          // editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus', // OpenFDE的开源代码仓库
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '政策与协议',
            items: [
              {
                label: '用户协议',
                to: 'user-service-agreement',
              },
              {
                label: '隐私政策',
                to: 'privacy-policy',
              },
              {
                label: '法律声明',
                to: 'law-glossary',
              },
            ],
          },
          {
            title: '加入我们',
            items: [
              {
                label: '团队介绍',
                href: '/about-us',
              },
              {
                label: '公众号',
                href: siteUrl + '/img/WeChat-Official.jpg', // OpenFDE社区群
              },
              {
                label: 'Discord社区',
                href: siteUrl + '/img/discord-openfde.jpg',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'OpenFDE官网',
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
        copyright: `版权所有 © ${new Date().getFullYear()} OpenFDE, 此网站使用<a href="https://docusaurus.io/">Docusaurus</a>构建.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [{ src: '/js/baidu-stats.js' }],
};

module.exports = config;
