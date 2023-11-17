// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenFDE',
  tagline: 'Open Fusion Desktop Environment',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://openfde.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

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
          "href": 'https://openfde.com'
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: '文档',
          // },
          // {to: '/blog', label: '博客', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus', // OpenFDE的开源代码仓库
          //   label: 'GitHub',
          //   position: 'right',
          // },
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
                to: '/docs/user-service-agreement',
              },
              {
                label: '隐私政策',
                to: '/docs/privacy-policy',
              },
              {
                label: '法律声明',
                to: '/docs/law-glossary',
              },
            ],
          },
          {
            title: '加入我们',
            items: [
              {
                label: '团队介绍',
                href: '/docs/about-us',
              },
              {
                label: 'Discord社区',
                href: 'https://discordapp.com/invite/docusaurus', // OpenFDE社区群
              },
              {
                label: '公众号',
                // href: 'https://twitter.com/docusaurus', // OpenFDE官方运营公众号
                to: 'img/WeChat-Official.jpg',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'OpenFDE官网',
                href: 'https://openfde.com'
                // to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://openfde.com', // OpenFDE的开源代码仓库
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} OpenFDE, Inc, 此网站使用[Docusaurus](https://docusaurus.io/)构建.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
