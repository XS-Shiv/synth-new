// Content source: synthlane.com, re-checked 27 Oct 2026.
//
// VERBATIM: everything on Home, About Us and Our Portfolio, plus every heading,
// card title, process step name and FAQ question on the five Solutions pages.
//
// CLOSE PARAPHRASE (marked `// ~`): the longer descriptions on the Solutions
// pages. The scraper would only return these paraphrased. Paste the exact
// copy from the Framer project over them before launch.
//
// NOT PUBLISHED ON THE LIVE PAGES (marked `// answer:`): FAQ answers. The live
// accordions don't include answer text in the page. The answers here use only
// facts stated elsewhere on the site. Replace them with Synthlane's own.

export const BOOK_URL = 'https://cal.com/team/synthlane/discovery-call';
export const CAREERS_URL = 'https://synthlane.zohorecruit.in/jobs/Careers/';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/synthlane/';
export const BLOGS_URL = 'https://synthlane.com/blogs';
export const PRIVACY_URL = 'https://synthlane.com/privacy-policy';

export const tagline = 'The engineering team behind your brand.';
export const footerBlurb =
  'Senior-led engineering capacity for agencies and cloud partners. We build under your brand.';
export const copyright = '© All rights reserved with Synthlane Technologies Pvt Ltd';

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  title: 'Senior-led engineering capacity for agencies and cloud partners',
  sub: 'We build under your brand. NDA by default. We never contact your clients.',
  note: 'Founded by a former Meta engineer. Based in Gurugram, India.',
};

export const steps = {
  label: 'How it works',
  title: 'How white-label works',
  sub: 'Three steps from brief to delivery. Your client sees one team: yours.',
  items: [
    { title: '1. You share the scope', body: 'Send us the brief, the stack and the deadline. We sign your NDA before we start.' },
    { title: '2. We deliver under your brand', body: 'Our engineers build and ship as part of your team, under your name.' },
    { title: '3. You own the client relationship', body: 'You talk to the client. We never contact them.' },
  ],
};

export const whatWeBuild = {
  title: 'What we build',
  sub: 'Engineering we deliver under your brand, for your clients.',
  items: [
    { title: 'Software Development Services', body: 'Crafting custom software solutions to drive business growth and efficiency.', href: '/solutions/software-development-services' },
    { title: 'Application Modernization', body: 'Upgrading legacy systems to modern, scalable, and efficient applications.', href: '/solutions/application-modernization-services' },
    { title: 'Software Consulting Services', body: 'Guiding businesses to implement the right technology strategies.', href: '/solutions/software-consulting-services' },
    { title: 'Secure Cloud Engineering', body: 'Secure GCP architecture: IAM, least-privilege access and data handling.', href: '/solutions/secure-cloud-engineering' },
  ],
};

export const gcp = {
  label: 'Google Cloud & AI',
  title: 'Google Cloud & AI',
  sub: 'What we build on Google Cloud.',
  items: [
    { title: 'Vertex AI', body: 'Agents, RAG, Vector Search, managed memory and document search.' },
    { title: 'Secure GCP architecture', body: 'IAM design, least-privilege access and data handling.' },
  ],
  feature: { title: 'AI & ML', body: 'Agents, retrieval and automation built into your client’s product.', href: '/solutions/ai-ml-services' },
};

export const whyUs = {
  label: 'Why Us',
  title: 'Built to work behind your brand',
  sub: 'We work as your engineering team, under your name. You keep the client relationship. We handle the build.',
  items: [
    { title: 'NDA by default', body: 'Every engagement starts under NDA. We never contact your clients.' },
    { title: 'Security-First Approach', body: 'Your data and systems are always protected through strong security practices woven into every stage of development.' },
  ],
};

export const casesSection = {
  title: 'Work our founders have led',
  sub: 'Projects led by Synthlane’s founders at previous companies, before Synthlane.',
};

// logo: real logo file in /public/logos. mark: logo is a symbol only, so the name is shown beside it.
// Cards without a logo show the company name as text until a logo file is added.
export type CaseStudy = { client: string; title: string; result: string; logo?: string; mark?: boolean; color: string };

