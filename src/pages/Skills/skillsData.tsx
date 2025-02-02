export const skillsData = {
  FrontEnd: [
    { icon: '/src/assets/svg/html.svg', label: 'HTML' },
    { icon: '/src/assets/svg/css.svg', label: 'CSS' },
    { icon: '/src/assets/svg/js.svg', label: 'JavaScript' },
    { icon: '/src/assets/svg/ts.svg', label: 'TypeScript' },
    { icon: '/src/assets/svg/react.svg', label: 'React' },
    { icon: '/src/assets/svg/angular.svg', label: 'Angular' },
    { icon: '/src/assets/svg/figma.svg', label: 'Figma' },
    { icon: '/src/assets/svg/bootstrap.svg', label: 'Bootstrap' },
    { icon: '/src/assets/svg/sass.svg', label: 'Sass' },
    { icon: '/src/assets/svg/tailwindcss.svg', label: 'TailwindCSS' },
    { icon: '/src/assets/svg/wordpress.svg', label: 'WordPress' },
  ],
  BackEnd: [
    { icon: '/src/assets/svg/expressjs.svg', label: 'Express' },
    { icon: '/src/assets/svg/firebase.svg', label: 'Firebase' },
    { icon: '/src/assets/svg/mysql.svg', label: 'MySQL' },
    { icon: '/src/assets/svg/postgresql.svg', label: 'PostgreSQL' },
    { icon: '/src/assets/svg/sqlserver.svg', label: 'SQL Server' },
    { icon: '/src/assets/svg/mongodb.svg', label: 'MongoDB' },
    { icon: '/src/assets/svg/node.svg', label: 'Node.js' },
  ],
  Otros: [
    { icon: '/src/assets/svg/vscode.svg', label: 'VSCode' },
    { icon: '/src/assets/svg/git.svg', label: 'Git' },
    { icon: '/src/assets/svg/github.svg', label: 'GitHub' },
    { icon: '/src/assets/svg/postman.svg', label: 'Postman' },
    { icon: '/src/assets/svg/powerbi.svg', label: 'Power BI' }
  ],
};

export interface Skill {
  icon: string;
  label: string;
}
