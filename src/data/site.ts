// All copy below was taken from synthlane.com (home, about-us, our-portfolio and
// the five /solutions pages) on 26 Oct 2026. Home and About copy is verbatim.
// FAQ answers were collapsed on the live site and could not be scraped; the
// answers here are built only from statements made elsewhere on the site —
// confirm them with the Synthlane team before going live.

export const BOOK_URL = 'https://cal.com/team/synthlane/discovery-call';
export const CAREERS_URL = 'https://synthlane.zohorecruit.in/jobs/Careers/';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/synthlane/';
export const BLOGS_URL = 'https://synthlane.com/blogs';
export const PRIVACY_URL = 'https://synthlane.com/privacy-policy';

export const tagline = 'The engineering team behind your brand.';
export const footerBlurb =
  'Senior-led engineering capacity for agencies and cloud partners. We build under your brand.';

export const hero = {
  eyebrow: 'White-label engineering',
  title: 'Senior-led engineering capacity for agencies and cloud partners',
  sub: 'We build under your brand. NDA by default. We never contact your clients.',
  note: 'Founded by a former Meta engineer. Based in Gurugram, India.',
};

export const steps = {
  eyebrow: 'How it works',
  title: 'How white-label works',
  sub: 'Three steps from brief to delivery. Your client sees one team: yours.',
  items: [
    {
      title: 'You share the scope',
      body: 'Send us the brief, the stack and the deadline. We sign your NDA before we start.',
    },
    {
      title: 'We deliver under your brand',
      body: 'Our engineers build and ship as part of your team, under your name.',
    },
    {
      title: 'You own the client relationship',
      body: 'You talk to the client. We never contact them.',
    },
  ],
};

export type Solution = {
  slug: string;
  name: string;
  short: string;
  card: string;
  intro: string;
  services: { title: string; body: string }[];
  why: string[];
  process: { title: string; body: string }[];
  faqs: string[];
};

const industries =
  'Experience across FinTech, Healthcare, Retail, Manufacturing, PropTech and Energy';