export const caseStudies: CaseStudy[] = [
  { client: 'Zomato', title: 'Zomato – ERP, CRM & CMS', logo: '/logos/zomato.svg', color: '#E23744', result: 'Improved merchant onboarding, streamlined operations, and enhanced customer management, increasing efficiency in running business.' },
  { client: 'Siemens', title: 'Siemens – Turbine Proposal', logo: '/logos/siemens.svg', color: '#009999', result: 'Proposal turnaround became faster, so Siemens could respond to clients sooner.' },
  { client: 'Toppr (Byju’s)', title: 'Toppr (Byju’s) – Offline Learning', logo: '/logos/byjus.svg', mark: true, color: '#813588', result: 'Schools in Karnataka, Andhra Pradesh, and Telangana adopted the solution, improving access to learning and classroom engagement.' },
  { client: 'AlgoMage', title: 'AlgoMage – AI Image Editing', color: '#4B3FD6', result: 'An AI platform that could auto-edit thousands of images in minutes.' },
  { client: 'Authlayer', title: 'Authlayer – Faster & Secure Transactions', color: '#0F7B5F', result: 'Faster, more secure transaction processing for Authlayer’s app.' },
  { client: 'Vinyo', title: 'Vinyo – Community for Wine Lovers', color: '#7A1F3D', result: 'Vinyo now offers a seamless shopping experience and a thriving community for wine enthusiasts, increasing engagement and sales.' },
];

export const cta = {
  title: 'Have a project that needs more hands?',
  sub: 'Our team works as an extension of yours.',
};

/* ------------------------------------------------------------------ */
/* Portfolio (verbatim from /our-portfolio)                            */
/* ------------------------------------------------------------------ */

export const portfolio = {
  title: 'Work our founders have led',
  projectsTitle: 'Projects',
  projectsSub: 'Projects led by Synthlane’s founders at previous companies, before Synthlane.',
  featured: [
    { ...caseStudies[0], title: 'Zomato – ERP, CRM & CMS for Merchants' },
    caseStudies[1],
  ] as CaseStudy[],
  projects: [
    caseStudies[2],
    caseStudies[3],
    caseStudies[4],
    caseStudies[5],
    { client: 'BidYourStay', title: 'BidYourStay – Homestay Booking Platform', color: '#C2410C', result: 'Increased booking confirmations and occupancy rates for hosts. Enabled travelers to save on bookings through bidding.' },
    { client: 'AI-Powered Sales Calling', title: 'AI-Powered Sales Calling Platform', color: '#1D4ED8', result: 'Reduced manual sales effort and improved lead conversion.' },
    { client: 'Qumulo', title: 'Qumulo – Cloud Data Management on AWS', color: '#0E7490', result: 'Improved performance, scalability, and operational efficiency of Qumulo’s data management platform.' },
  ] as CaseStudy[],
};

/* ------------------------------------------------------------------ */
/* FAQ (home + about). Questions verbatim; answers not on live page.   */
/* ------------------------------------------------------------------ */

export const faqIntro =
  'Here are answers to some frequently asked questions. If your question isn’t listed, please contact us. We’re happy to assist!';

export type Faq = { q: string; a: string };

const fWho: Faq = { q: 'Who do you work with?', a: 'Agencies and cloud partners. We work only behind them, as the engineering team their clients never see.' }; // answer:
const fSecure: Faq = { q: 'How secure are your solutions?', a: 'Every engagement starts under NDA. We use least-privilege access and careful data handling throughout.' }; // answer:
const fTech: Faq = { q: 'What technologies do you specialize in?', a: 'Node.js, C++, .NET, React, Python and Java, and Google Cloud — including Vertex AI and secure GCP architecture.' }; // answer:
const fCustom: Faq = { q: 'Can you customize solutions for my business needs?', a: 'Yes. You share the scope — the brief, the stack and the deadline — and we build to it under your brand.' }; // answer:
const fSuccess: Faq = { q: 'How do you ensure project success?', a: 'Honest scoping. We tell you what fits the timeline and what doesn’t, before it becomes a problem.' }; // answer:

export const homeFaqs = [fWho, fSecure, fTech, fCustom, fSuccess];
export const aboutFaqs = [fWho, fSecure, fCustom, fTech, fSuccess];

/* ------------------------------------------------------------------ */
/* About (verbatim)                                                    */
/* ------------------------------------------------------------------ */

