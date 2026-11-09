// All portfolio text lives here. Experience, education and skills come from the resume.

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Lai Hong Wah',
  role: 'Software Developer (React)',
  location: 'Kuala Lumpur',
  email: 'hongwah25@gmail.com',
  github: 'https://github.com/hongwah',
  linkedin: 'https://www.linkedin.com/in/hong-wah-lai-704871238/',
  resume: `${base}Resume-LaiHongWah.pdf`,
  headline: 'I build interfaces with React, and I know how software breaks.',
  summary:
    "I'm a software developer moving into front-end work with React. Right now I test, debug and refactor COBOL applications, so I check every change before it ships. Before that I worked in technical support and on the service desk, where I saw first-hand what a confusing screen or a broken feature means for the people using it.",
}

export const nav = [
  { href: '#project', label: 'Project' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const experience = [
  {
    company: 'Prestige Atlantic Asia Sdn Bhd',
    role: 'COBOL Software Developer',
    dates: 'Apr 2025 – Present',
    points: [
      'Modify COBOL print form and barcode label programs for a Corrugated Packaging System (CPS), handling around 10 print forms and 5 barcode label programs per day.',
      'Access and edit program source files through PuTTY and AnzioWin, and trace defects with a debugger.',
      'Refactor problematic code and run tests to validate fixes before production release.',
    ],
  },
  {
    company: 'Fujitsu Systems Global Solutions Management',
    role: 'Service Desk Agent',
    dates: 'Apr 2024 – Apr 2025',
    points: [
      'Provided first-line support, logging and tracking incidents in ServiceNow to speed up problem resolution.',
      'Resolved common user issues using preset resolution scripts.',
    ],
  },
  {
    company: 'Sis Pos Sdn Bhd',
    role: 'Technical Support',
    dates: 'Sep 2023 – Feb 2024',
    points: [
      'Installed and repaired POS hardware at client sites, including desktops, monitors, AIO terminals, cash drawers and thermal receipt printers.',
      'Configured printer IP addresses on desktops and AIO terminals.',
    ],
  },
  {
    company: 'Gross Synergy Sdn Bhd',
    role: 'System Support',
    dates: 'Mar 2023 – Aug 2023',
    points: [],
  },
]

export const project = {
  name: 'Slow Ember',
  type: 'Concept website',
  href: `${base}coffee/`,
  description:
    'A Chinese-language website for a fictional coffee brand. The brand, products and copy are invented for this project.',
  features: [
    'Filter the coffee range by roast level',
    'Brew calculator that works out coffee and water amounts by method and servings',
    'Reusable SVG component that draws every coffee bag',
    'Responsive layout for desktop and mobile',
  ],
  stack: ['React', 'Vite', 'CSS'],
  note: 'Built with AI assistance.',
}

export const skills = ['React', 'JavaScript', 'HTML / CSS', 'C#', 'COBOL']

export const education = [
  {
    degree: 'Bachelor of Information Technology (Honours) in Software Systems Development',
    school: 'Tunku Abdul Rahman University of Management and Technology',
    dates: '2021 – 2023',
  },
  {
    degree: 'Diploma in Science (Information Systems Engineering)',
    school: 'Tunku Abdul Rahman University College',
    dates: '2018 – 2020',
  },
]
