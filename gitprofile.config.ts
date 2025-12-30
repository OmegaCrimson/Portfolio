const CONFIG = {
  github: {
    username: 'OmegaCrimson',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'College Manager',
          description: 'College Manager for managing students and grades.',
          imageUrl: 'https://i.ibb.co/ymF8qn4m/banner-square.png',
          link: 'https://nightangel5.gumroad.com/l/collegemanager',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mohamed Gonem',
    description:
      'Indie developer and systems technologist building cross-platform tools in Python, C#, and Flask. Creator of Student Grader and College Manager. Passionate about UI polish, workflow automation, and developer experience.',
    imageURL: 'https://avatars.githubusercontent.com/u/yourGitHubID?v=4',
  },
  social: {
    linkedin: 'crimsonnls',
    x: '',
    mastodon: 'MohamedGonem@mastodon.social',
    researchGate: '',
    facebook: 'MohamedGonemCNL',
    instagram: 'crimson_cnl',
    reddit: '0megaCrimson',
    threads: '',
    youtube: 'MohamedGonemCNL',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '@mohamedgonem',
    stackoverflow: '',
    discord: 'oscrimson',
    telegram: '@myg_crimson',
    website: '',
    phone: '+201210068442',
    email: 'crimson_cnl@proton.me',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    // Programming & Frameworks
    'Python',
    'Flask',
    'C#',
    '.NET',
    'Blazor',
    'WinForms',
    'Node.js',
    'Godot Engine (4.4)',
    'Semantic Release',
    'PowerShell (PS1)',
    'VB 6.0',
    'C Programming',

    // Software & Tools
    'Git & GitHub',
    'CI/CD',
    'PyInstaller',
    'Inno Setup',
    'Excel',
    'Word',
    'PowerPoint',
    'Access 2003',
    'SQL',

    // Security & Networking
    'Cybersecurity Fundamentals',
    'Digital Hygiene',
    'Threat Awareness',
    'Data Protection',
    'Packet Tracer',
    'Routing & Switching',
    'WAN Technologies',
    'Windows Server 2003',

    // Professional & Academic
    'Workflow Automation',
    'Debugging & Error Tracing',
    'Open Source Etiquette',
    'Documentation & README Design',
    'System Analysis',
    'Logic Gates',
    'Computer Maintenance & Upgrades',
    'Microprocessors & Microcontrollers',
    'Office Applications',
  ],
  experiences: [
    {
      company: 'The Holding Company for Water and Wastewater',
      position: 'Operating Technician',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://www.hcww.com.eg',
    },
    {
      company: 'Indie Developer & Founder',
      position: 'Solo Developer / Product Builder',
      from: '2024',
      to: 'Present',
      companyLink: 'https://github.com/OmegaCrimson',
    },
  ],
  certifications: [
    {
      name: 'Foundational C# Certification',
      body: 'A verified certification covering core C# programming concepts, including variables, data types, control flow, collections, OOP, error handling, and basic .NET development. Demonstrates strong foundational skills for software development and backend programming within the Microsoft ecosystem.',
      year: 'November 2025',
      link: 'https://www.freecodecamp.org/certification/fcc-53810a4a-4cd4-41d1-9e18-1f3d18d58e08/foundational-c-sharp-with-microsoft',
    },
    {
      name: 'Getting Started with Cybersecurity – IBM SkillsBuild',
      body: 'An introductory course on cybersecurity principles, common threats, and basic protection strategies.',
      year: '2025',
      link: 'https://www.credly.com/badges/6838fcfb-8fef-4e04-9d6d-1fb0a8d88366/public_url',
    },
    {
      name: 'Introduction to Cybersecurity – Cisco Networking Academy',
      body: 'A recognized certification covering the fundamentals of cybersecurity, including threat types, attack methods, security principles, encryption basics, and network protection. Suitable for beginners in IT, networking, and security roles, and a solid foundation for advanced cybersecurity paths.',
      year: 'November 2025',
      link: 'https://www.credly.com/badges/6f7af68b-879a-43ad-8792-703c50fc6852/public_url',
    },
    {
      name: 'Cybersecurity Fundamentals – IBM SkillsBuild',
      body: 'Covers essential cybersecurity concepts including threat modeling, risk management, and secure practices. Ideal for aspiring security professionals.',
      year: '2025',
      link: 'https://www.credly.com/badges/f4079f07-66a8-4841-a771-51a9fc568c9b/public_url',
    },
    {
      name: 'Digital Literacy – IBM SkillsBuild',
      body: 'Introduces foundational digital skills including online safety, productivity tools, and responsible internet use.',
      year: '2025',
      link: 'https://www.credly.com/badges/7a755616-347d-4085-a606-24fd28497637/public_url',
    },
    {
      name: 'Digital Mindset – IBM SkillsBuild',
      body: 'Explores the mindset and skills needed to thrive in a digital-first world, including adaptability, collaboration, and innovation.',
      year: '2025',
      link: 'https://www.credly.com/badges/1e24dbad-ea08-402e-8e4f-4e2672c1d28d/public_url',
    },
  ],
  educations: [],
  publications: [],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: 'G-MBV5ZKNHE8',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'business',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'black',
      'luxury',
      'dracula',
      'business',
      'night',
      'abyss',
    ],
  },
  enablePWA: true,
};

export default CONFIG;