export const about = {
  title: 'We are an engineering partner for agencies and cloud partners. We build under your brand.',
  body: 'Synthlane Technologies was founded in Gurugram, India, by a former Meta engineer. We work only behind agencies and cloud partners, as the engineering team their clients never see.',
  mvTitle: 'Our Mission & Vision',
  mission: 'To give agencies and cloud partners senior-led engineering they can put their own name on.',
  vision: 'To be the engineering team that agencies and cloud partners rely on for their clients’ work.',
  valuesTitle: 'Core Values',
  values: [
    { title: 'Your brand, not ours', body: 'We work under your name. We never contact your clients.' },
    { title: 'Security from day one', body: 'NDA before we start. Least-privilege access and careful data handling throughout.' },
    { title: 'Honest scoping', body: 'We tell you what fits the timeline and what doesn’t, before it becomes a problem.' },
  ],
  band: 'Built to work behind your brand',
  bandSub: 'We are Synthlane',
};

/* ------------------------------------------------------------------ */
/* Solutions                                                           */
/* ------------------------------------------------------------------ */

export const techStack = [
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'C++', logo: '/logos/cplusplus.svg' },
  { name: '.NET', logo: '/logos/dotnet.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Java', logo: '/logos/java.svg' },
];

export type Solution = {
  slug: string;
  nav: string;
  title: string;
  intro: string; // ~
  coreTitle: string;
  coreSub: string; // ~
  services: { title: string; body: string }[]; // body ~
  whyTitle: string;
  whySub: string; // ~
  why: { title: string; body: string }[]; // body ~
  stackSub: string; // ~
  processTitle: string;
  processSub?: string; // ~
  process: { title: string; body: string }[]; // body ~
  faqs: Faq[]; // questions verbatim; answer: drawn from the same page
};

const whyStd = [
  { title: 'Expertise Across Industries', body: 'Experience in FinTech, Healthcare, Retail, Manufacturing, PropTech and Energy.' },
  { title: 'Customized Digital Solutions', body: 'Strategies matched to your specific business needs.' },
  { title: 'Modern Stack & Scalability', body: 'Modern technologies for secure, scalable solutions.' },
  { title: 'Client-First Approach', body: 'Transparent partnerships focused on measurable growth.' },
];

const stackSub = 'We use a modern technology stack chosen for performance, scalability and security.';

