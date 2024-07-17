export interface Skill {
  icon: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData = {
  Frontend: [
    { icon: '/html.svg', label: 'HTML' },
    { icon: '/css.svg', label: 'CSS' },
    { icon: '/js.svg', label: 'JavaScript' },
    { icon: '/ts.svg', label: 'TypeScript' },
    { icon: '/react.svg', label: 'React' },
    { icon: '/angular.svg', label: 'Angular' },
    { icon: '/figma.svg', label: 'Figma' },
    { icon: '/bootstrap.svg', label: 'Bootstrap' },
    { icon: '/sass.svg', label: 'Sass' },
    { icon: '/tailwindcss.svg', label: 'TailwindCSS' },
    { icon: '/wordpress.svg', label: 'WordPress' },
  ],
  Backend: [
    { icon: '/expressjs.svg', label: 'Express' },
    { icon: '/firebase.svg', label: 'Firebase' },
    { icon: '/mysql.svg', label: 'MySQL' },
    { icon: '/postgresql.svg', label: 'PostgreSQL' },
    { icon: '/sqlserver.svg', label: 'SQL Server' },
    { icon: '/mongodb.svg', label: 'MongoDB' },
    { icon: '/node.svg', label: 'Node.js' },
  ],
  Otros: [
    { icon: '/vscode.svg', label: 'VSCode' },
    { icon: '/git.svg', label: 'Git' },
    { icon: '/github.svg', label: 'GitHub' },
    { icon: '/postman.svg', label: 'Postman' },
    { icon: '/powerbi.svg', label: 'Power BI' }
  ],
};

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
