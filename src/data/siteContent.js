// Central content store for OG Infinitum, sourced from the
// "OG Infinitum Master Content Draft" project document.
// Keep page copy here rather than hard-coded in components.

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Ecosystem', to: '/ecosystem' },
  { label: 'Join Us', to: '/partners' },
  { label: 'Internships', to: '/internships' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Partners', to: '/partners' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Internships', to: '/internships' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const resourceLinks = ['Latest Blogs', 'Career Trends', 'Success Stories', 'Research', 'Reports']

export const brand = {
  name: 'OG Infinitum',
  positioning: "India's Integrated Student Development Ecosystem",
  promise:
    'Where learners discover themselves, develop future-ready capabilities, connect with opportunities, and build meaningful careers, with guidance that lasts a lifetime.',
  journey: ['Discover', 'Decide', 'Develop', 'Experience', 'Launch', 'Lead'],
  pillarNames: [
    'OG CareerX',
    'OG Skills Hub',
    'OG Mentors Circle',
    'OG Certify',
    'OG InternX',
    'OG Placements',
    'Overseas Gateway',
    'OG Parent Connect',
  ],
  keyMessage: "We don't just help students choose a course. We help them build a career.",
  mission: 'To help students move from confusion to career through education, skills, mentorship, and opportunity.',
  promiseLines: ['From Potential to Purpose.', 'From Learning to Leadership.', 'From Education to Employability.'],
}

export const home = {
  hero: {
    eyebrow: "India's Integrated Student Development Ecosystem",
    headline: 'Discover. Develop. Experience. Achieve.',
    subheading:
      "OG Infinitum is building India's most comprehensive student development ecosystem, empowering learners through career discovery, skill development, mentorship, certifications, internships, placements, global education, and parent engagement.",
    ctas: [
      { label: 'Explore Our Ecosystem', to: '/ecosystem', variant: 'primary' },
      { label: 'Become a Partner', to: '/partners', variant: 'outline' },
      { label: 'Start Your Journey', to: '/contact', variant: 'ghost' },
    ],
  },
  why: {
    heading: 'Why OG Infinitum Exists',
    positioning: "India's Integrated Student Development Ecosystem",
    statements: ['Every Student Has Potential.', 'Every Potential Deserves Direction.'],
    triad: 'The Strength to Learn. The Wisdom to Grow. The Potential to Go Beyond.',
    body:
      'OG Infinitum is a modern Gurukul for limitless growth, an integrated ecosystem that nurtures the inner potential of every learner through education, mentorship, practical skills, real-world experiences, and meaningful opportunities.',
    whyTitle: 'Why OG Infinitum?',
    whyCopy: [
      'Because students need more than education alone. They need clarity in their choices, guidance to discover their potential, skills to navigate challenges, mentors to support their growth, and opportunities to apply what they learn.',
      'We connect the stages of student development into one integrated journey.',
    ],
    problemTitle: 'The Problem We Aim to Solve',
    problems: [
      { title: 'Lack of Career Clarity', body: 'Students often struggle to identify their strengths, interests, and suitable pathways.' },
      { title: 'The Skills Gap', body: 'Academic knowledge does not always translate into practical skills, confidence, and communication.' },
      { title: 'Limited Guidance and Exposure', body: 'Students need mentors, practical experiences, and informed support from parents and educators.' },
      { title: 'Fragmented Opportunities', body: 'Career guidance, skills, certifications, internships, and employment support are often disconnected.' },
    ],
  },
  ecosystemHeading: 'One Connected Ecosystem',
  ecosystemSubhead:
    'Through our eight pillars, OG Infinitum aims to support learners from self-discovery to education, skill development, real-world experience, and career progression, with parents as active partners in the journey.',
  cards: [
    { slug: 'careerx', name: 'OG CareerX', tag: 'Career Discovery & Planning', body: 'Helping learners understand themselves before choosing their future.' },
    { slug: 'skills-hub', name: 'OG Skills Hub', tag: 'Future Skills', body: "Building competencies for tomorrow's workforce." },
    { slug: 'mentors-circle', name: 'OG Mentors Circle', tag: 'Expert Mentorship', body: 'Learning through guidance from professionals and industry leaders.' },
    { slug: 'certify', name: 'OG Certify', tag: 'Professional Certifications', body: 'Industry-recognized credentials that strengthen careers.' },
    { slug: 'internx', name: 'OG InternX', tag: 'Industry Experience', body: 'Connecting education with practical workplace exposure.' },
    { slug: 'placements', name: 'OG Placements', tag: 'Career Launch', body: 'Preparing learners for meaningful employment.' },
    { slug: 'overseas-gateway', name: 'Overseas Gateway', tag: 'Global Education', body: 'Opening doors to world-class universities and international careers.' },
    { slug: 'parent-connect', name: 'OG Parent Connect', tag: 'Family Engagement', body: "Helping parents become confident partners in every learner's journey." },
  ],
  whyDifferent: [
    'We Don’t Start With Courses. We Start With People.',
    'We Don’t Just Offer Guidance. We Build Confidence.',
    'We Don’t Deliver Individual Services. We Build Connected Experiences.',
    'We Don’t Prepare Students For Exams. We Prepare Learners For Life.',
    'We Don’t Focus On Admissions. We Focus On Outcomes.',
    'We Don’t End With Placement. We Continue With Growth.',
  ],
  impactCounters: [
    'Learners Empowered',
    'Partner Institutions',
    'Industry Mentors',
    'Internships Facilitated',
    'Certifications Delivered',
    'Career Opportunities Created',
    'Global Admissions Supported',
  ],
  sdgs: [
    { n: '4', name: 'Quality Education', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Sustainable_Development_Goal_4.png' },
    { n: '5', name: 'Gender Equality', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Sustainable_Development_Goal_5.png' },
    { n: '8', name: 'Decent Work and Economic Growth', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Sustainable_Development_Goal_8.png' },
    { n: '9', name: 'Industry, Innovation and Infrastructure', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Sustainable_Development_Goal_9.png' },
    { n: '10', name: 'Reduced Inequalities', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Sustainable_Development_Goal_10.png' },
    { n: '17', name: 'Partnerships for the Goals', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Sustainable_Development_Goal_17.png' },
  ],
  partnerCta: {
    heading: 'Partner With Us',
    items: ['Schools', 'Colleges', 'Universities', 'Corporates', 'Government', 'NGOs', 'Training Organizations'],
  },
  testimonialCategories: ['Student', 'Parent', 'Mentor', 'University', 'Employer'],
  insights: resourceLinks,
}

export const about = {
  hero: "India's Integrated Student Development Ecosystem.",
  coreMessage:
    'Today’s students have access to more educational opportunities than ever before, yet many still struggle to make informed career decisions. The challenge is no longer a lack of information. It is a lack of clarity, guidance, and structured support.',
  problem:
    'Many students choose courses based on trends, peer influence, or limited awareness of career options. As a result, they may graduate without the skills, confidence, or industry exposure needed to succeed in a rapidly evolving job market.',
  belief: 'At OG Infinitum, we believe that every student deserves a clear pathway from education to a meaningful career.',
  solution: 'One Journey. Every Stage. Endless Possibilities',
  weHelp: [
    'Discover their strengths and interests',
    'Make informed academic and career decisions',
    'Develop future-ready skills',
    'Gain industry exposure',
    'Build professional confidence',
    'Access quality education opportunities',
    'Achieve meaningful career outcomes',
  ],
  whyDifferent:
    'Unlike organizations that focus solely on admissions, placements, or training, OG Infinitum connects every stage of the learner’s journey into one integrated ecosystem.',
  purpose: "We don't just help students choose a course. We help them build a career.",
  mission:
    'Our mission is to empower every learner with the knowledge, skills, guidance, and opportunities needed to thrive in an ever-changing world and contribute meaningfully to society.',
  promiseLines: ['From Potential to Purpose.', 'From Learning to Leadership.', 'From Education to Employability.'],
  closing:
    'OG Infinitum is committed to building a future where every learner has the clarity, confidence, and capabilities to succeed in education, career, and life.',
}

export const ecosystemPage = {
  hero: 'The Eight Pillars of India’s Integrated Student Development Ecosystem.',
  intro:
    'At OG Infinitum, we believe that a student’s journey cannot be transformed through a single service. Meaningful growth requires an ecosystem where every stage of learning, development, and career progression is connected.',
  support:
    'Our ecosystem is built on Eight Strategic Pillars, each designed to address a critical milestone in a learner’s journey, from self-discovery and skill development to global education, employability, and lifelong success.',
  closing:
    'Together, these pillars create a seamless ecosystem that empowers learners to discover their potential, build future-ready capabilities, and confidently shape their future.',
  journey: [
    { stage: 'Discover', pillar: 'OG CareerX' },
    { stage: 'Develop', pillar: 'OG Skills Hub' },
    { stage: 'Be Guided', pillar: 'OG Mentors Circle' },
    { stage: 'Validate', pillar: 'OG Certify' },
    { stage: 'Experience', pillar: 'OG InternX' },
    { stage: 'Launch', pillar: 'OG Placements' },
    { stage: 'Go Global', pillar: 'Overseas Gateway' },
    { stage: 'Grow Together', pillar: 'OG Parent Connect' },
  ],
  promise: 'With you at every stage.',
}

export const partnersPage = {
  hero: 'Partner With OG Infinitum',
  heroSub: 'Schools, colleges, universities, and organizations. One enquiry.',
  intro:
    'Every institution deserves a partner across the learner journey. Every employer deserves future-ready talent.',
  applyEmail: 'enquireus@oginifinitum.com',
  supportAreas: ['Career guidance', 'Skill development', 'Mentorship', 'Industry exposure', 'Internships', 'Employability', 'Global education pathways'],
  whyPartner: [
    'Expand access to quality education',
    'Improve student employability',
    'Bridge the gap between academia and industry',
    'Enable global opportunities',
    'Foster innovation and entrepreneurship',
    'Create measurable social impact',
    "Support India's education and workforce development goals",
  ],
  whoCanPartner: [
    'Schools',
    'Colleges & Universities',
    'International Universities',
    'Corporate Organizations',
    'Training Organizations',
    'Industry Experts & Mentors',
    'Skill Development & Certification Providers',
    'NGOs & Social Impact Organizations',
    'Financial Institutions',
    'Accommodation & Travel Partners',
    'Technology & Innovation Partners',
  ],
  ecosystemFlow: [
    'Schools', 'Colleges & Universities', 'Career Experts', 'Industry Partners', 'Certification Providers',
    'Internship Partners', 'Employers', 'International Universities', 'Financial Partners',
    'Accommodation & Travel Partners', 'Technology Partners', 'OG Infinitum',
  ],
  whyOrganizations: [
    'Purpose-driven ecosystem',
    'Student-first approach',
    'Integrated education-to-employment model',
    'Strong institutional collaboration',
    'Industry-aligned learning',
    'Scalable partnership opportunities',
    'Focus on measurable learner outcomes',
    'Commitment to quality, transparency, and innovation',
  ],
  models: [
    'Academic Partnerships', 'University Partnerships', 'Corporate Partnerships', 'Internship Partnerships',
    'Recruitment Partnerships', 'Training Partnerships', 'Certification Partnerships', 'Technology Partnerships',
    'CSR & Social Impact Collaborations', 'Research & Innovation Collaborations', 'Government & Institutional Collaborations',
  ],
}

export const counsellorPage = {
  positioning: "Building India's Most Trusted Counsellor Network",
  hero: "Join India's Trusted Counsellor Network",
  heroSub: 'Empowering Counsellors. Transforming Student Futures.',
  intro: 'Behind every confident student is a counsellor who believed in them.',
  networkMessage:
    'At OG Infinitum, we believe counsellors are not just admission advisors, they are educators, mentors, career architects, and changemakers.',
  why: ['Professional development', 'Industry updates', 'Global education insights', 'Peer collaboration', 'Technology', 'Mentorship', 'Career progression', 'Ethical best practices'],
  whoCanJoin: [
    'Career Counsellors', 'Study Abroad Counsellors', 'School Counsellors', 'College Career Services Professionals',
    'Psychologists & Psychometric Professionals', 'Industry Mentors', 'Trainers & Skill Development Experts', 'Educators & Academic Advisors',
  ],
  benefits: ['Professional Recognition', 'Continuous Learning', 'Collaborative Community', 'Career Growth', 'Resources & Tools', 'Make a Greater Impact'],
  journey: ['Join', 'Learn', 'Connect', 'Guide', 'Grow', 'Inspire'],
  commitment:
    'Counsellors are respected for their expertise, equipped with the latest knowledge, connected with meaningful opportunities, supported through continuous learning, and recognized for their contribution to society.',
  vision:
    'To build India’s largest, most trusted, and most impactful network of professional counsellors, united by a shared commitment to ethical guidance, lifelong learning, and student success.',
}

export const institutionsPage = {
  hero: 'For Institutions',
  heroSub: 'Build Better Student Outcomes. Together.',
  coreMessage:
    'Every institution deserves trusted partners who share its commitment to education. Every employer deserves future-ready talent.',
  whoWeServe: ['Schools', 'Colleges & Universities', 'International Universities', 'Corporate Organizations', 'Training Organizations'],
  supportAreas: ['Career guidance', 'Skill development', 'Mentorship', 'Industry exposure', 'Internships', 'Employability', 'Global education pathways'],
  partnershipMessage: 'Build long-term partnerships across the learner journey rather than isolated collaborations.',
}

export const impactPage = {
  hero: 'Our Impact',
  heroSub: 'Creating Opportunities That Lead to Meaningful Outcomes.',
  measurementAreas: [
    'Students counselled', 'Psychometric assessments completed', 'Skill certifications delivered', 'Internships facilitated',
    'Placements supported', 'International admissions enabled', 'Scholarships and education financing facilitated',
    'School, college, and university partnerships', 'Mentors and industry experts engaged',
  ],
  learnerOutcomes: [
    'Make confident career decisions', 'Build future-ready competencies', 'Improve employability', 'Access quality higher education',
    'Explore global opportunities', 'Develop leadership and entrepreneurial skills', 'Become lifelong learners',
  ],
  nationalAlignment: ['NEP 2020', 'Skill India Mission', 'Digital India', 'Startup India', 'Atal Innovation Mission', 'Make in India', 'National Career Service', 'Internationalization of Education'],
  stateAlignment: [
    { state: 'Telangana', focus: 'Youth employability, innovation, digital education, skill development, higher education, startup ecosystem.' },
    { state: 'Andhra Pradesh', focus: 'Higher education, skill development, employment, digital learning, global education, industry readiness.' },
  ],
  sdg: {
    heading: 'SDG Positioning',
    copy: 'OG Infinitum contributes to the objectives of the United Nations Sustainable Development Goals. Primary alignment: SDG 4, with contributions to SDG 5, SDG 8, SDG 9, SDG 10 and SDG 17.',
    note: "We use 'contributes to' / 'aligned with' wording, and do not claim formal government partnership or that OG Infinitum 'achieves' an SDG.",
  },
}

export const resourcesPage = {
  hero: 'Resources & Insights',
  heroSub: 'Knowledge to Help You Move Forward.',
  types: resourceLinks,
  careerContent: ['Career options', 'Course selection', 'Emerging careers', 'Future of work', 'Career planning'],
  studentResources: ['Career Planning Guide', 'Future Skills Handbook', 'Course Selection Workbook', 'Study Planner', 'Emerging Careers eBook'],
  parentResources: ['Parent Career Guide', 'Webinars', 'FAQs about streams and careers'],
  webinars: ['How to Choose the Right Career', 'Emerging Careers After 2030', 'Skills Every Student Needs', 'Choosing a Stream After Class 10'],
}

export const contactPage = {
  hero: 'Start Your Journey',
  heroSub: "Tell us a little about you, and we'll point you to the right pillar of the ecosystem.",
  ctaLanguage: [
    'Start Your Journey', 'Book Your Career Discovery Session', 'Get Your Career Roadmap', 'Download the Career Guide',
    'Join the Webinar', 'Unlock Your Skill Report', 'Explore Career Options',
  ],
  careerXFields: ['Name', 'Class', 'School', 'Mobile Number', 'Email', 'City'],
  quickLinks: [
    { label: 'Book a Parent Guidance Session', to: '/pillars/parent-connect' },
    { label: 'Become a Partner', to: '/partners' },
    { label: 'Become an OG Infinitum Certified Counsellor', to: '/counsellor-network' },
    { label: 'Start Your Career Journey', to: '/pillars/placements' },
    { label: 'Explore Internship Opportunities', to: '/internships' },
    { label: 'Explore Certifications', to: '/pillars/certify' },
    { label: 'Book Your Free Profile Evaluation', to: '/pillars/overseas-gateway' },
  ],
}

export const leadershipPage = {
  founder: {
    name: 'SAI NAGA TANMAI YADAV MELAM',
    role: 'Founder, Career Guidance and Global Education Strategist',
    photo: '/leadership/sathya-bhupathi.jpg',
    photoFocus: '36%',
    paragraphs: [
      'My journey began with a question: Why do so many talented students struggle to identify the right direction for their future?',
      'Having experienced career uncertainty during my own student years and later worked closely with learners across education and career guidance, I began to recognise a recurring challenge. Students often have access to information, but they do not always have the clarity, mentorship, practical skills, and real-world exposure needed to make informed decisions.',
      'That realisation became the foundation of OG Infinitum.',
      'With a background in Electronics and Communication Engineering and professional experience in international education, student counselling, and career guidance, I have developed a strong belief that education must go beyond academic qualifications. Students need a connected support system that helps them discover their strengths, develop relevant capabilities, explore opportunities, and prepare for meaningful careers.',
      'Inspired by the vision of Dr. A.P.J. Abdul Kalam and his emphasis on education, youth empowerment, and nation-building, I envision an India where every learner has access to the guidance and opportunities needed to realise their potential.',
      'Through OG Infinitum, I am working towards building an integrated student development ecosystem that connects career discovery, skill development, mentorship, certifications, internships, placement guidance, global education, and parent engagement.',
      'My vision is simple: to help students move from uncertainty to clarity, from learning to application, and from potential to meaningful progress.',
      "I believe we should not define a student's future for them. We should create an ecosystem that empowers them to discover what they are capable of becoming.",
    ],
  },
  cofounder: {
    name: 'SATHYANARAYANA BHUPATHI',
    role: 'Cofounder, Strategic Growth & Partnerships',
    photo: '/leadership/tanmai-melam.jpg',
    photoFocus: '68%',
    paragraphs: [
      "My journey has always been driven by one simple belief: business is ultimately about people, not just products or profits. Over the past seven years, working across sales, business development, training, and operations, I have had the opportunity to interact with thousands of individuals, students, professionals, institutions, and business partners. Every conversation reinforced one truth: people don't just look for services; they look for someone they can trust, someone who understands their aspirations, and someone who genuinely wants to help them succeed.",
      'That belief became the foundation of my journey with OG Infinitum. I have always believed that meaningful growth begins with empathy, trust, and consistent execution. Whether it is building strategic partnerships, mentoring teams, solving business challenges, or helping students make life-changing decisions, my focus has always been on creating value through honesty, transparency, and long-term relationships.',
      'My vision is to make OG Infinitum a name that people associate with trust, credibility, and genuine service. I want every student, parent, institution, and business partner who connects with us to feel confident that they are working with an organization that puts their interests first. We are not here to simply deliver services. We are here to build lasting relationships, create opportunities, and make a meaningful difference in people\'s lives.',
      'I believe success is never measured only by revenue or growth; it is measured by the trust we earn, the promises we keep, and the lives we positively impact. Through OG Infinitum, I am committed to building an organization where integrity guides every decision, empathy shapes every interaction, and excellence defines every outcome.',
    ],
  },
}

export const internshipPage = {
  applyEmail: 'enquireus@oginifinitum.com',
  hero: 'Internships at OG Infinitum',
  heroSub:
    'Our Mission: To create 100,000 internship opportunities for students by 2032, bridging the gap between academic learning and industry experience while enhancing employability and career readiness.',
  applyTagline: 'Choose your role. Apply once. Start building real experience.',
  rolesHeading: 'Internship roles at OG Infinitum',
  roles: [
    'Web Development Intern',
    'Digital Marketing Intern',
    'Business Development Intern',
    'Graphic Design and Content Creation Intern',
    'HR Intern',
    'Content Creators Intern',
  ],
  intro:
    'OG Infinitum offers this internship to college students and to people who want to build skills by doing the work. Interns learn through live projects, online and on site, and develop conversion skills they can use in real outreach, conversations, and student programmes.',
  facts: [
    { label: 'Type', value: 'Paid' },
    { label: 'Stipend', value: '₹5,000–₹10,000 per month' },
    { label: 'Mode', value: 'Hybrid' },
    { label: 'Duration', value: '3–6 months' },
  ],
  youWill: [
    'Upskill through live projects instead of classroom-only practice',
    'Build conversion skills in real outreach and student conversations',
    'Support programmes, content, and partner coordination',
    'Work with the team online and on site',
  ],
  eligibility: [
    'College students',
    'People who want to upskill through a practical approach',
    'Able to commit for 3 to 6 months',
    'Able to work in a hybrid setup',
  ],
  interests: [
    'Web Development Intern',
    'Digital Marketing Intern',
    'Business Development Intern',
    'Graphic Design and Content Creation Intern',
    'HR Intern',
    'Content Creators Intern',
  ],
}

export const governance = [
  "Support marketing claims with evidence. Do not publish unsupported claims such as 'India's No.1', 'Best Consultancy', '100% Success Rate', 'Guaranteed Admission', 'Guaranteed Visa', 'Guaranteed Placement' or 'Highest Scholarship'.",
  'Use aspirational language for future plans, and clearly explain what OG Infinitum does, what it does not do, how its process works, student responsibilities and eligibility requirements.',
  'For study abroad: admissions are subject to university requirements; visa decisions are made solely by relevant immigration authorities; scholarships depend on university criteria; processing times vary.',
  'Only publish testimonials with permission, and ensure every statistic is defensible.',
  'Differentiate clearly between partner, client, collaborator, member and supporter, and do not imply official or exclusive university representation without authorization.',
  'Do not claim government certification, recognition or accreditation unless it actually exists.',
]
