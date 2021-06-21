/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Learning Hub',
  tagline: 'A repository of user documentation and tutorials for using Fynd Platform',
  url: 'https://ashokfynd.github.io/searchlight',
  baseUrl: '/searchlight/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ashokfynd', // Usually your GitHub org/user name.
  projectName: 'searchlight', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/documentation-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/what-is-fp',
          position: 'left',
          label: 'User Guide',
        },
        // {to: '/blog', label: 'Blog', position: 'left'}
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/introduction',
            },
            {
              label: 'FAQ',
              to: '/docs/introduction',
            },
            {
              label: 'Blogs',
              to: '/docs/introduction',
            },
            {
              label: 'Privacy & Terms',
              to: '/docs/introduction',
            },
            {
              label: 'Media',
              to: '/docs/introduction',
            }
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Fynd Partners',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'API Documentation',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Status',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Diagnosis',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Jobs',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            }
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Facebook',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'YouTube',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Instagram',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            }
          ],
        },
        
      ],
      copyright: `#MakeInIndia © ${new Date().getFullYear()} Shopsense Retail Technologies`,
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
