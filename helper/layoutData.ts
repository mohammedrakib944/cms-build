export const layouts = [
  {
    name: "Hero-Layout",
    title: "Hero Layout",
    pages: [
      { title: "Hero", url: "/hero" },
      { title: "Hero 2", url: "/hero2" },
    ],
  },
  {
    name: "Intro-Layout",
    title: "Intro Layout",
    pages: [
      { title: "Intro", url: "/intro" },
      { title: "Intro 2", url: "/intro2" },
    ],
  },
];

export function getLayoutByPageUrl(url: string) {
  const layout = layouts.find((layout) =>
    layout.pages.some((page) => page.url === url)
  );

  return layout ? layout.name : null;
}
