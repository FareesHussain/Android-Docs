module.exports = {
  title: 'Android Docs',
  tagline: 'Android Essentials, Codelabs & Articles',
  url: 'https://android-docs.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Android Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },{
          to: 'codelabs/',
          label: 'Codelabs',
          position: 'left',
        },
        {to: 'blog', label: 'Weekly Articles', position: 'left'},
        {
          href: 'https://github.com/FareesHussain',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start with basics',
          items: [
            {
              label: 'Kotlin basics',
              to: 'docs/',
            },
            {
              label: 'Android basics',
              to: 'docs/androidbasics',
            },
          ],
        },
        {
          title: 'Contact Me',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/farees_hussain/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/farees-hussain-286a08193?originalSubdomain=in',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/farees_hussain',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Articles',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Android Docs, Built by Farees Hussain.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/docusaurus.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/docusaurus.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};
