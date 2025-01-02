export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}