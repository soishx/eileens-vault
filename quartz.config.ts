import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Eileen's Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",tagId: 'G-B2PTHEZ4T5'
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian", "content/Private/**"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FAF7F5",          // warm off-white background
          lightgray: "#E0E0E0",      // subtle borders
          gray: "#9E9E9E",           // graph lines
          darkgray: "#444444",       // body text
          dark: "#1E1E1E",           // headers/icons
          secondary: "#9A77E8",      // main accent purple (links, graph nodes)
          tertiary: "#F28B82",       // contrasting coral/red-orange for hover
          highlight: "rgba(154, 119, 232, 0.15)", // purple-tinted highlight
          textHighlight: "#FFF59D"   // soft butter yellow background for inline highlights
        },
        darkMode: {
          light: "#2A2438",          // deep indigo background
          lightgray: "#3E3A4B",      // borders
          gray: "#6C6C6C",           // graph lines
          darkgray: "#E0E0E0",       // body text
          dark: "#FAFAFA",           // headers/icons
          secondary: "#B39DDB",      // lighter purple accent
          tertiary: "#FFB74D",       // warm golden orange for contrast
          highlight: "rgba(255, 183, 77, 0.15)",  // orange-gold translucent highlight
          textHighlight: "#9CCC65AA" // lime green translucent, stands out from purple bg
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "catppuccin-latte",
          dark: "catppuccin-frappe",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
        maxDepth: 5,       
        minEntries: 1,
        showByDefault: true,
        collapseByDefault: false,
    }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
