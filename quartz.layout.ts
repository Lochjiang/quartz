import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.Flex({
        components: [
          {
            Component: Component.DesktopOnly(Component.Graph()),
            basis: "45%",
          },
          {
            Component: Component.DesktopOnly(Component.Spacer()), 
            basis: "5%", 
          },
          { 
            Component: Component.Backlinks(),
            align: "start",
            basis: "50%",
          },
        ],
      }),
      // 添加条件判断：仅在普通内容页渲染
      condition: (page) => {
        const slug = page.fileData.slug;
        
        // 1. 排除标签页：Quartz 中标签页的 slug 默认以 "tags/" 开头
        if (slug?.startsWith("tags/")) return false;
        
        // 2. 排除自动生成的文件夹列表页：纯生成的列表页没有实际的 markdown 物理文件路径
        if (slug?.endsWith("/index")) return false;

        // 如果你有其他想排除的特定页面，也可以在这里加上，例如：
        // if (slug === "index") return false; // 排除主页

        return true; 
      }
    }),
 
    Component.ConditionalRender({
      component: Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'Lochjiang/comments',
        // from data-repo-id
        repoId: 'R_kgDOSi8X4Q',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOSi8X4c4C9dhU',
        // from data-lang
        lang: 'zh-CN',
        // Other options
        }
      }),
      condition: (page) => page.fileData.frontmatter?.comments === true,
    }),

  ],
  footer: Component.Footer(
  //   {
  //   links: {
  //     GitHub: "https://github.com/jackyzha0/quartz",
  //     "Discord Community": "https://discord.gg/cRFFHYye7t",
  //   },
  // }
),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        // { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "导航", // 给一个标题，确保它像个侧边栏而不是折叠菜单
      // folderClickBehavior: "collapse", // 点击文件夹名时：折叠/展开
      filterFn: (node) => {
      const omit = new Set(["文库","词典"])
      return !omit.has(node.displayName.toLowerCase())
      },
    }),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "导航", // 给一个标题，确保它像个侧边栏而不是折叠菜单
      // folderClickBehavior: "collapse", // 点击文件夹名时：折叠/展开
      filterFn: (node) => {
      const omit = new Set(["文库","词典"])
      return !omit.has(node.displayName.toLowerCase())
      },
    }),
  ],
  right: [],
}
