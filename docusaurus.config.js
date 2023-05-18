// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MoonRP',
  favicon: 'img/MoonRP.ico',
  url: 'https://SilverMoonRP.github.io',
  baseUrl: '/',
  organizationName: 'SilverMoonRP', // Usually your GitHub org/user name.
  projectName: ' SilverMoonRP.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SilverMoonRP/silvermoonrp.github.io/tree/main/',
          showLastUpdateTime: true,
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
        title: 'Silver MoonRP',
        logo: {
          alt: 'MoonRP logo',
          src: 'img/SilverMoonRP.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'MoonRP',
          },
          {
            href: 'fivem://connect/cfx.re/join/vjoaqx',
            label: 'Połącz Fivem',
            position: 'right',
          },
          {
            href: 'https://discord.gg/SmR2eHaujS',
            label: 'Discord',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
