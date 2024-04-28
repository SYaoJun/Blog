const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: '趣用编程',
  tagline: '分享有趣和有用的编程知识',
  url: 'https://syaojun.github.io',
  baseUrl: '/Blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'syaojun', // Usually your GitHub org/user name.
  projectName: 'Blog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // path: "./blog",
          // routeBasePath: "/",
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
      navbar: {
        title: '趣用编程',
        logo: {
          alt: 'My Site Logo',
          src: 'img/head.JPG',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '数据库',
          },
          {to: '/blog', label: '关于我', position: 'left'},

          {
            href: 'https://github.com/SYaoJun/CPPInterview',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '数据库',
                to: '/docs',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'B站',
                href: 'https://space.bilibili.com/30639161',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
