export const imports = {
  'src/empty-line/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-empty-line-index" */ 'src/empty-line/index.mdx'
    ),
}