export const solutions: Solution[] = [
  {
    slug: 'software-development-services',
    name: 'Software Development Services',
    short: 'Software Development',
    card: 'Crafting custom software solutions to drive business growth and efficiency.',
    intro:
      'Scalable software development, whether you are building from scratch or enhancing an existing system.',
    services: [
      { title: 'Custom Software Development', body: 'Software shaped around the way your client’s business actually runs.' },
      { title: 'Mobile Apps', body: 'Native-quality apps for iOS and Android.' },
      { title: 'Enterprise Software', body: 'Systems built for scale, permissions and long life.' },
      { title: 'SaaS Products', body: 'Multi-tenant products from first release onward.' },
      { title: 'Web Apps', body: 'Fast, accessible web applications on modern stacks.' },
    ],
    why: [industries, 'Customized digital solutions', 'Modern technology stacks', 'A client-first approach', 'Prior work led by the founders'],
    process: [
      { title: 'Discovery & Planning', body: 'Scope, stack and timeline agreed up front.' },
      { title: 'Design & Development', body: 'Built in increments your team can review.' },
      { title: 'Testing & Optimization', body: 'Quality, performance and security checks before release.' },
      { title: 'Launch and Support', body: 'Shipped, monitored and supported after launch.' },
    ],
    faqs: ['What types of software do you build?', 'How long does development take?', 'How do you ensure quality and security?', 'Can you integrate with third-party tools?', 'Do you offer support after launch?'],
  },
  {
    slug: 'application-modernization-services',
    name: 'Application Modernization',
    short: 'Application Modernization',
    card: 'Upgrading legacy systems to modern, scalable, and efficient applications.',
    intro:
      'We help businesses upgrade legacy systems to modern, scalable and secure platforms using cloud technologies, microservices and automation.',
    services: [
      { title: 'Legacy Software Modernization', body: 'Old systems rebuilt or refactored without losing what works.' },
      { title: 'Legacy App Modernization', body: 'Cloud-ready apps with an enhanced UI and UX.' },
      { title: 'Cloud Migration Services', body: 'Applications moved to cloud platforms with minimal downtime.' },
      { title: 'Microservices & API Modernization', body: 'Monoliths re-architected into modular services with clean APIs.' },
    ],
    why: [industries, 'Customized digital solutions matched to business needs', 'A modern, scalable, secure technology stack', 'A client-first, transparent partnership'],
    process: [
      { title: 'Assessment & Strategy', body: 'Map the legacy estate and decide what to keep, refactor or replace.' },
      { title: 'Refactoring & Re-Architecture', body: 'Re-shape the application for the platform it is moving to.' },
      { title: 'Integration & Automation', body: 'CI/CD, testing and integrations wired in.' },
      { title: 'Deployment Support', body: 'Deployment, monitoring and ongoing maintenance.' },
    ],
    faqs: ['What are application modernization services?', 'Why does modernization matter?', 'Which industries benefit?', 'How long does a project take?', 'How do we get started?'],
  },
  {
    slug: 'software-consulting-services',
    name: 'Software Consulting Services',
    short: 'Software Consulting',
    card: 'Guiding businesses to implement the right technology strategies.',
    intro:
      'Software consulting that improves processes, shapes technology strategy and supports growth — from analysing existing systems to deploying tailored solutions.',
    services: [
      { title: 'IT Strategy & Advisory', body: 'Review current technology, find the gaps and build a roadmap tied to business goals.' },
      { title: 'Architecture & Design', body: 'Secure, scalable, maintainable systems that integrate well.' },
      { title: 'Technology Implementation', body: 'Deployment with minimal disruption and smooth team adoption.' },
      { title: 'System Optimization & Integration', body: 'Automated processes, connected applications and better workflows.' },
    ],
    why: ['Industry experience in finance, healthcare, retail, manufacturing, energy and real estate', 'Customized strategies', 'Systems built to evolve with demand', 'Measurable gains in productivity and efficiency'],
    process: [
      { title: 'Discovery & Analysis', body: 'Understand the systems, the team and the goal.' },
      { title: 'Strategy Development', body: 'A roadmap with clear priorities and trade-offs.' },
      { title: 'Design & Implement', body: 'Build and roll out what the roadmap calls for.' },
      { title: 'Optimization & Support', body: 'Measure, tune and keep improving.' },
    ],
    faqs: ['What are software consulting services?', 'How can consulting help my business?', 'Which industries benefit?', 'Is implementation support included?', 'How do we get started?'],
  },
  {
    slug: 'secure-cloud-engineering',
    name: 'Secure Cloud Engineering',
    short: 'Secure Cloud Engineering',
    card: 'Secure GCP architecture: IAM, least-privilege access and data handling.',
    intro:
      'Secure architecture on Google Cloud — identity and access management, least-privilege access and data handling — delivered under your brand and under NDA.',
    services: [
      { title: 'IAM & least-privilege access', body: 'Roles and permissions limited to exactly what each user and service needs.' },
      { title: 'Data handling', body: 'Clear rules for storing, encrypting and accessing data on Google Cloud.' },
      { title: 'Threat assessment & vulnerability management', body: 'Find and fix threats across networks, applications and systems.' },
      { title: 'SecOps', body: 'Continuous monitoring and incident response.' },
    ],
    why: [industries, 'Customized solutions', 'A modern, scalable tech stack', 'A client-first approach'],
    process: [
      { title: 'Assessment & Planning', body: 'Review the current cloud posture and plan the target state.' },
      { title: 'Implementation & Monitoring', body: 'Put controls in place and watch them work.' },
      { title: 'Response', body: 'Act quickly when something looks wrong.' },
      { title: 'Optimization & Reporting', body: 'Tighten controls and report on what changed.' },
    ],
    faqs: ['What is secure cloud engineering?', 'How does it protect my business?', 'How do we get started?'],
  },
  {
    slug: 'ai-ml-services',
    name: 'AI & ML',
    short: 'AI and ML Services',
    card: 'Agents, retrieval and automation built into your client’s product.',
    intro:
      'AI and ML that change how a business operates and grows — predictive analytics, automation and decision-making tools.',
    services: [
      { title: 'AI Calling Agent', body: 'Voice agents for automated customer calls, support and lead generation.' },
      { title: 'AI Chatbot Development', body: 'Chatbots for websites, apps and customer service.' },
      { title: 'AI Consulting Services', body: 'Strategy, adoption and implementation guidance.' },
      { title: 'AI Development Services', body: 'Custom models for predictive analytics, NLP, computer vision and recommendations.' },
      { title: 'AI Integration Services', body: 'AI connected to existing systems and workflows.' },
      { title: 'ML Services', body: 'Machine learning models designed and deployed for predictions and insights.' },
    ],
    why: ['Expertise across industries', 'Solutions aligned to business goals', 'Scalable, future-ready systems', 'Reliable, measurable results'],
    process: [
      { title: 'Discovery & Analysis', body: 'Assess goals, systems and data.' },
      { title: 'Model Development & Training', body: 'Build and train models on quality data.' },
      { title: 'Testing & Optimization', body: 'Test, refine and tune for efficiency.' },
      { title: 'Deployment & Support', body: 'Deploy, monitor and support.' },
    ],
    faqs: ['Why invest in AI & ML services?'],
  },
];

export const gcp = {
  eyebrow: 'Google Cloud & AI',
  title: 'Google Cloud & AI',
  sub: 'What we build on Google Cloud.',
  items: [
    { title: 'Vertex AI', body: 'Agents, RAG, Vector Search, managed memory and document search.' },
    { title: 'Secure GCP architecture', body: 'IAM design, least-privilege access and data handling.' },
  ],
  feature: { title: 'AI & ML', body: 'Agents, retrieval and automation built into your client’s product.', href: '/solutions/ai-ml-services' },
};

