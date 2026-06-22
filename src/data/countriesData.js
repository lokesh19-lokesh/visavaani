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
      },
      {
        name: 'L-1 Visa',
        type: 'Work (Intra-company)',
        description: 'For temporary intracompany transferees who work in managerial positions or have specialized knowledge.',
        duration: 'Up to 7 years for managers/executives, 5 years for specialized knowledge',
        requirements: ['Must have worked for the company abroad for 1 continuous year within the last 3 years']
      },
      {
        name: 'B-1/B-2 Visa',
        type: 'Visitor',
        description: 'Temporary visa for business (B-1) or tourism/medical treatment (B-2).',
        duration: 'Usually up to 6 months per entry',
        requirements: ['Proof of intent to return to home country', 'Sufficient funds for the trip']
      },
      {
        name: 'J-1 Visa',
        type: 'Exchange Visitor',
        description: 'For individuals approved to participate in work-and study-based exchange visitor programs.',
        duration: 'Varies by program (weeks to years)',
        requirements: ['Certificate of Eligibility (DS-2019)', 'Sponsorship by an approved organization']
      },
      {
        name: 'EB-1/EB-2/EB-3',
        type: 'Permanent Residence',
        description: 'Employment-based green cards ranging from extraordinary ability (EB-1) to skilled workers (EB-3).',
        duration: 'Permanent',
        requirements: ['Labor certification (PERM) usually required for EB-2/EB-3', 'Employer sponsorship for most categories']
      },
      {
        name: 'K-1 Visa',
        type: 'Family',
        description: 'For foreign-citizen fiancés of US citizens to enter the US and marry within 90 days.',
        duration: '90 days (must marry and adjust status)',
        requirements: ['US citizen sponsor', 'Intention to marry within 90 days of arrival']
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
      },
      {
        name: 'Start-up Visa Program',
        type: 'Business',
        description: 'For immigrant entrepreneurs with the skills and potential to build businesses in Canada.',
        duration: 'Permanent',
        requirements: ['Qualifying business', 'Letter of support from a designated organization', 'Language requirements']
      },
      {
        name: 'Global Talent Stream',
        type: 'Work',
        description: 'Fast-track work permit processing for highly skilled talent, particularly in tech.',
        duration: 'Up to 2 years, renewable',
        requirements: ['Job offer from a designated employer', 'Specific high-demand occupations']
      },
      {
        name: 'Family Sponsorship',
        type: 'Permanent Residence',
        description: 'Allows citizens and PRs to sponsor their relatives, including spouses, partners, children, and parents.',
        duration: 'Permanent',
        requirements: ['Eligible Canadian sponsor', 'Proof of relationship', 'Financial undertaking']
      },
      {
        name: 'Visitor Visa (Temporary Resident Visa)',
        type: 'Visitor',
        description: 'Allows foreign nationals to enter Canada for tourism, visiting family, or business.',
        duration: 'Usually up to 6 months per entry',
        requirements: ['Valid travel document', 'Proof of ties to home country']
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
      },
      {
        name: 'Youth Mobility Scheme Visa',
        type: 'Work / Travel',
        description: 'For young people from participating countries to live and work in the UK.',
        duration: 'Up to 2 years (3 years for some nationalities)',
        requirements: ['Age 18-30 (or 35 for some countries)', 'Specific nationalities only', 'Savings requirement']
      },
      {
        name: 'Innovator Founder Visa',
        type: 'Business',
        description: 'For entrepreneurs looking to set up and run an innovative business in the UK.',
        duration: 'Up to 3 years, renewable',
        requirements: ['Innovative, viable, and scalable business idea', 'Endorsement from an approved body']
      },
      {
        name: 'Family Visa',
        type: 'Family',
        description: 'To live with a family member (spouse, partner, child, parent) in the UK.',
        duration: 'Typically 2 years and 9 months initially',
        requirements: ['Proof of relationship', 'Financial requirements', 'English language proficiency']
      },
      {
        name: 'Standard Visitor Visa',
        type: 'Visitor',
        description: 'For tourism, business, study (up to 6 months), and other permitted activities.',
        duration: 'Up to 6 months',
        requirements: ['Intention to leave at the end of visit', 'Sufficient funds for the stay']
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
        name: 'Working Holiday Visa (Subclass 417/462)',
        type: 'Work / Travel',
        description: 'For young adults who want an extended holiday and to work to fund it.',
        duration: '12 months (extensions possible)',
        requirements: ['Age 18-30 (or 35 for some countries)', 'Eligible passport']
      },
      {
        name: 'Temporary Skill Shortage Visa (Subclass 482)',
        type: 'Work',
        description: 'Enables employers to address labor shortages by bringing in skilled workers where they cannot source an appropriately skilled Australian.',
        duration: 'Up to 2 or 4 years depending on the occupation list',
        requirements: ['Sponsorship by approved employer', 'Nomination for a skilled position', 'Relevant skills and experience']
      },
      {
        name: 'Employer Nomination Scheme (Subclass 186)',
        type: 'Permanent Residence',
        description: 'Allows skilled workers, who are nominated by their employer, to live and work in Australia permanently.',
        duration: 'Permanent',
        requirements: ['Nomination by an approved Australian employer', 'Age under 45', 'Skills assessment']
      },
      {
        name: 'Partner Visa (Subclasses 820/801 or 309/100)',
        type: 'Family',
        description: 'Allows the partner or spouse of an Australian citizen, PR, or eligible New Zealand citizen to live in Australia.',
        duration: 'Temporary leading to Permanent',
        requirements: ['Sponsorship by eligible partner', 'Proof of genuine and ongoing relationship']
      },
      {
        name: 'Visitor Visa (Subclass 600)',
        type: 'Visitor',
        description: 'For visiting Australia for tourism, business visitor activities, or visiting family.',
        duration: 'Usually 3, 6, or 12 months',
        requirements: ['Genuine intention to stay temporarily', 'Sufficient funds for the stay']
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
      },
      {
        name: 'Freelance Visa (Freiberufler)',
        type: 'Work',
        description: 'For self-employed individuals in liberal professions.',
        duration: 'Up to 3 years, renewable',
        requirements: ['Proof of professional qualifications', 'Business plan and financing']
      },
      {
        name: 'Family Reunion Visa',
        type: 'Family',
        description: 'Allows spouses, children, and other family members to join a resident in Germany.',
        duration: 'Tied to the primary resident\'s visa',
        requirements: ['Proof of relationship', 'Basic German language skills (often required)']
      },
      {
        name: 'Schengen Visa',
        type: 'Visitor',
        description: 'For tourism, visiting family/friends, or short business trips across the Schengen Area.',
        duration: 'Up to 90 days within a 180-day period',
        requirements: ['Travel insurance', 'Proof of accommodation and funds']
      },
      {
        name: 'Opportunity Card (Chancenkarte)',
        type: 'Work',
        description: 'A points-based system for job seekers to enter Germany and look for employment.',
        duration: 'Up to 1 year',
        requirements: ['Vocational qualification or degree', 'Sufficient points based on language, experience, and age']
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
      },
      {
        name: 'Personalised Employment Pass (PEP)',
        type: 'Work',
        description: 'For high-earning professionals. It is not tied to an employer.',
        duration: 'Up to 3 years, non-renewable',
        requirements: ['Last drawn fixed monthly salary of at least SGD 22,500']
      },
      {
        name: 'Dependent\'s Pass (DP)',
        type: 'Family',
        description: 'For spouses and children of EP or S Pass holders.',
        duration: 'Tied to the validity of the main pass holder',
        requirements: ['Main pass holder must meet a minimum fixed monthly salary']
      },
      {
        name: 'Student\'s Pass',
        type: 'Study',
        description: 'For international students pursuing full-time studies in Singapore.',
        duration: 'Duration of the course',
        requirements: ['Acceptance into an approved full-time course']
      },
      {
        name: 'Short-Term Visit Pass',
        type: 'Visitor',
        description: 'For tourists, social visits, or short business meetings.',
        duration: 'Up to 30 or 90 days',
        requirements: ['Valid passport', 'Onward/return ticket']
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
        name: 'Accredited Employer Work Visa',
        type: 'Work',
        description: 'For workers with a job offer from an accredited New Zealand employer.',
        duration: 'Up to 3-5 years depending on the role',
        requirements: ['Job offer from an accredited employer', 'Meet skills and wage thresholds']
      },
      {
        name: 'Student Visa',
        type: 'Study',
        description: 'To study full-time in New Zealand.',
        duration: 'Length of study program',
        requirements: ['Offer of place from an approved education provider', 'Evidence of funds']
      },
      {
        name: 'Working Holiday Visa',
        type: 'Work / Travel',
        description: 'For young people from participating countries to travel and work.',
        duration: 'Up to 12 or 23 months',
        requirements: ['Age 18-30 (or 35 for some countries)', 'Meet health and character requirements']
      },
      {
        name: 'Partner of a New Zealander Resident Visa',
        type: 'Family',
        description: 'For partners of New Zealand citizens or residents to live permanently.',
        duration: 'Permanent',
        requirements: ['Proof of living together in a genuine and stable relationship for at least 12 months']
      },
      {
        name: 'Visitor Visa',
        type: 'Visitor',
        description: 'For holidaying, sightseeing, or visiting family and friends.',
        duration: 'Up to 9 months',
        requirements: ['Genuine intent to visit temporarily', 'Sufficient funds']
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
      },
      {
        name: 'Student Visa (Stamp 2)',
        type: 'Study',
        description: 'For full-time degree-level study.',
        duration: 'Duration of the course (allows 20 hours/week work)',
        requirements: ['Letter of acceptance from an Irish institution', 'Proof of fee payment and funds']
      },
      {
        name: 'Working Holiday Visa',
        type: 'Work / Travel',
        description: 'For youth from certain countries to work and travel.',
        duration: 'Up to 1 or 2 years',
        requirements: ['Specific age ranges and nationalities', 'Sufficient funds']
      },
      {
        name: 'Stamp 4 (Long Term Residency / Spouse)',
        type: 'Permanent Residence',
        description: 'Permission to reside and work without an employment permit.',
        duration: 'Varies, often renewable leading to citizenship',
        requirements: ['Spouse/partner of an Irish citizen OR held a Critical Skills permit for 2 years']
      },
      {
        name: 'Short Stay \'C\' Visa',
        type: 'Visitor',
        description: 'For tourism, business meetings, or visiting family for a short period.',
        duration: 'Up to 90 days',
        requirements: ['Strong ties to home country', 'Sufficient funds for the stay']
      }
    ],
    benefits: [
      'Only native English-speaking country in the EU',
      'Hub for massive tech companies (Google, Meta, Apple)',
      'Fast track to permanent residency for critical skills',
      'Vibrant culture and high quality of life'
    ]
  },
  {
    id: 'ae',
    name: 'United Arab Emirates (Dubai)',
    region: 'Middle East',
    image: '/destinations/dubai.png',
    tags: ['Golden Visa', 'Work', 'Investor'],
    description: 'Dubai is a global hub for business, tourism, and innovation. With its tax-free income, modern infrastructure, and diverse expatriate community, it offers excellent opportunities for professionals and entrepreneurs.',
    quickFacts: {
      capital: 'Abu Dhabi',
      currency: 'AED (د.إ)',
      language: 'Arabic, English',
      population: '9.4 Million',
      climate: 'Desert',
      timeToPR: 'Golden Visa offers long-term residency (up to 10 years)'
    },
    keyVisas: [
      {
        name: 'Golden Visa',
        type: 'Long-term Residency',
        description: 'For investors, entrepreneurs, specialized talents and researchers.',
        duration: '5 or 10 years, renewable',
        requirements: ['Significant investment or exceptional talent/qualifications']
      },
      {
        name: 'Standard Work Visa',
        type: 'Work',
        description: 'For individuals employed by a company in the UAE.',
        duration: 'Usually 2 years, renewable',
        requirements: ['Employment contract', 'Sponsorship from employer']
      },
      {
        name: 'Freelance Visa',
        type: 'Work',
        description: 'Allows self-employed professionals to live and work in the UAE.',
        duration: '1 to 5 years',
        requirements: ['Freelance permit from a free zone', 'Proof of income']
      },
      {
        name: 'Green Visa',
        type: 'Work / Residency',
        description: 'For skilled employees, freelancers, and investors to reside without a sponsor.',
        duration: '5 years',
        requirements: ['Bachelor\'s degree', 'Minimum salary threshold']
      },
      {
        name: 'Tourist / Visit Visa',
        type: 'Visitor',
        description: 'For short-term tourism, exploring business opportunities, or visiting relatives.',
        duration: '30 to 60 days',
        requirements: ['Passport valid for 6 months', 'Confirmed return ticket']
      },
      {
        name: 'Student Visa',
        type: 'Study',
        description: 'For international students enrolling in UAE universities or colleges.',
        duration: '1 year, renewable (Outstanding students may get a 5-year visa)',
        requirements: ['Admission letter from an accredited institution']
      },
      {
        name: 'Retirement Visa',
        type: 'Residency',
        description: 'For retired individuals wishing to live in the UAE.',
        duration: '5 years, renewable',
        requirements: ['Over 55 years old', 'Specific financial criteria (savings, property, or income)']
      }
    ],
    benefits: [
      'Tax-free personal income',
      'High standard of living and world-class infrastructure',
      'Strategic location connecting East and West',
      'Incredibly safe and multicultural environment'
    ]
  }
];
