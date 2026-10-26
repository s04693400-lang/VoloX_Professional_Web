export type ProjectCategory = 
  | 'All' 
  | 'AI & Software' 
  | 'Hardware & Devices' 
  | 'Hardware & Architecture' 
  | 'Robotics & Mobility' 
  | 'Martial Arts & Community';

export type ProjectStatus = 'In Development' | 'Coming Soon' | 'Concept Phase' | 'Exploration';

export interface VoloXProject {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  description: string;
  image?: string | null;
  iconName: string;
  tags: string[];
  focusAreas: string[];
  currentPhase: string;
  liveUrl?: string | null;
  linkNote: string;
}

export interface JourneyMilestone {
  id: string;
  theme: string;
  subtitle: string;
  description: string;
  iconName: string;
  learningFocus: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string;
  topics: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  dateOrStage: string;
  description: string;
  verified: boolean;
  link?: string;
}
