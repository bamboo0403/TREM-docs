import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "TREM Docs",
  tagline: "TREM 技術文件",
  favicon: "img/favicon.ico",

  url: "https://exptechtw.github.io",
  baseUrl: "/TREM-docs/",
  organizationName: "ExpTechTW",
  projectName: "TREM-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",

  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["en", "zh-Hant"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ExpTechTW/TREM-docs/tree/main",
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ExpTechTW/TREM-docs/tree/main",
          editLocalizedFiles: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "TREM Docs",
      logo: {
        alt: "TREM Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tremSidebar",
          position: "left",
          label: "TREM",
        },
        {
          href: "https://github.com/ExpTechTW/TREM-Docs",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文件",
          items: [
            {
              label: "TREM",
              to: "/docs/trem/start/",
            },
          ],
        },
        {
          title: "社群連結",
          items: [
            {
              label: "Discord",
              href: "https://exptech.com.tw/dc",
            },
          ],
        },
        {
          title: "其他連結",
          items: [
            {
              label: "部落格",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ExpTechTW",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ExpTech Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
