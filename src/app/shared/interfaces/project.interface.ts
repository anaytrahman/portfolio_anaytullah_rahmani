export interface Project {
  id: number;
  name: string;
  description: string;
  image: string; // replace with real screenshot path later
  techStack: string[];
  liveUrl: string; // replace with real deployed URL
  githubFrontEndUrl: string; // replace with real repo URL (frontend)
  backendGithubUrl?: string; // backend repo URL, for full stack projects
  featured?: boolean;
  isFullStack?: number; // 0 for frontend, 1 for full stack
}
