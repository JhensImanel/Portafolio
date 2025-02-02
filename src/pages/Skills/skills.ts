import { Skill, skillsData } from "./skillsData";

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const allSkillCategories: SkillCategory[] = Object.entries(
  skillsData
).map(([category, skills]) => ({
  category,
  skills,
}));

export const initialCategory = allSkillCategories[0];

export function getNextSkill(skills: Skill[]): Skill | undefined {
  const existing = new Set(skills.map((skill) => skill.label));
  return allSkillCategories
    .flatMap((category) => category.skills)
    .find((skill) => !existing.has(skill.label));
}
