// header

export interface HeaderSocialLinks {
  displayText: string;
  printText?: string;
  tooltip?: string;
  href: string;
  icon: any;
  display: boolean;
  print: boolean;
}

// skills
export interface SkillType {
  icon: any;
  name: string;
  tooltip?: string;
  order?: number;
}

export interface TechStack {
  name:
    | 'Frontend Development'
    | 'Backend and DataBase'
    | 'Styling Frameworks or Libraries'
    | 'CMS Development'
    | 'DevOps'
    | 'Testing'
    | 'Other Tools I Know'
    | 'Currently Learning';
  skills: SkillType[];
  order?: number;
}

// experience

export interface CompanyType {
  id: string;
  name: string;
  logo: string;
  url: string;
  location: string;
  type: 'Full Time' | 'Part Time';
  startDate: string;
  endDate?: string;
  roles: {
    id: string;
    title: string;
    responsibilities: string;
    startDate: string;
    endDate?: string;
  }[];
  projects: ProjectType[];
  hide?: boolean;
}

// projects

export interface ProjectType {
  id: string;
  title: string;
  url: string;
  github?: string;
  details: string;
  roles: string[];
  responsibilities?: string;
  keyAchievements?: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  companyId?: string;
  companyName?: string;
  hide?: boolean;
}

// education

export interface EducationType {
  id: number;
  name: string;
  location: string;
  school: string;
  affiliation: string;
  startDate: string;
  endDate?: string;
  score?: string;
}
