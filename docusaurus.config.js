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
        {to: 'blog', label: 'Articles', position: 'left'},
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
