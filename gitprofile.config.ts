// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'OmegaCrimson', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'College Manager',
          description:
            'College Manager for managing students and grades.',
          imageUrl:
            'https://i.ibb.co/ymF8qn4m/banner-square.png',
          link: 'https://nightangel5.gumroad.com/l/collegemanager',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Mohamed Gonem', description: '', imageURL: '' },
  social: {
    linkedin: 'crimsonnls',
    x: '',
    mastodon: 'MohamedGonem@mastodon.social',
    researchGate: '',
    facebook: 'MohamedGonemCNL',
    instagram: 'crimson_cnl',
    reddit: '0megaCrimson',
    threads: '',
    youtube: 'MohamedGonemCNL', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '@mohamedgonem',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'oscrimson',
    telegram: '@myg_crimson',
    website: '',
    phone: '+201210068442',
    email: 'crimson_cnl@proton.me',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    '.NET',
    'Excel',
    'Word',
    'PowerPoint',
    'Threat Awareness',
    'Digital Hygiene',
    'Data Protection',
    'Network Fundamentals',
  ],
  experiences: [
    {
      company: 'The Holding Company for Water and Wastewater',
      position: 'Operating Technician',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://www.hcww.com.eg',
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
      name: 'Introduction to Cybersecurity – Cisco Networking Academy',
      body: 'A recognized certification covering the fundamentals of cybersecurity, including threat types, attack methods, security principles, encryption basics, and network protection. Suitable for beginners in IT, networking, and security roles, and a solid foundation for advanced cybersecurity paths.',
      year: 'November 2025',
      link: 'https://www.credly.com/badges/6f7af68b-879a-43ad-8792-703c50fc6852/public_url',
    },
  ],
  educations: [
 //   {
//   institution: 'Institution Name',
   //   degree: 'Degree',
  //    from: '2024',
   //   to: 'Present',
    //},
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
 //     'cupcake',
  //    'bumblebee',
 //     'emerald',
 //     'corporate',
//      'synthwave',
//      'retro',
  //    'cyberpunk',
//      'valentine',
//      'halloween',
   //   'garden',
   //   'forest',
//      'aqua',
 //     'lofi',
  //    'pastel',
  //    'fantasy',
 //     'wireframe',
      'black',
      'luxury',
      'dracula',
 //     'cmyk',
  //    'autumn',
      'business',
//      'acid',
//      'lemonade',
      'night',
    //  'coffee',
 //     'winter',
//      'dim',
 //     'nord',
 //     'sunset',
 //     'caramellatte',
      'abyss',
   //   'silk',
      //'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  //footer: `Made with <a 
     // class="text-primary" href="https://github.com/arifszn/gitprofile"
   //   target="_blank"
    //  rel="noreferrer"
  //  >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
