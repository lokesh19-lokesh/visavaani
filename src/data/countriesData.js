export const countriesData = [
  {
    id: 'us',
    name: 'United States',
    region: 'North America',
    image: '/destinations/usa.png',
    tags: ['H1B', 'F1', 'O1', 'EB-5'],
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
      { name: 'B-1/B-2 Visa', type: 'Visitor', description: 'Temporary visa for business (B-1) or tourism/medical treatment (B-2).', duration: 'Usually up to 6 months per entry', requirements: ['Proof of intent to return to home country', 'Sufficient funds for the trip'] },
      { name: 'F-1 Visa', type: 'Study', description: 'For international students attending academic programs or English language programs.', duration: 'Duration of the study program plus OPT period', requirements: ['Acceptance to an SEVP-approved school', 'Proof of financial support'] },
      { name: 'M-1 Visa', type: 'Study', description: 'For students enrolled in vocational or other nonacademic programs.', duration: 'Up to 1 year', requirements: ['Acceptance to an SEVP-approved school'] },
      { name: 'J-1 Visa', type: 'Exchange', description: 'For individuals approved to participate in work-and study-based exchange visitor programs.', duration: 'Varies by program (weeks to years)', requirements: ['Certificate of Eligibility (DS-2019)', 'Sponsorship by an approved organization'] },
      { name: 'H-1B Visa', type: 'Work', description: 'For specialized professionals with a bachelor\'s degree or higher.', duration: 'Up to 6 years (3 years initial + 3 years extension)', requirements: ['Job offer from a US employer', 'Bachelor\'s degree in related field'] },
      { name: 'H-2A/H-2B Visa', type: 'Work (Seasonal)', description: 'Temporary agricultural (H-2A) or non-agricultural (H-2B) workers.', duration: 'Up to 1 year, extendable', requirements: ['Employer must prove shortage of US workers'] },
      { name: 'L-1A/L-1B Visa', type: 'Work (Transfer)', description: 'For intracompany transferees who work in managerial (L-1A) or specialized knowledge (L-1B) positions.', duration: 'Up to 7 years for L-1A, 5 years for L-1B', requirements: ['Must have worked for the company abroad for 1 continuous year'] },
      { name: 'O-1 Visa', type: 'Talent', description: 'For individuals with extraordinary ability in sciences, arts, education, business, or athletics.', duration: 'Up to 3 years initially, indefinite extensions', requirements: ['Extensive documentation of extraordinary achievements'] },
      { name: 'E-2 Visa', type: 'Investor', description: 'For treaty investors making a substantial investment in a US enterprise.', duration: 'Up to 5 years, indefinitely renewable', requirements: ['Substantial investment', 'Nationality of a treaty country'] },
      { name: 'K-1 Visa', type: 'Family', description: 'For foreign-citizen fiancés of US citizens to enter the US and marry within 90 days.', duration: '90 days (must marry and adjust status)', requirements: ['US citizen sponsor', 'Intention to marry within 90 days of arrival'] },
      { name: 'EB-1 Visa', type: 'PR (Extraordinary)', description: 'First preference employment-based green card for extraordinary ability, outstanding researchers, and executives.', duration: 'Permanent', requirements: ['Proof of extraordinary ability or multinational executive status'] },
      { name: 'EB-2/EB-3 Visa', type: 'PR (Employment)', description: 'Employment-based green cards for advanced degree holders (EB-2) or skilled workers (EB-3).', duration: 'Permanent', requirements: ['Labor certification (PERM)', 'Employer sponsorship'] },
      { name: 'EB-5 Visa', type: 'PR (Investor)', description: 'Immigrant investor program leading to a green card.', duration: 'Permanent', requirements: ['Minimum investment of $800,000 to $1.05M', 'Create at least 10 full-time jobs for US workers'] }
    ],
    benefits: ['Access to the world\'s largest economy', 'High-paying opportunities in tech, healthcare, and finance', 'World-renowned universities and research facilities', 'A highly diverse and multicultural society']
  },
  {
    id: 'ca',
    name: 'Canada',
    region: 'North America',
    image: '/destinations/canada.png',
    tags: ['Express Entry', 'Study', 'High PR Chance'],
    description: 'Canada is globally recognized for its high quality of life, excellent public healthcare, and welcoming attitude toward immigrants.',
    quickFacts: {
      capital: 'Ottawa',
      currency: 'CAD ($)',
      language: 'English, French',
      population: '38 Million',
      climate: 'Varies (Temperate to Subarctic)',
      timeToPR: 'Very fast (Express Entry can take ~6 months)'
    },
    keyVisas: [
      { name: 'Visitor Visa (TRV)', type: 'Visitor', description: 'Allows foreign nationals to enter Canada for tourism or visiting family.', duration: 'Usually up to 6 months per entry', requirements: ['Valid travel document', 'Proof of ties to home country'] },
      { name: 'eTA (Electronic Travel Auth)', type: 'Visitor', description: 'For visa-exempt foreign nationals traveling to Canada by air.', duration: 'Up to 5 years', requirements: ['Eligible passport', 'Short online application'] },
      { name: 'Study Permit', type: 'Study', description: 'Allows international students to study at Designated Learning Institutions (DLIs).', duration: 'Length of study program + 90 days', requirements: ['Letter of acceptance from a DLI', 'Proof of financial support'] },
      { name: 'Post-Graduation Work Permit (PGWP)', type: 'Work', description: 'Open work permit for students who have graduated from an eligible Canadian institution.', duration: 'Up to 3 years depending on program length', requirements: ['Completed an eligible program in Canada'] },
      { name: 'Global Talent Stream', type: 'Work', description: 'Fast-track work permit processing for highly skilled talent, particularly in tech.', duration: 'Up to 2 years, renewable', requirements: ['Job offer from a designated employer'] },
      { name: 'Open Work Permit', type: 'Work', description: 'Allows you to work for any employer in Canada.', duration: 'Varies', requirements: ['Spouse of a skilled worker or student, or specific program eligibility'] },
      { name: 'Express Entry (FSW, CEC, FST)', type: 'PR', description: 'A points-based system for skilled workers looking to settle in Canada permanently.', duration: 'Permanent', requirements: ['Language proficiency test', 'Educational Credential Assessment', 'Work experience'] },
      { name: 'Provincial Nominee Program (PNP)', type: 'PR', description: 'Pathways for workers who have the skills, education and work experience to contribute to a specific Canadian province or territory.', duration: 'Permanent', requirements: ['Nomination by a Canadian province or territory'] },
      { name: 'Start-up Visa Program', type: 'Business / PR', description: 'For immigrant entrepreneurs with the skills and potential to build businesses in Canada.', duration: 'Permanent', requirements: ['Qualifying business', 'Letter of support from a designated organization', 'Language requirements'] },
      { name: 'Family Sponsorship', type: 'PR', description: 'Allows citizens and PRs to sponsor their relatives (spouses, partners, children, parents).', duration: 'Permanent', requirements: ['Eligible Canadian sponsor', 'Proof of relationship', 'Financial undertaking'] }
    ],
    benefits: ['Universal public healthcare system', 'One of the clearest and fastest paths to Permanent Residency and Citizenship', 'Extremely safe and multicultural society', 'High standard of living and excellent education system']
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
      { name: 'Standard Visitor Visa', type: 'Visitor', description: 'For tourism, business meetings, short study, and other permitted activities.', duration: 'Up to 6 months', requirements: ['Intention to leave at the end of visit', 'Sufficient funds for the stay'] },
      { name: 'Student Visa', type: 'Study', description: 'For students aged 16 or over who have been offered a place on a course.', duration: 'Length of the course', requirements: ['Confirmation of Acceptance for Studies (CAS)', 'Proof of funds'] },
      { name: 'Graduate Visa (PSW)', type: 'Work', description: 'Allows international students to stay in the UK to work after graduation.', duration: '2 years (3 years for PhD)', requirements: ['Successfully completed an eligible course at a UK higher education provider'] },
      { name: 'Skilled Worker Visa', type: 'Work', description: 'For individuals with a job offer from an approved UK employer.', duration: 'Up to 5 years before needing to extend or apply for settlement', requirements: ['Job offer from an approved sponsor', 'Minimum salary threshold', 'English proficiency'] },
      { name: 'Global Talent Visa', type: 'Talent', description: 'For leaders or potential leaders in academia, arts and culture, and digital technology.', duration: 'Up to 5 years', requirements: ['Endorsement from a recognized UK body'] },
      { name: 'Youth Mobility Scheme Visa', type: 'Work / Travel', description: 'For young people from participating countries to live and work in the UK.', duration: 'Up to 2 years (3 years for some nationalities)', requirements: ['Age 18-30 (or 35 for some countries)', 'Eligible nationality', 'Savings requirement'] },
      { name: 'Innovator Founder Visa', type: 'Business', description: 'For entrepreneurs looking to set up and run an innovative business in the UK.', duration: 'Up to 3 years, renewable', requirements: ['Innovative, viable, and scalable business idea', 'Endorsement from an approved body'] },
      { name: 'High Potential Individual (HPI) Visa', type: 'Work', description: 'For recent graduates of top global universities outside the UK.', duration: '2 years (3 years for PhD)', requirements: ['Graduated from an eligible global university in the last 5 years'] },
      { name: 'Scale-up Worker Visa', type: 'Work', description: 'For workers recruited by a UK scale-up business.', duration: '2 years', requirements: ['Job offer from approved scale-up company'] },
      { name: 'Family Visa (Spouse/Partner)', type: 'Family', description: 'To live with a family member in the UK.', duration: 'Typically 2 years and 9 months initially', requirements: ['Proof of relationship', 'Financial requirements', 'English language proficiency'] }
    ],
    benefits: ['Gateway to Europe and global markets', 'Free healthcare via the NHS (with immigration health surcharge)', 'Rich cultural heritage and diverse cities', 'Post-study work options available for graduates']
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
      { name: 'Visitor Visa (Subclass 600)', type: 'Visitor', description: 'For visiting Australia for tourism, business visitor activities, or visiting family.', duration: 'Usually 3, 6, or 12 months', requirements: ['Genuine intention to stay temporarily', 'Sufficient funds'] },
      { name: 'eVisitor / ETA (Subclasses 651/601)', type: 'Visitor', description: 'Electronic visas for eligible passport holders visiting for tourism or business.', duration: 'Up to 3 months per visit within 12-month period', requirements: ['Eligible passport'] },
      { name: 'Student Visa (Subclass 500)', type: 'Study', description: 'Allows you to stay in Australia to study full-time in a recognized education institution.', duration: 'Up to 5 years depending on enrollment', requirements: ['Confirmation of Enrolment (CoE)', 'Overseas Student Health Cover'] },
      { name: 'Temporary Graduate Visa (Subclass 485)', type: 'Work', description: 'For international students who have recently graduated from an Australian institution.', duration: 'Between 1.5 to 4 years', requirements: ['Recently completed eligible qualifications in Australia'] },
      { name: 'Working Holiday Visa (Subclass 417/462)', type: 'Work / Travel', description: 'For young adults who want an extended holiday and to work to fund it.', duration: '12 months (extensions up to 3 years possible)', requirements: ['Age 18-30 (or 35 for some countries)', 'Eligible passport'] },
      { name: 'Temporary Skill Shortage Visa (Subclass 482)', type: 'Work', description: 'Enables employers to address labor shortages by bringing in skilled workers.', duration: 'Up to 2 or 4 years depending on the occupation list', requirements: ['Sponsorship by approved employer', 'Nomination for a skilled position', 'Relevant skills and experience'] },
      { name: 'Skilled Independent Visa (Subclass 189)', type: 'PR', description: 'For invited workers with skills the country needs. No sponsor required.', duration: 'Permanent', requirements: ['Occupation on the skilled occupation list', 'Points test', 'Skills assessment'] },
      { name: 'Skilled Nominated Visa (Subclass 190)', type: 'PR', description: 'For skilled workers nominated by a state or territory government.', duration: 'Permanent', requirements: ['Nomination by state/territory', 'Points test', 'Skills assessment'] },
      { name: 'Employer Nomination Scheme (Subclass 186)', type: 'PR', description: 'Allows skilled workers nominated by their employer to live permanently.', duration: 'Permanent', requirements: ['Nomination by an approved Australian employer', 'Age under 45', 'Skills assessment'] },
      { name: 'Business Innovation and Investment (Provisional) Visa (Subclass 188)', type: 'Business', description: 'For investors and entrepreneurs.', duration: 'Provisional leading to Permanent', requirements: ['State nomination', 'Significant investment or business plan'] },
      { name: 'Partner Visa (Subclasses 820/801 or 309/100)', type: 'Family', description: 'Allows the partner or spouse of an Australian citizen or PR to live in Australia.', duration: 'Temporary leading to Permanent', requirements: ['Sponsorship by eligible partner', 'Proof of genuine and ongoing relationship'] }
    ],
    benefits: ['Excellent work-life balance and high minimum wage', 'World-class healthcare system (Medicare)', 'Beautiful climate and incredible natural environments', 'Strong education sector']
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
      timeToPR: 'Usually 4-5 years (33 or 21 months on an EU Blue Card)'
    },
    keyVisas: [
      { name: 'Schengen Visa (Type C)', type: 'Visitor', description: 'For tourism, visiting family/friends, or short business trips across the Schengen Area.', duration: 'Up to 90 days within a 180-day period', requirements: ['Travel insurance', 'Proof of accommodation and funds'] },
      { name: 'Student Visa', type: 'Study', description: 'For international students wishing to study at German universities.', duration: 'Duration of studies', requirements: ['Admission letter from university', 'Blocked account (Sperrkonto) for financial proof'] },
      { name: 'Job Seeker Visa', type: 'Work', description: 'Allows skilled professionals to enter Germany for up to 6 months to look for a job.', duration: 'Up to 6 months', requirements: ['Recognized degree', 'Proof of funds to support yourself'] },
      { name: 'Opportunity Card (Chancenkarte)', type: 'Work', description: 'A points-based system for job seekers to enter Germany and look for employment.', duration: 'Up to 1 year', requirements: ['Vocational qualification or degree', 'Sufficient points based on language, experience, and age'] },
      { name: 'EU Blue Card', type: 'Work', description: 'A residence permit for highly qualified non-EU nationals.', duration: 'Up to 4 years (leads to fast-track PR)', requirements: ['University degree', 'Job offer with minimum salary threshold'] },
      { name: 'Skilled Worker Visa', type: 'Work', description: 'For individuals with vocational training or a degree who have a job offer in Germany.', duration: 'Up to 4 years', requirements: ['Recognized qualification', 'Binding job offer'] },
      { name: 'Freelance Visa (Freiberufler)', type: 'Work / Nomad', description: 'For self-employed individuals in liberal professions (artists, writers, consultants).', duration: 'Up to 3 years, renewable', requirements: ['Proof of professional qualifications', 'Business plan and financing', 'Clients in Germany'] },
      { name: 'Self-Employment Visa', type: 'Business', description: 'For entrepreneurs starting a commercial business in Germany.', duration: 'Up to 3 years', requirements: ['Economic interest or regional need', 'Financing secured'] },
      { name: 'Family Reunion Visa', type: 'Family', description: 'Allows spouses, children, and other family members to join a resident in Germany.', duration: 'Tied to the primary resident\'s visa', requirements: ['Proof of relationship', 'Basic German language skills (often required)'] },
      { name: 'Settlement Permit (Niederlassungserlaubnis)', type: 'PR', description: 'Permanent residency in Germany.', duration: 'Permanent', requirements: ['Held residence permit for multiple years', 'Pension contributions', 'B1 German proficiency'] }
    ],
    benefits: ['Low or zero tuition fees at public universities', 'Excellent public transportation and infrastructure', 'Strong worker protections and benefits', 'Freedom of movement within the Schengen Area']
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
      { name: 'Short-Term Visit Pass', type: 'Visitor', description: 'For tourists, social visits, or short business meetings.', duration: 'Up to 30 or 90 days', requirements: ['Valid passport', 'Onward/return ticket'] },
      { name: 'Student\'s Pass', type: 'Study', description: 'For international students pursuing full-time studies in Singapore.', duration: 'Duration of the course', requirements: ['Acceptance into an approved full-time course'] },
      { name: 'Employment Pass (EP)', type: 'Work', description: 'For foreign professionals, managers, and executives.', duration: 'Up to 2 years, renewable', requirements: ['Minimum qualifying salary (SGD 5,000+)', 'Acceptable qualifications', 'COMPASS framework points'] },
      { name: 'Personalised Employment Pass (PEP)', type: 'Work', description: 'For high-earning professionals. It is not tied to a specific employer.', duration: 'Up to 3 years, non-renewable', requirements: ['Last drawn fixed monthly salary of at least SGD 22,500'] },
      { name: 'S Pass', type: 'Work', description: 'For mid-level skilled staff.', duration: 'Up to 2 years, renewable', requirements: ['Minimum qualifying salary (SGD 3,150+)', 'Degree or diploma', 'Subject to employer quota'] },
      { name: 'Work Permit', type: 'Work', description: 'For semi-skilled workers in construction, manufacturing, marine shipyard, process or services sector.', duration: 'Up to 2 years', requirements: ['From approved source countries', 'Subject to quota and levy'] },
      { name: 'EntrePass', type: 'Business', description: 'For eligible foreign entrepreneurs wanting to start and operate a new business.', duration: '1 year initially, renewable', requirements: ['Innovative business idea backed by recognized investors or government grants'] },
      { name: 'Tech.Pass', type: 'Talent', description: 'For established tech leaders, experts, or founders to drive the tech ecosystem.', duration: '2 years, renewable', requirements: ['Meet 2 of 3 criteria related to salary, experience, or role in a tech company'] },
      { name: 'Dependent\'s Pass (DP)', type: 'Family', description: 'For spouses and children of EP or S Pass holders.', duration: 'Tied to the validity of the main pass holder', requirements: ['Main pass holder must meet a minimum fixed monthly salary (SGD 6,000+)'] },
      { name: 'Permanent Residence (PR)', type: 'PR', description: 'For EP/S Pass holders, investors, or spouses of citizens.', duration: 'Permanent (Re-entry permit required every 5 years)', requirements: ['Work experience in Singapore', 'Economic contribution'] }
    ],
    benefits: ['Incredibly safe and clean environment', 'Very low personal income tax rates', 'Strategic location for business in Asia', 'World-class dining, transport, and healthcare']
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
      { name: 'Visitor Visa / NZeTA', type: 'Visitor', description: 'For holidaying, sightseeing, or visiting family and friends.', duration: 'Up to 9 months', requirements: ['Genuine intent to visit temporarily', 'Sufficient funds'] },
      { name: 'Student Visa', type: 'Study', description: 'To study full-time in New Zealand.', duration: 'Length of study program', requirements: ['Offer of place from an approved education provider', 'Evidence of funds'] },
      { name: 'Post-Study Work Visa', type: 'Work', description: 'For students who have graduated from a New Zealand qualification.', duration: 'Up to 3 years', requirements: ['Completed an acceptable qualification in New Zealand'] },
      { name: 'Working Holiday Visa', type: 'Work / Travel', description: 'For young people from participating countries to travel and work.', duration: 'Up to 12 or 23 months', requirements: ['Age 18-30 (or 35 for some countries)', 'Meet health and character requirements'] },
      { name: 'Accredited Employer Work Visa', type: 'Work', description: 'For workers with a job offer from an accredited New Zealand employer.', duration: 'Up to 5 years depending on the role', requirements: ['Job offer from an accredited employer', 'Meet skills and wage thresholds'] },
      { name: 'Straight to Residence Visa', type: 'PR', description: 'Fast-track residency for highly skilled workers in specific Tier 1 occupations.', duration: 'Permanent', requirements: ['Job offer in eligible Tier 1 green list occupation'] },
      { name: 'Skilled Migrant Category Resident Visa', type: 'PR', description: 'For people with the skills, qualifications, and experience New Zealand needs.', duration: 'Permanent', requirements: ['Points-based system (6 points needed)', 'Age 55 or under', 'English proficiency'] },
      { name: 'Active Investor Plus Visa', type: 'Business', description: 'For investors making acceptable investments in New Zealand.', duration: 'Permanent', requirements: ['Invest up to NZD 15M (weighted based on investment type)'] },
      { name: 'Partner of a New Zealander Resident Visa', type: 'Family', description: 'For partners of New Zealand citizens or residents to live permanently.', duration: 'Permanent', requirements: ['Proof of living together in a genuine and stable relationship for at least 12 months'] }
    ],
    benefits: ['Unmatched natural beauty and outdoor lifestyle', 'Very safe and politically stable', 'Friendly and welcoming culture', 'Excellent education and healthcare']
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
      { name: 'Short Stay \'C\' Visa', type: 'Visitor', description: 'For tourism, business meetings, or visiting family for a short period.', duration: 'Up to 90 days', requirements: ['Strong ties to home country', 'Sufficient funds for the stay'] },
      { name: 'Student Visa (Stamp 2)', type: 'Study', description: 'For full-time degree-level study.', duration: 'Duration of the course (allows 20 hours/week work)', requirements: ['Letter of acceptance from an Irish institution', 'Proof of fee payment and funds'] },
      { name: 'Third Level Graduate Programme (Stamp 1G)', type: 'Work', description: 'Allows graduates to remain in Ireland to look for employment.', duration: '12 to 24 months', requirements: ['Graduated from an Irish higher education institution'] },
      { name: 'Critical Skills Employment Permit (Stamp 1)', type: 'Work', description: 'For highly skilled professionals in shortage occupations, primarily in tech and engineering.', duration: '2 years, then eligible for Stamp 4 (unrestricted work)', requirements: ['Job offer of €38,000+ (for specific roles) or €64,000+'] },
      { name: 'General Employment Permit', type: 'Work', description: 'Allows individuals to work in occupations that are not on the ineligible list.', duration: 'Up to 2 years initially, renewable', requirements: ['Job offer of €34,000+', 'Labor market needs test'] },
      { name: 'Working Holiday Visa', type: 'Work / Travel', description: 'For youth from certain countries to work and travel.', duration: 'Up to 1 or 2 years', requirements: ['Specific age ranges and nationalities', 'Sufficient funds'] },
      { name: 'Immigrant Investor Programme', type: 'Business', description: 'For non-EEA nationals investing in Ireland (Currently closed to new applications, but similar pathways exist).', duration: 'Renewable residency', requirements: ['Significant investment (e.g., €1M in an enterprise)'] },
      { name: 'Start-up Entrepreneur Programme', type: 'Business', description: 'For innovators with funding to start a business in Ireland.', duration: 'Renewable residency', requirements: ['Innovative business idea', '€50,000 in funding'] },
      { name: 'Stamp 4 (Long Term Residency / Spouse)', type: 'PR Equivalent', description: 'Permission to reside and work without an employment permit.', duration: 'Varies, often renewable leading to citizenship', requirements: ['Spouse/partner of an Irish citizen OR held a Critical Skills permit for 2 years'] }
    ],
    benefits: ['Only native English-speaking country in the EU', 'Hub for massive tech companies (Google, Meta, Apple)', 'Fast track to permanent residency for critical skills', 'Vibrant culture and high quality of life']
  },
  {
    id: 'ae',
    name: 'United Arab Emirates (Dubai)',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
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
      { name: 'Tourist / Visit Visa', type: 'Visitor', description: 'For short-term tourism, exploring business opportunities, or visiting relatives.', duration: '30 to 60 days', requirements: ['Passport valid for 6 months', 'Confirmed return ticket'] },
      { name: 'Student Visa', type: 'Study', description: 'For international students enrolling in UAE universities or colleges.', duration: '1 year, renewable (Outstanding students may get a 5-year visa)', requirements: ['Admission letter from an accredited institution'] },
      { name: 'Standard Work Visa', type: 'Work', description: 'For individuals employed by a company in the UAE.', duration: 'Usually 2 years, renewable', requirements: ['Employment contract', 'Sponsorship from employer'] },
      { name: 'Green Visa', type: 'Work / Residency', description: 'For skilled employees, freelancers, and investors to reside without a sponsor.', duration: '5 years', requirements: ['Bachelor\'s degree', 'Minimum salary threshold (AED 15,000)'] },
      { name: 'Freelance Visa / Permit', type: 'Work / Nomad', description: 'Allows self-employed professionals to live and work in the UAE.', duration: '1 to 5 years', requirements: ['Freelance permit from a free zone', 'Proof of income'] },
      { name: 'Virtual Work Residency (Digital Nomad)', type: 'Nomad', description: 'Allows remote workers to live in Dubai while working for an employer outside the UAE.', duration: '1 year, renewable', requirements: ['Proof of employment', 'Minimum monthly income of USD 3,500'] },
      { name: 'Golden Visa', type: 'Long-term Residency', description: 'For investors, entrepreneurs, specialized talents and researchers.', duration: '5 or 10 years, renewable', requirements: ['Significant investment (AED 2M+) or exceptional talent/qualifications'] },
      { name: 'Retirement Visa', type: 'Residency', description: 'For retired individuals wishing to live in the UAE.', duration: '5 years, renewable', requirements: ['Over 55 years old', 'Specific financial criteria (savings AED 1M, property AED 1M, or income AED 15K/mo)'] },
      { name: 'Family Visa', type: 'Family', description: 'Sponsorship for spouses, children, and parents.', duration: 'Tied to sponsor\'s visa validity', requirements: ['Sponsor must meet minimum salary requirement (AED 4,000)'] }
    ],
    benefits: ['Tax-free personal income', 'High standard of living and world-class infrastructure', 'Strategic location connecting East and West', 'Incredibly safe and multicultural environment']
  },
  {
    id: 'bali',
    name: 'Bali (Indonesia)',
    region: 'Asia',
    image: '/destinations/bali.png',
    tags: ['Digital Nomad', 'Tourist', 'Retirement'],
    description: 'Bali is a paradise for digital nomads, tourists, and expats seeking a balanced lifestyle with beautiful beaches, vibrant culture, and affordable living costs.',
    quickFacts: {
      capital: 'Denpasar',
      currency: 'IDR (Rp)',
      language: 'Indonesian, Balinese',
      population: '4.3 Million (Bali)',
      climate: 'Tropical',
      timeToPR: 'Pathways exist but can be complex'
    },
    keyVisas: [
      { name: 'Visa on Arrival (VOA)', type: 'Visitor', description: 'For short tourism and business meetings.', duration: '30 days, extendable once for 30 days', requirements: ['Eligible passport', 'Return ticket'] },
      { name: 'Tourist Visa (B211A)', type: 'Visitor', description: 'For tourism or social visits.', duration: '60 days, renewable up to 180 days', requirements: ['Passport valid for 6 months', 'Proof of funds (usually $2000+)'] },
      { name: 'Multiple Entry Business Visa (D212)', type: 'Business', description: 'For frequent business travelers.', duration: '1 year validity (60 days per stay)', requirements: ['Invitation from Indonesian company'] },
      { name: 'Remote Worker Visa (E33G)', type: 'Digital Nomad', description: 'For digital nomads working for companies outside Indonesia.', duration: 'Up to 1 year', requirements: ['Proof of income ($60k/year)'] },
      { name: 'Second Home Visa', type: 'Long-term', description: 'For foreigners wishing to stay longer and contribute to the economy.', duration: '5 or 10 years', requirements: ['Proof of funds (approx $130k in Indonesian bank)'] },
      { name: 'KITAS (Work Visa)', type: 'Work', description: 'For foreigners employed by an Indonesian company.', duration: '1 year, renewable', requirements: ['Employer sponsorship', 'Specialized skills'] },
      { name: 'Investor KITAS', type: 'Business', description: 'For foreigners investing in an Indonesian PT PMA company.', duration: '1 or 2 years, renewable', requirements: ['Minimum investment amount'] },
      { name: 'Retirement KITAS', type: 'Retirement', description: 'For retirees wanting to spend their golden years in Bali.', duration: '1 year, renewable', requirements: ['Age 55+', 'Proof of pension/income ($1500/mo)'] },
      { name: 'Spouse KITAS', type: 'Family', description: 'For foreigners married to an Indonesian citizen.', duration: '1 year, renewable (leads to KITAP)', requirements: ['Valid marriage certificate'] }
    ],
    benefits: ['Affordable cost of living', 'Vibrant digital nomad community', 'Rich culture and stunning natural beauty', 'Warm tropical climate year-round']
  },
  {
    id: 'maldives',
    name: 'Maldives',
    region: 'South Asia',
    image: '/destinations/maldives.png',
    tags: ['Tourist', 'Luxury', 'Work'],
    description: 'The Maldives is famous for its luxurious water villas and pristine beaches. It is primarily a tourist destination but offers opportunities in the hospitality sector.',
    quickFacts: {
      capital: 'Malé',
      currency: 'MVR (Rf)',
      language: 'Dhivehi, English',
      population: '540,000',
      climate: 'Tropical',
      timeToPR: 'Very difficult, usually requires marriage'
    },
    keyVisas: [
      { name: 'Tourist Visa', type: 'Visitor', description: 'Granted on arrival for all nationalities.', duration: '30 days, extendable up to 90 days', requirements: ['Valid passport', 'Return ticket', 'Confirmed hotel booking'] },
      { name: 'Business Visa', type: 'Business', description: 'For foreign nationals visiting for business purposes.', duration: 'Up to 90 days', requirements: ['Approval from Ministry of Economic Development', 'Sponsor in Maldives'] },
      { name: 'Work Permit / Employment Visa', type: 'Work', description: 'For foreigners employed in the Maldives, usually in tourism/resorts.', duration: '1 year, renewable', requirements: ['Employer sponsorship (Employment Approval)'] },
      { name: 'Dependent Visa', type: 'Family', description: 'For spouses and children of Work Permit holders.', duration: 'Tied to Work Permit', requirements: ['Main applicant must meet salary threshold'] },
      { name: 'Marriage Visa', type: 'Family', description: 'For foreign nationals married to a Maldivian citizen.', duration: '1 year, renewable', requirements: ['Valid marriage registered in Maldives'] },
      { name: 'Corporate Resident Visa', type: 'Investor', description: 'For foreign investors who make a significant investment.', duration: 'Up to 5 years', requirements: ['Invest $1M+ or maintain a significant bank deposit'] }
    ],
    benefits: ['World-class luxury resorts and beaches', 'Excellent diving and marine life', 'Peaceful island lifestyle', 'Tax-free income for expats in most sectors']
  },
  {
    id: 'lk',
    name: 'Sri Lanka',
    region: 'South Asia',
    image: '/destinations/srilanka.png',
    tags: ['Digital Nomad', 'Tourist', 'Study'],
    description: 'Sri Lanka offers rich history, diverse landscapes, and a growing appeal for digital nomads and tourists looking for affordability and adventure.',
    quickFacts: {
      capital: 'Colombo',
      currency: 'LKR (Rs)',
      language: 'Sinhala, Tamil, English',
      population: '22 Million',
      climate: 'Tropical',
      timeToPR: 'Difficult, requires long-term investment or marriage'
    },
    keyVisas: [
      { name: 'Electronic Travel Authorization (ETA)', type: 'Visitor', description: 'For short visits for tourism or business.', duration: '30 days, extendable', requirements: ['Valid passport', 'Return ticket'] },
      { name: 'Tourist Visa (Long Stay)', type: 'Visitor', description: 'Extended visa for long-term tourists.', duration: '90 to 180 days', requirements: ['Valid passport', 'Proof of funds'] },
      { name: 'Digital Nomad Visa', type: 'Nomad', description: 'For remote workers.', duration: '1 year', requirements: ['Proof of remote income (approx $2000/mo)'] },
      { name: 'Residence Visa (Employment)', type: 'Work', description: 'For expats working for an approved organization in Sri Lanka.', duration: '1 year, renewable', requirements: ['Recommendation from relevant Line Ministry'] },
      { name: 'Residence Visa (Investor)', type: 'Business', description: 'For foreign investors making significant monetary contributions.', duration: '1 to 5 years', requirements: ['Invest in BOI approved projects'] },
      { name: 'Residence Visa (Student)', type: 'Study', description: 'For university students and educational trainees.', duration: 'Duration of course', requirements: ['Acceptance letter from a recognized educational institution'] },
      { name: 'My Dream Home Visa', type: 'Retirement', description: 'For senior foreign nationals to retire in Sri Lanka.', duration: '2 years, renewable', requirements: ['Age 55+', 'Deposit of $15,000 + $1,500/mo income'] },
      { name: 'Spouse Visa', type: 'Family', description: 'For foreigners married to Sri Lankan citizens.', duration: '1 year, renewable', requirements: ['Marriage certificate', 'Approval from Controller General'] }
    ],
    benefits: ['Low cost of living', 'Beautiful tea gardens and beaches', 'Rich cultural heritage', 'Welcoming locals']
  },
  {
    id: 'th',
    name: 'Thailand',
    region: 'Southeast Asia',
    image: '/destinations/thailand.png',
    tags: ['Digital Nomad', 'Retirement', 'Work'],
    description: 'Thailand is a premier hub in Southeast Asia, beloved for its food, affordability, and thriving expat and digital nomad communities.',
    quickFacts: {
      capital: 'Bangkok',
      currency: 'THB (฿)',
      language: 'Thai',
      population: '71 Million',
      climate: 'Tropical',
      timeToPR: 'Takes several years, requires language proficiency'
    },
    keyVisas: [
      { name: 'Visa Exemption / VOA', type: 'Visitor', description: 'For short tourism visits for eligible countries.', duration: '30 to 60 days', requirements: ['Valid passport', 'Onward ticket'] },
      { name: 'Tourist Visa (TR)', type: 'Visitor', description: 'For longer tourism purposes.', duration: '60 days, extendable by 30 days', requirements: ['Proof of funds', 'Accommodation details'] },
      { name: 'Destination Thailand Visa (DTV)', type: 'Digital Nomad', description: 'For remote workers, digital nomads, and freelancers.', duration: '5 years validity (180 days per entry, extendable)', requirements: ['Proof of remote work/portfolio', 'Proof of funds (500,000 THB)'] },
      { name: 'Non-Immigrant B Visa', type: 'Work / Business', description: 'For working or conducting business.', duration: '90 days initially, extendable to 1 year with Work Permit', requirements: ['Employer sponsorship', 'Company documents'] },
      { name: 'Non-Immigrant ED Visa', type: 'Study', description: 'For studying at universities, language schools, or Muay Thai camps.', duration: '90 days to 1 year, extendable', requirements: ['Acceptance from recognized institution'] },
      { name: 'Retirement Visa (Non-O / Non-O-A / Non-O-X)', type: 'Retirement', description: 'For retirees aged 50 and over.', duration: '1, 5, or 10 years depending on category', requirements: ['Age 50+', 'Financial proof (e.g., 800,000 THB in bank or pension)'] },
      { name: 'Long-Term Resident (LTR) Visa', type: 'Talent / Investor', description: 'For high-wealth individuals, wealthy pensioners, work-from-Thailand professionals, and highly-skilled professionals.', duration: '10 years', requirements: ['High income or significant investment', 'Health insurance'] },
      { name: 'SMART Visa', type: 'Talent / Tech', description: 'For highly skilled experts, executives, entrepreneurs, and investors in targeted industries.', duration: 'Up to 4 years', requirements: ['High salary', 'Endorsement from Thai government agency'] },
      { name: 'Elite Visa (Thailand Privilege)', type: 'Long-term', description: 'Paid membership program granting long-term residency without work rights.', duration: '5, 10, 15, or 20 years', requirements: ['Payment of membership fee (starts ~900,000 THB)'] },
      { name: 'Marriage Visa (Non-O)', type: 'Family', description: 'For foreigners married to a Thai citizen.', duration: '1 year, renewable', requirements: ['Marriage certificate', 'Proof of income/funds (400,000 THB)'] }
    ],
    benefits: ['Incredible food scene and nightlife', 'Very affordable cost of living', 'Excellent private healthcare facilities', 'Hub for cheap travel across Asia']
  },
  {
    id: 'jp',
    name: 'Japan',
    region: 'Asia',
    image: '/destinations/japan.png',
    tags: ['Work', 'Study', 'Highly Skilled'],
    description: 'Japan blends ultra-modern technology with deep traditional culture. It is an incredibly safe country offering exceptional public transport, food, and growing opportunities for foreign talent.',
    quickFacts: {
      capital: 'Tokyo',
      currency: 'JPY (¥)',
      language: 'Japanese',
      population: '125 Million',
      climate: 'Temperate',
      timeToPR: 'Usually 10 years, can be 1-3 years for highly skilled professionals'
    },
    keyVisas: [
      { name: 'Temporary Visitor Visa', type: 'Visitor', description: 'For tourism, visiting friends/family, or short business trips.', duration: '15, 30, or 90 days', requirements: ['Valid passport', 'Proof of funds', 'Itinerary'] },
      { name: 'Student Visa', type: 'Study', description: 'For studying at Japanese universities or language schools.', duration: '6 months to 2 years, renewable', requirements: ['Certificate of Eligibility (COE)', 'Acceptance by an educational institution'] },
      { name: 'Working Holiday Visa', type: 'Work / Travel', description: 'For youth from participating countries to travel and work.', duration: 'Up to 1 year', requirements: ['Age 18-30', 'Eligible nationality', 'Sufficient funds'] },
      { name: 'Standard Work Visa', type: 'Work', description: 'For various professional categories (Engineer/Humanities/Intl Services).', duration: '1, 3, or 5 years', requirements: ['Job offer from a Japanese company', 'Degree or relevant 10-year experience'] },
      { name: 'Highly Skilled Professional (HSP) Visa', type: 'Talent', description: 'A points-based visa for highly skilled foreign talent offering preferential treatment.', duration: '5 years (leads to PR in 1-3 years)', requirements: ['Meet point threshold (70+ points) based on salary, education, age'] },
      { name: 'Specified Skilled Worker (SSW)', type: 'Work', description: 'For workers in specific industries facing labor shortages (e.g., caregiving, construction).', duration: 'Up to 5 years (SSW1), indefinite (SSW2)', requirements: ['Pass skills test and Japanese language proficiency test'] },
      { name: 'Business Manager Visa', type: 'Business', description: 'For entrepreneurs investing in and managing a business in Japan.', duration: '1, 3, or 5 years', requirements: ['Investment of 5M JPY or hiring 2 full-time employees', 'Office space in Japan'] },
      { name: 'Digital Nomad Visa', type: 'Nomad', description: 'For remote workers of eligible countries.', duration: '6 months (non-renewable consecutively)', requirements: ['Income of at least 10M JPY/year', 'Private health insurance'] },
      { name: 'Spouse or Child of Japanese National Visa', type: 'Family', description: 'For family members of Japanese citizens.', duration: '1, 3, or 5 years', requirements: ['Valid marriage or birth records', 'Guarantor in Japan'] },
      { name: 'Permanent Residence', type: 'PR', description: 'Permanent right to live and work in Japan.', duration: 'Permanent', requirements: ['Continuous residence (usually 10 years, less for HSP)', 'Good conduct', 'Financial stability'] }
    ],
    benefits: ['World-class public transportation system', 'Exceptional safety and cleanliness', 'Rich cultural heritage and amazing cuisine', 'Fast-track to PR for highly skilled workers']
  },
  {
    id: 'cn',
    name: 'China',
    region: 'Asia',
    image: '/destinations/china.png',
    tags: ['Work', 'Business', 'Study'],
    description: 'China is a global economic powerhouse with rapidly advancing tech sectors. It offers unique opportunities for business, teaching, and experiencing a rapidly modernizing society.',
    quickFacts: {
      capital: 'Beijing',
      currency: 'CNY (¥)',
      language: 'Mandarin',
      population: '1.4 Billion',
      climate: 'Diverse',
      timeToPR: 'Very difficult, usually reserved for exceptional talent or significant investors'
    },
    keyVisas: [
      { name: 'L Visa (Tourist)', type: 'Visitor', description: 'For individuals visiting China for tourism.', duration: 'Usually 30-90 days per entry', requirements: ['Round-trip tickets', 'Hotel reservations or invitation letter'] },
      { name: 'M Visa (Business)', type: 'Business', description: 'For commercial and trade activities.', duration: '30-90 days per entry', requirements: ['Invitation letter from a Chinese trade partner'] },
      { name: 'F Visa (Non-commercial Exchange)', type: 'Visitor', description: 'For research, lectures, scientific, and cultural exchanges.', duration: 'Varies', requirements: ['Invitation from a relevant Chinese entity'] },
      { name: 'X1 / X2 Visa (Student)', type: 'Study', description: 'For long-term (X1) or short-term (X2) study.', duration: 'X2: <180 days, X1: >180 days (must convert to Residence Permit)', requirements: ['Admission notice (JW201/JW202 form)'] },
      { name: 'Z Visa (Work)', type: 'Work', description: 'For foreigners coming to China for employment.', duration: '30 days to enter, must apply for Residence Permit', requirements: ['Foreigner\'s Work Permit Notice'] },
      { name: 'R Visa (Highly Qualified Talent)', type: 'Talent', description: 'For high-level foreign talents and professionals urgently needed in China.', duration: 'Multiple entry up to 5-10 years (180 days per stay)', requirements: ['Certification as a High-Level Talent'] },
      { name: 'Q1 / Q2 Visa (Family Reunion)', type: 'Family', description: 'For visiting Chinese citizens or foreigners with PR in China.', duration: 'Q1: Long-term (requires Residence Permit), Q2: Short-term', requirements: ['Proof of family relationship', 'Invitation letter'] },
      { name: 'S1 / S2 Visa (Private Affairs)', type: 'Family', description: 'For visiting family members working or studying in China (non-Chinese citizens).', duration: 'S1: Long-term, S2: Short-term', requirements: ['Proof of relationship', 'Sponsor\'s passport and residence permit'] },
      { name: 'C Visa (Crew)', type: 'Transit / Crew', description: 'For international transport crew members.', duration: 'Varies', requirements: ['Guarantee letter from transport company'] },
      { name: 'G Visa (Transit)', type: 'Transit', description: 'For transiting through China.', duration: 'Varies', requirements: ['Onward ticket to a third country'] },
      { name: 'Chinese Permanent Resident Card (Green Card)', type: 'PR', description: 'Permanent residency for high-level experts, significant investors, or family reunion.', duration: 'Permanent (Renewable every 10 years)', requirements: ['Exceptional contribution, massive investment, or long-term marriage'] }
    ],
    benefits: ['Massive market with significant business opportunities', 'Rich history spanning thousands of years', 'Modern infrastructure and high-speed rail', 'High demand for foreign language teachers and specific technical skills']
  },
  {
    id: 'ru',
    name: 'Russia',
    region: 'Europe/Asia',
    image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?auto=format&fit=crop&w=800&q=80',
    tags: ['Study', 'Work', 'Culture'],
    description: 'Russia is the largest country in the world, known for its rich history, incredible architecture, and growing opportunities in education and specific work sectors.',
    quickFacts: {
      capital: 'Moscow',
      currency: 'RUB (₽)',
      language: 'Russian',
      population: '143 Million',
      climate: 'Continental',
      timeToPR: 'Varies, usually 5 years'
    },
    keyVisas: [
      { name: 'Tourist Visa', type: 'Visitor', description: 'For tourism.', duration: '30 days', requirements: ['Invitation letter'] },
      { name: 'Student Visa', type: 'Study', description: 'To study at a Russian university.', duration: 'Length of study', requirements: ['University acceptance'] }
    ],
    benefits: ['Rich culture and history', 'Affordable higher education', 'Unique travel experiences']
  },
  {
    id: 'ch',
    name: 'Switzerland',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    tags: ['High Salary', 'Tech', 'Finance'],
    description: 'Switzerland is globally renowned for its high quality of life, strong economy, and beautiful Alpine landscapes. It is a hub for finance, pharmaceuticals, and technology.',
    quickFacts: {
      capital: 'Bern',
      currency: 'CHF (Fr)',
      language: 'German, French, Italian',
      population: '8.7 Million',
      climate: 'Temperate/Alpine',
      timeToPR: 'Usually 10 years (5 years for EU/EFTA)'
    },
    keyVisas: [
      { name: 'Schengen Visa (Type C)', type: 'Visitor', description: 'For short stays.', duration: 'Up to 90 days', requirements: ['Proof of funds'] },
      { name: 'National Visa (Type D)', type: 'Work/Study', description: 'For long-term stays.', duration: 'Varies', requirements: ['Job offer or university acceptance'] }
    ],
    benefits: ['Exceptionally high salaries', 'Extremely safe and clean', 'Central European location', 'World-class healthcare and education']
  }
];