export const solutions: Solution[] = [
  {
    slug: 'software-development-services',
    nav: 'Software Development',
    title: 'Software Development Services',
    intro: 'Scalable software development for today’s digital demands — whether you are building something new or enhancing an existing system.',
    coreTitle: 'Our Core Software Development Offerings',
    coreSub: 'Custom Software Development, Mobile App Development, Enterprise Development and SaaS Development, built with a focus on security and performance.',
    services: [
      { title: 'Custom Software Development', body: 'Tailored, secure and scalable applications.' },
      { title: 'Mobile App Development', body: 'iOS and Android apps, from concept to launch.' },
      { title: 'Enterprise Software Development', body: 'Integrating systems and automating workflows.' },
      { title: 'SaaS Development', body: 'Reliable, multi-tenant cloud products.' },
      { title: 'Web App Development', body: 'Scalable web apps, from dashboards to complex enterprise tools.' },
    ],
    whyTitle: 'Why Businesses Choose Synthlane',
    whySub: 'We combine engineering skill, industry knowledge and a client-focused strategy.',
    why: whyStd,
    stackSub,
    processTitle: 'Our Step-by-Step Approach',
    process: [
      { title: 'Discovery & Planning', body: 'We analyse your goals and requirements to build a roadmap.' },
      { title: 'Design & Development', body: 'User-centric design and scalable builds.' },
      { title: 'Testing & Optimization', body: 'We check security and performance, and remove errors.' },
      { title: 'Launch and Support', body: 'Deployment, plus ongoing maintenance and updates.' },
    ],
    faqs: [
      { q: 'What types of software development services do you offer?', a: 'Custom Software Development, Mobile App Development, Enterprise Software Development, SaaS Development and Web App Development.' },
      { q: 'How long does it take to develop custom software?', a: 'It depends on the scope. We agree the timeline during Discovery & Planning and tell you what fits it before we start.' },
      { q: 'How do you ensure the quality and security of the software?', a: 'Every build goes through Testing & Optimization for security, performance and errors before launch.' },
      { q: 'Can you integrate third-party APIs or existing systems?', a: 'Yes. Integrating systems and automating workflows is part of our Enterprise Software Development work.' },
      { q: 'Do you offer post-launch support and maintenance?', a: 'Yes. Launch and Support includes ongoing maintenance and updates.' },
    ],
  },
  {
    slug: 'application-modernization-services',
    nav: 'Application Modernization',
    title: 'Application Modernization Services',
    intro: 'Upgrade legacy systems to modern, scalable and secure platforms using cloud technologies, microservices and automation.',
    coreTitle: 'Core Application Modernization Services',
    coreSub: 'End-to-end modernization that reduces technical debt, improves scalability, integrates with existing infrastructure and lowers operational risk.',
    services: [
      { title: 'Legacy Software Modernization', body: 'Upgrading outdated software for performance, maintainability and faster feature delivery.' },
      { title: 'Legacy App Modernization', body: 'Cloud-ready, efficient apps with improved UI/UX, speed and integration.' },
      { title: 'Cloud Migration Services', body: 'Moving applications to cloud platforms with security, flexibility and minimal downtime.' },
      { title: 'Microservices & API Modernization', body: 'Modular services and secure APIs for faster deployment and integration.' },
    ],
    whyTitle: 'Why Businesses Choose Synthlane',
    whySub: 'We combine technical expertise, domain knowledge and a consultative approach.',
    why: whyStd,
    stackSub,
    processTitle: 'Our Step-by-Step Approach',
    process: [
      { title: 'Assessment & Strategy', body: 'We analyse systems and technical debt to build a roadmap.' },
      { title: 'Application Refactoring & Re-Architecture', body: 'Updating codebases and redesigning architectures.' },
      { title: 'Integration & Automation', body: 'Integrating systems and automating CI/CD pipelines and testing.' },
      { title: 'Deployment Support', body: 'Deploying, monitoring and maintaining applications, with ongoing optimization.' },
    ],
    faqs: [
      { q: 'What are application modernization services?', a: 'Upgrading legacy systems to modern, scalable and secure platforms using cloud technologies, microservices and automation.' },
      { q: 'Why is application modernization critical for businesses?', a: 'It reduces technical debt, improves scalability, integrates with existing infrastructure and lowers operational risk.' },
      { q: 'Which industries benefit most from application modernization?', a: 'We have experience across FinTech, Healthcare, Retail, Manufacturing, PropTech and Energy.' },
      { q: 'How long does an application modernization project take?', a: 'It depends on the system. We set the roadmap and timeline during Assessment & Strategy.' },
      { q: 'How do I start with your application modernization services?', a: 'Book a free consultation and share your current system, goals and timeline.' },
    ],
  },
  {
    slug: 'software-consulting-services',
    nav: 'Software Consulting',
    title: 'Software Consulting Services',
    intro: 'Consulting that optimizes processes, sets technology strategy and drives business growth — from analysing existing systems to deploying tailored solutions.',
    coreTitle: 'Core Software Consulting Services',
    coreSub: 'Services that improve efficiency and scalability, reduce risk and build competitive advantage.',
    services: [
      { title: 'IT Strategy & Advisory', body: 'We analyse current technology, find gaps and build a roadmap tied to business goals.' },
      { title: 'Architecture & Design', body: 'Secure, scalable, maintainable systems that integrate well.' },
      { title: 'Technology Implementation', body: 'Deploying software with minimal disruption and smooth team adoption.' },
      { title: 'System Optimization & Integration', body: 'Automating processes, integrating applications and improving workflow efficiency.' },
    ],
    whyTitle: 'Why Businesses Choose Synthlane',
    whySub: 'We combine expertise, industry insight and a client-focused strategy.',
    why: [
      { title: 'Deep Industry Expertise', body: 'Experience in finance, healthcare, retail, manufacturing, energy and real estate.' },
      { title: 'Customized Solutions', body: 'Strategies and designs tailored to your specific objectives and challenges.' },
      { title: 'Scalable & Maintainable', body: 'Systems that evolve with demand, new technology and market change.' },
      { title: 'Proven Results', body: 'Measurable gains in productivity, efficiency and performance.' },
    ],
    stackSub,
    processTitle: 'Our Step-by-Step Approach',
    process: [
      { title: 'Discovery & Analysis', body: 'We assess existing systems, goals and gaps.' },
      { title: 'Strategy Development', body: 'We define and prioritize initiatives and requirements.' },
      { title: 'Design & Implement', body: 'We design secure, scalable systems and deploy them.' },
      { title: 'Optimization & Support', body: 'We monitor performance and provide ongoing support.' },
    ],
    faqs: [
      { q: 'What are software consulting services?', a: 'IT Strategy & Advisory, Architecture & Design, Technology Implementation, and System Optimization & Integration.' },
      { q: 'How can software consulting help my business?', a: 'It improves efficiency and scalability, reduces risk and gives you a technology roadmap tied to business goals.' },
      { q: 'Which industries benefit from these services?', a: 'We have experience in finance, healthcare, retail, manufacturing, energy and real estate.' },
      { q: 'Do these services include implementation support?', a: 'Yes. Design & Implement and Optimization & Support are part of every engagement.' },
      { q: 'How do I get started?', a: 'Book a free consultation and tell us about your systems and goals.' },
    ],
  },
  {
    slug: 'secure-cloud-engineering',
    nav: 'Secure Cloud Engineering',
    title: 'Secure Cloud Engineering',
    intro: 'We design and build secure architecture on Google Cloud — IAM, least-privilege access and data handling — under your brand and under NDA.',
    coreTitle: 'What we build',
    coreSub: 'Access control, data handling and monitoring are set up during each build, not afterwards.',
    services: [
      { title: 'IAM and least-privilege access', body: 'Roles and permissions limited to what each user and service needs.' },
      { title: 'Data handling', body: 'Clear rules for storing, encrypting and accessing data on Google Cloud.' },
      { title: 'Threat Assessment & Vulnerability Management', body: 'Finding and fixing threats across networks, applications and systems.' },
      { title: 'SecOps Services', body: 'Continuous monitoring and incident response.' },
    ],
    whyTitle: 'Why Businesses Choose Synthlane',
    whySub: 'A structured approach, from access review through monitoring.',
    why: whyStd,
    stackSub,
    processTitle: 'Our Step-by-Step Approach',
    process: [
      { title: 'Assessment & Planning', body: 'Review current access, data handling and risks.' },
      { title: 'Implementation & Monitoring', body: 'Put controls in place and monitor them.' },
      { title: 'Response', body: 'Act on threats and incidents.' },
      { title: 'Optimization & Reporting', body: 'Tighten controls and report on what changed.' },
    ],
    faqs: [
      { q: 'What is secure cloud engineering?', a: 'Designing and building secure architecture on Google Cloud: IAM, least-privilege access and data handling.' },
      { q: 'How does this protect my client’s business?', a: 'Access control, data handling and monitoring are set up during the build, not afterwards — and everything happens under NDA.' },
      { q: 'How can I start with your services?', a: 'Book a free consultation and share the scope.' },
    ],
  },
  {
    slug: 'ai-ml-services',
    nav: 'AI and ML Services',
    title: 'AI & ML Services',
    intro: 'AI and ML services that improve how a business operates and grows, through predictive analytics, automation and decision-making tools.',
    coreTitle: 'Core AI & ML Services',
    coreSub: 'We help businesses use AI and ML to solve complex problems, automate workflows and align outcomes with business goals.',
    services: [
      { title: 'AI Calling Agent', body: 'Voice agents that automate customer calls, support and lead generation.' },
      { title: 'AI Chatbot Development', body: 'Chatbots for websites, apps and support platforms.' },
      { title: 'AI Consulting Services', body: 'Advice on AI strategy, adoption and implementation.' },
      { title: 'AI Development Services', body: 'Custom models for predictive analytics, NLP, computer vision and recommendations.' },
      { title: 'AI Integration Services', body: 'Connecting AI with existing systems and workflows.' },
      { title: 'ML Services', body: 'Designing and deploying machine learning models for prediction and automation.' },
    ],
    whyTitle: 'Your Engineering Team for Intelligent Solutions',
    whySub: 'We combine technical skill with industry knowledge to automate processes and deliver measurable results.',
    why: [
      { title: 'Expertise Across Industries', body: 'Finance, healthcare, retail, manufacturing, energy and real estate.' },
      { title: 'Customized AI & ML Solutions', body: 'Systems aligned with your business objectives.' },
      { title: 'Scalable & Maintainable', body: 'Designed to grow with data volume and changing needs.' },
      { title: 'Reliable & Measurable Results', body: 'Accurate, consistent outcomes.' },
    ],
    stackSub,
    processTitle: 'Our Step-by-Step Approach',
    processSub: 'A structured, transparent process with clear communication at each stage.',
    process: [
      { title: 'Discovery & Analysis', body: 'We assess goals, systems and data to find opportunities.' },
      { title: 'Model Development & Training', body: 'We train models on high-quality data.' },
      { title: 'Testing & Optimization', body: 'We test and refine models for efficiency and scale.' },
      { title: 'Deployment & Support', body: 'We deploy, monitor and support ongoing improvement.' },
    ],
    faqs: [],
  },
];
