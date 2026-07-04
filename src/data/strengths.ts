export type Strength = {
  title: string;
  items: string[];
};

export const strengths: Strength[] = [
  {
    title: "バックエンド開発",
    items: [
      "Rails APIを用いたバックエンド開発",
      "PostgreSQLを使ったデータ設計",
    ],
  },
  {
    title: "フロントエンド開発",
    items: [
      "React / TypeScript を用いたSPA開発",
      "認証機能やCRUD機能の実装",
    ],
  },
  {
    title: "品質改善",
    items: ["RSpecやGitHub Actionsを用いた品質改善"],
  },
  {
    title: "開発推進",
    items: [
      "CodexなどのAI開発支援ツールを活用しながら、仕様を整理して開発を進められること",
    ],
  },
];
