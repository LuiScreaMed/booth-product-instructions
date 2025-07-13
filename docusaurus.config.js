// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

import remarkIgnoreText from './src/plugins/remark-ignore-text';
import remarkRemoveToc from './src/plugins/remark-remove-toc';
import remarkWarningParse from './src/plugins/remark-warning-parse';
import remarkImageParse from './src/plugins/remark-image-parse';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LuiStudio Product Instructions',
  tagline: 'For LuiStudio Booth Store',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://product-instructions.luiscreamed.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LuiScreaMed', // Usually your GitHub org/user name.
  projectName: 'booth-product-instructions', // Usually your repo name.
  trailingSlash: false,

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh-Hans']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          beforeDefaultRemarkPlugins: [remarkWarningParse, remarkIgnoreText, remarkImageParse],
          remarkPlugins: [],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'LuiStudio',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://luistudio.booth.pm/',
            label: 'Booth Store'
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/LuiScreaMed/booth-product-instructions',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/LuiScreaMed/booth-product-instructions',
          },
          {
            label: 'Booth Store',
            href: 'https://luistudio.booth.pm/'
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LuiScreaMed. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        maxHeadingLevel: 5,
        minHeadingLevel: 2
      }
    }),
    plugins: [[ require.resolve('docusaurus-lunr-search'), {
      languages: ['en', 'ja', 'zh'] // language codes
    }]],
};

export default config;