export const whyUs = {
  eyebrow: 'Why Us',
  title: 'Built to work behind your brand',
  sub: 'We work as your engineering team, under your name. You keep the client relationship. We handle the build.',
  items: [
    { title: 'NDA by default', body: 'Every engagement starts under NDA. We never contact your clients.' },
    { title: 'Security-First Approach', body: 'Your data and systems are always protected through strong security practices woven into every stage of development.' },
  ],
};

export type CaseStudy = { client: string; title: string; result: string; tag: string; hue: number };

export const caseStudies: CaseStudy[] = [
  { client: 'Zomato', title: 'ERP, CRM & CMS', tag: 'Enterprise', hue: 4, result: 'Improved merchant onboarding, streamlined operations, and enhanced customer management, increasing efficiency in running business.' },
  { client: 'Siemens', title: 'Turbine Proposal', tag: 'Industrial', hue: 190, result: 'Proposal turnaround became faster, so Siemens could respond to clients sooner.' },
  { client: 'Toppr (Byju’s)', title: 'Offline Learning', tag: 'EdTech', hue: 265, result: 'Schools in Karnataka, Andhra Pradesh, and Telangana adopted the solution, improving access to learning and classroom engagement.' },
  { client: 'AlgoMage', title: 'AI Image Editing', tag: 'AI', hue: 300, result: 'An AI platform that could auto-edit thousands of images in minutes.' },
  { client: 'Authlayer', title: 'Faster & Secure Transactions', tag: 'Fintech', hue: 150, result: 'Faster, more secure transaction processing for Authlayer’s app.' },
  { client: 'Vinyo', title: 'Community for Wine Lovers', tag: 'Commerce', hue: 340, result: 'Vinyo now offers a seamless shopping experience and a thriving community for wine enthusiasts, increasing engagement and sales.' },
];

export const portfolioExtra: CaseStudy[] = [
  { client: 'BidYourStay', title: 'Homestay Booking', tag: 'Travel', hue: 30, result: 'Raised booking confirmations and host occupancy, and let travellers save up to 20% through bidding.' },
  { client: 'AI Sales Calling', title: 'AI-Powered Sales Calling Platform', tag: 'AI', hue: 220, result: 'Reduced manual sales effort by 30%, increased lead conversion by 25%, and improved revenue.' },
  { client: 'Qumulo', title: 'Cloud Data Management on AWS', tag: 'Cloud', hue: 175, result: 'Improved performance, scalability and operational efficiency for Qumulo’s data platform.' },
];

export const cta = {
  title: 'Have a project that needs more hands?',
  sub: 'Our team works as an extension of yours.',
};

export const faqIntro =
  'Here are answers to some frequently asked questions. If your question isn’t listed, please contact us. We’re happy to assist!';

export const faqs = [
  { q: 'Who do you work with?', a: 'Agencies and cloud partners. We work only behind them, as the engineering team their clients never see.' },
  { q: 'How secure are your solutions?', a: 'Every engagement starts under NDA. We use least-privilege access and careful data handling throughout, with security practices built into every stage of development.' },
  { q: 'What technologies do you specialize in?', a: 'Node.js, React, Python, Java, .NET and C++ for product engineering, and Google Cloud — Vertex AI agents, RAG, Vector Search, IAM and secure GCP architecture — for cloud and AI work.' },
  { q: 'Can you customize solutions for my business needs?', a: 'Yes. You share the brief, the stack and the deadline, and we build to it — under your name, for your client.' },
  { q: 'How do you ensure project success?', a: 'Honest scoping. We tell you what fits the timeline and what doesn’t, before it becomes a problem. Engineering is senior-led from start to finish.' },
];

export const about = {
  title: 'We are an engineering partner for agencies and cloud partners. We build under your brand.',
  body: 'Synthlane Technologies was founded in Gurugram, India, by a former Meta engineer. We work only behind agencies and cloud partners, as the engineering team their clients never see.',
  mission: 'To give agencies and cloud partners senior-led engineering they can put their own name on.',
  vision: 'To be the engineering team that agencies and cloud partners rely on for their clients’ work.',
  values: [
    { title: 'Your brand, not ours', body: 'We work under your name. We never contact your clients.' },
    { title: 'Security from day one', body: 'NDA before we start. Least-privilege access and careful data handling throughout.' },
    { title: 'Honest scoping', body: 'We tell you what fits the timeline and what doesn’t, before it becomes a problem.' },
  ],
};

export const techStack = ['Node.js', 'React', 'Python', 'Java', '.NET', 'C++', 'Vertex AI', 'Google Cloud'];
