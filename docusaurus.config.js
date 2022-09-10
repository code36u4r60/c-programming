const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "C Programming",
  tagline: "Solving challenges using the C programming language",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",

  organizationName: "code36u4r60",
  projectName: "c-programming",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "data structures, algorithms, programing in c, c programing, computer programming language, language c, challenge, solve problems, hackerrank solutions, blog",
        },
      ],
      navbar: {
        title: "Programming",
        logo: {
          alt: "Solving challenges using the C programming language.",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Resume",
                href: "https://eduardoqueiros.netlify.app/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/eduardoqueiros/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Github: @code36u4r60",
                href: "https://github.com/code36u4r60",
              },
              {
                label: "Github: @sebenta",
                href: "https://github.com/Sebenta",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} C Programming. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
