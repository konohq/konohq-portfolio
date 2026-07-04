export type ProjectStatus = "デプロイ済み" | "未デプロイ";

export type Project = {
  title: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlights?: string[];
  testUsers?: {
    label: string;
    email: string;
    password: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "ミニSNSアプリ",
    status: "未デプロイ",
    description:
      "XのようなSNSをイメージして作成したWebアプリです。ユーザー登録・ログイン、投稿、返信、いいね、フォロー、プロフィール編集など、SNSに必要な基本機能を実装しました。",
    technologies: [
      "Rails API",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/konohq/SNS_railsAPI_backend",
  },
  {
    title: "JOB HUNT MANAGER",
    status: "デプロイ済み",
    description:
      "就職活動の応募状況を管理するためのWebアプリです。企業、求人、応募、面接、タスク、メモをユーザーごとに管理でき、カンバン形式で進捗を直感的に確認できます。",
    technologies: [
      "Rails API",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    demoUrl: "https://jobhuntmanager.onrender.com",
    githubUrl: "https://github.com/konohq/JOBHUNTMANAGER",
    testUsers: [
      {
        label: "テストユーザー1",
        email: "iamtest1@gmail.com",
        password: "iamtest",
      },
      {
        label: "テストユーザー2",
        email: "iamtest2@gmail.com",
        password: "iamtest",
      },
    ],
  },
  {
    title: "TaskFlow",
    status: "デプロイ済み",
    description:
      "チームで使うことを想定したタスク管理アプリです。タスク作成、担当者設定、ステータス管理、進捗確認など、チーム開発に近いタスク管理機能を意識して作成しました。",
    technologies: [
      "Rails API",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    demoUrl: "https://taskflow-sepia-tau.vercel.app/",
    githubUrl: "https://github.com/konohq/taskflow",
    highlights: [
      "タスク作成、担当者設定、ステータス管理を通じてチーム開発に近い運用を意識",
      "進捗状況を一覧で確認しやすいUIを重視",
    ],
    testUsers: [
      {
        label: "テストユーザー1",
        email: "iamtest1@gmail.com",
        password: "iamtest",
      },
      {
        label: "テストユーザー2",
        email: "iamtest2@gmail.com",
        password: "iamtest",
      },
    ],
  },
];
