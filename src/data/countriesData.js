export const countriesData = [
  {
    id: 'us',
    name: 'United States',
    region: 'North America',
    image: '/destinations/usa.png',
    tags: ['H1B', 'F1', 'O1'],
    description: 'The United States is a leading global destination for innovation, education, and career growth. Known for its tech hubs, diverse culture, and top-tier universities, it offers unparalleled opportunities for ambitious professionals and students.',
    quickFacts: {
      capital: 'Washington, D.C.',
      currency: 'USD ($)',
      language: 'English',
      population: '331 Million',
      climate: 'Diverse (Temperate to Tropical)',
      timeToPR: 'Varies deeply by visa category (usually 5+ years)'
    },
    keyVisas: [
      {
        name: 'H-1B Visa',
        type: 'Work',
        description: 'For specialized professionals with a bachelor\'s degree or higher.',
        duration: 'Up to 6 years (3 years initial + 3 years extension)',
        requirements: ['Job offer from a US employer', 'Bachelor\'s degree in related field']
      },
      {
        name: 'F-1 Visa',
        type: 'Study',
        description: 'For international students attending academic programs or English language programs.',
        duration: 'Duration of the study program plus OPT period',
        requirements: ['Acceptance to an SEVP-approved school', 'Proof of financial support']
      },
      {
        name: 'O-1 Visa',
        type: 'Talent',
        description: 'For individuals with extraordinary ability in sciences, arts, education, business, or athletics.',
        duration: 'Up to 3 years initially, indefinite extensions possible',
        requirements: ['Extensive documentation of extraordinary achievements']
      }
    ],
    benefits: [
      'Access to the world\'s largest economy',
      'High-paying opportunities in tech, healthcare, and finance',
      'World-renowned universities and research facilities',
      'A highly diverse and multicultural society'
    ]
  },
  {
    id: 'ca',
    name: 'Canada',
    region: 'North America',
    image: '/destinations/canada.png',
    tags: ['Express Entry', 'Study', 'High PR Chance'],
    description: 'Canada is globally recognized for its high quality of life, excellent public healthcare, and welcoming attitude toward immigrants. With its vast natural beauty and booming tech sectors, it is a prime destination for skilled workers and families.',
    quickFacts: {
      capital: 'Ottawa',
      currency: 'CAD ($)',
      language: 'English, French',
      population: '38 Million',
      climate: 'Varies (Temperate to Subarctic)',
      timeToPR: 'Very fast (Express Entry can take ~6 months)'
    },
    keyVisas: [
      {
        name: 'Express Entry (PR)',
        type: 'Permanent Residence',
        description: 'A points-based system for skilled workers looking to settle in Canada permanently.',
        duration: 'Permanent',
        requirements: ['Language proficiency test', 'Educational Credential Assessment', 'Work experience']
      },
      {
        name: 'Study Permit',
        type: 'Study',
        description: 'Allows international students to study at Designated Learning Institutions (DLIs).',
        duration: 'Length of study program + 90 days',
        requirements: ['Letter of acceptance from a DLI', 'Proof of financial support']
      },
      {
        name: 'Post-Graduation Work Permit (PGWP)',
        type: 'Work',
        description: 'Open work permit for students who have graduated from an eligible Canadian institution.',
        duration: 'Up to 3 years depending on program length',
        requirements: ['Completed an eligible program in Canada']
      }
    ],
    benefits: [
      'Universal public healthcare system',
      'One of the clearest and fastest paths to Permanent Residency and Citizenship',
      'Extremely safe and multicultural society',
      'High standard of living and excellent education system'
    ]
  },
  {
    id: 'gb',
    name: 'United Kingdom',
    region: 'Europe',
    image: '/destinations/uk.png',
    tags: ['Skilled Worker', 'Student', 'Global Talent'],
    description: 'The UK offers a blend of rich history and modern innovation. With a global financial center in London and world-leading universities like Oxford and Cambridge, it is a top choice for ambitious talent.',
    quickFacts: {
      capital: 'London',
      currency: 'GBP (£)',
      language: 'English',
      population: '67 Million',
      climate: 'Temperate Maritime',
      timeToPR: 'Usually 5 years on a qualifying visa'
    },
    keyVisas: [
      {
        name: 'Skilled Worker Visa',
        type: 'Work',
        description: 'For individuals with a job offer from an approved UK employer.',
        duration: 'Up to 5 years before needing to extend or apply for settlement',
        requirements: ['Job offer from an approved sponsor', 'Minimum salary threshold', 'English proficiency']
      },
      {
        name: 'Global Talent Visa',
        type: 'Talent',
        description: 'For leaders or potential leaders in academia, arts and culture, and digital technology.',
        duration: 'Up to 5 years',
        requirements: ['Endorsement from a recognized UK body']
      },
      {
        name: 'Student Visa',
        type: 'Study',
        description: 'For students aged 16 or over who have been offered a place on a course.',
        duration: 'Length of the course',
        requirements: ['Confirmation of Acceptance for Studies (CAS)', 'Proof of funds']
      }
    ],
    benefits: [
      'Gateway to Europe and global markets',
      'Free healthcare via the NHS (with immigration health surcharge)',
      'Rich cultural heritage and diverse cities',
      'Post-study work options available for graduates'
    ]
  },
  {
    id: 'au',
    name: 'Australia',
    region: 'Oceania',
    image: '/destinations/australia.png',
    tags: ['Subclass 189', 'Student', 'Working Holiday'],
    description: 'Famous for its incredible weather, relaxed lifestyle, and strong economy, Australia is highly sought after by skilled professionals and students who want a perfect work-life balance.',
    quickFacts: {
      capital: 'Canberra',
      currency: 'AUD ($)',
      language: 'English',
      population: '25 Million',
      climate: 'Diverse (Tropical to Temperate)',
      timeToPR: 'Varies (Points-based system available)'
    },
    keyVisas: [
      {
        name: 'Skilled Independent Visa (Subclass 189)',
        type: 'Permanent Residence',
        description: 'For invited workers with skills the country needs. No sponsor required.',
        duration: 'Permanent',
        requirements: ['Occupation on the skilled occupation list', 'Points test', 'Skills assessment']
      },
      {
        name: 'Student Visa (Subclass 500)',
        type: 'Study',
        description: 'Allows you to stay in Australia to study full-time in a recognized education institution.',
        duration: 'Up to 5 years depending on enrollment',
        requirements: ['Confirmation of Enrolment (CoE)', 'Overseas Student Health Cover']
      },
      {
        name: 'Working Holiday Visa',
        type: 'Work / Travel',
        description: 'For young adults who want an extended holiday and to work to fund it.',
        duration: '12 months (extensions possible)',
        requirements: ['Age 18-30 (or 35 for some countries)', 'Eligible passport']
      }
    ],
    benefits: [
      'Excellent work-life balance and high minimum wage',
      'World-class healthcare system (Medicare)',
      'Beautiful climate and incredible natural environments',
      'Strong education sector'
    ]
  },
  {
    id: 'de',
    name: 'Germany',
    region: 'Europe',
    image: '/destinations/germany.png',
    tags: ['EU Blue Card', 'Job Seeker', 'Study'],
    description: 'As the economic powerhouse of Europe, Germany offers robust engineering, automotive, and tech sectors. It provides an incredible standard of living and acts as a gateway to the entire Schengen Area.',
    quickFacts: {
      capital: 'Berlin',
      currency: 'Euro (€)',
      language: 'German',
      population: '83 Million',
      climate: 'Temperate',
      timeToPR: 'Usually 4-5 years (33 months or less on an EU Blue Card)'
    },
    keyVisas: [
      {
        name: 'EU Blue Card',
        type: 'Work',
        description: 'A residence permit for highly qualified non-EU nationals.',
        duration: 'Up to 4 years',
        requirements: ['University degree', 'Job offer with minimum salary threshold']
      },
      {
        name: 'Job Seeker Visa',
        type: 'Work',
        description: 'Allows skilled professionals to enter Germany for up to 6 months to look for a job.',
        duration: '6 months',
        requirements: ['Recognized degree', 'Proof of funds to support yourself']
      },
      {
        name: 'Student Visa',
        type: 'Study',
        description: 'For international students wishing to study at German universities.',
        duration: 'Duration of studies',
        requirements: ['Admission letter from university', 'Blocked account for financial proof']
      }
    ],
    benefits: [
      'Low or zero tuition fees at public universities',
      'Excellent public transportation and infrastructure',
      'Strong worker protections and benefits',
      'Freedom of movement within the Schengen Area'
    ]
  },
  {
    id: 'sg',
    name: 'Singapore',
    region: 'Asia',
    image: '/destinations/singapore.png',
    tags: ['Employment Pass', 'S Pass', 'EntrePass'],
    description: 'A global financial hub and one of the safest countries in the world. Singapore is a melting pot of cultures, offering incredibly low tax rates and high-paying roles in finance, tech, and logistics.',
    quickFacts: {
      capital: 'Singapore',
      currency: 'SGD ($)',
      language: 'English, Malay, Mandarin, Tamil',
      population: '5.6 Million',
      climate: 'Tropical',
      timeToPR: 'Varies (Can apply after holding a work pass for a period)'
    },
    keyVisas: [
      {
        name: 'Employment Pass (EP)',
        type: 'Work',
        description: 'For foreign professionals, managers, and executives.',
        duration: 'Up to 2 years for first-time candidates, renewable',
        requirements: ['Minimum qualifying salary', 'Acceptable qualifications']
      },
      {
        name: 'S Pass',
        type: 'Work',
        description: 'For mid-level skilled staff.',
        duration: 'Up to 2 years, renewable',
        requirements: ['Minimum qualifying salary', 'Degree or diploma']
      },
      {
        name: 'EntrePass',
        type: 'Business',
        description: 'For eligible foreign entrepreneurs wanting to start and operate a new business in Singapore.',
        duration: '1 year initially, renewable',
        requirements: ['Innovative business idea backed by recognized investors or government grants']
      }
    ],
    benefits: [
      'Incredibly safe and clean environment',
      'Very low personal income tax rates',
      'Strategic location for business in Asia',
      'World-class dining, transport, and healthcare'
    ]
  },
  {
    id: 'nz',
    name: 'New Zealand',
    region: 'Oceania',
    image: '/destinations/nz.png',
    tags: ['Skilled Migrant', 'Student', 'Work'],
    description: 'Known for its breathtaking landscapes and friendly locals, New Zealand offers a peaceful lifestyle with strong communities and a growing tech sector.',
    quickFacts: {
      capital: 'Wellington',
      currency: 'NZD ($)',
      language: 'English, Māori, NZ Sign Language',
      population: '5 Million',
      climate: 'Temperate',
      timeToPR: 'Varies based on visa category'
    },
    keyVisas: [
      {
        name: 'Skilled Migrant Category Resident Visa',
        type: 'Permanent Residence',
        description: 'For people with the skills, qualifications, and experience New Zealand needs.',
        duration: 'Permanent',
        requirements: ['Points-based system', 'Age 55 or under', 'English proficiency']
      },
      {
        name: 'Essential Skills Work Visa',
        type: 'Work',
        description: 'For workers with a job offer from a New Zealand employer.',
        duration: 'Up to 3 years depending on the skill level',
        requirements: ['Job offer', 'Employer must prove no NZ citizen is available']
      }
    ],
    benefits: [
      'Unmatched natural beauty and outdoor lifestyle',
      'Very safe and politically stable',
      'Friendly and welcoming culture',
      'Excellent education and healthcare'
    ]
  },
  {
    id: 'ie',
    name: 'Ireland',
    region: 'Europe',
    image: '/destinations/ireland.png',
    tags: ['Critical Skills', 'Student', 'General Work'],
    description: 'The European headquarters for many tech giants, Ireland boasts a booming economy, rich culture, and incredible landscapes, making it highly attractive for IT and pharma professionals.',
    quickFacts: {
      capital: 'Dublin',
      currency: 'Euro (€)',
      language: 'English, Irish',
      population: '5 Million',
      climate: 'Temperate Maritime',
      timeToPR: 'Usually 5 years (2 years on Critical Skills)'
    },
    keyVisas: [
      {
        name: 'Critical Skills Employment Permit',
        type: 'Work',
        description: 'For highly skilled professionals in shortage occupations, primarily in tech and engineering.',
        duration: '2 years, then eligible for Stamp 4 (unrestricted work)',
        requirements: ['Job offer of €38,000+ (for specific roles) or €64,000+']
      },
      {
        name: 'General Employment Permit',
        type: 'Work',
        description: 'Allows individuals to work in occupations that are not on the ineligible list.',
        duration: 'Up to 2 years initially, renewable',
        requirements: ['Job offer of €34,000+', 'Labor market needs test']
      }
    ],
    benefits: [
      'Only native English-speaking country in the EU',
      'Hub for massive tech companies (Google, Meta, Apple)',
      'Fast track to permanent residency for critical skills',
      'Vibrant culture and high quality of life'
    ]
  }
];
