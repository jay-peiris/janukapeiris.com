import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  dbt,
  snowflake,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  intelling,
  tesla,
  shopify,
  aptitude,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// Import tech icons directly
import pythonIcon from "../assets/tech/python.png";
import sqlIcon from "../assets/tech/sql.png";
import fivetranIcon from "../assets/tech/fivetran.png";
import pbiIcon from "../assets/tech/pbi.png";
import tableauIcon from "../assets/tech/tableau.png";
import reactIcon from "../assets/tech/reactjs.png";
import typescriptIcon from "../assets/tech/typescript.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "leadership",
    title: "Leadership",
  },
  {
    id: "expertise",
    title: "Expertise",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Product Leader",
    icon: web,
    description: "Defining vision, shaping strategy, and delivering modern data and AI platforms",
  },
  {
    title: "Full-Stack Builder",
    icon: mobile,
    description: "Architecting and building end-to-end SaaS products with Django, React, and Kubernetes",
  },
  {
    title: "Data & AI Architect",
    icon: backend,
    description: "Designing scalable data platforms and AI-driven solutions at enterprise scale",
  },
  {
    title: "Technical Strategist",
    icon: creator,
    description: "Combining technical depth with executive-level leadership and stakeholder influence",
  },
];

const technologies = [
  {
    name: "React",
    icon: reactjs,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
  },
  {
    name: "Django",
    icon: backend,
    category: "Backend",
  },
  {
    name: "Node.js",
    icon: nodejs,
    category: "Backend",
  },
  {
    name: "Python",
    icon: threejs,
    category: "Languages",
  },
  {
    name: "SQL",
    icon: redux,
    category: "Languages",
  },
  {
    name: "Snowflake",
    icon: snowflake,
    category: "Data & AI",
  },
  {
    name: "dbt",
    icon: dbt,
    category: "Data & AI",
  },
  {
    name: "Fivetran",
    icon: javascript,
    category: "Data & AI",
  },
  {
    name: "Kubernetes",
    icon: docker,
    category: "Infrastructure",
  },
  {
    name: "Docker",
    icon: docker,
    category: "Infrastructure",
  },
  {
    name: "Git",
    icon: git,
    category: "Tools",
  },
  {
    name: "Power BI",
    icon: nodejs,
    category: "BI Tools",
  },
  {
    name: "Tableau",
    icon: reactjs,
    category: "BI Tools",
  },
];

const techCategories = {
  "Data Platforms & Warehouses": [
    { name: "Snowflake", icon: snowflake },
    { name: "Databricks", icon: backend },
    { name: "BigQuery", icon: backend },
    { name: "Azure Synapse", icon: backend },
    { name: "Postgres", icon: backend },
    { name: "MySQL", icon: backend },
    { name: "SQL Server", icon: backend },
    { name: "Vector DBs", icon: backend },
    { name: "BigQuery", icon: backend },
  ],
  "Data Engineering & Transformation": [
    { name: "dbt", icon: dbt },
    { name: "Fivetran", icon: fivetranIcon },
    { name: "Airbyte", icon: backend },
    { name: "Azure Data Factory", icon: backend },
    { name: "Apache Airflow", icon: backend },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: mongodb },
    { name: "MySQL", icon: sqlIcon },
    { name: "SQL Server", icon: sqlIcon },
    { name: "MongoDB", icon: mongodb },
    { name: "Vector DBs", icon: backend },
  ],
  "Programming & Development": [
    { name: "Python", icon: pythonIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Django", icon: backend },
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "FastAPI", icon: backend },

  ],
  "Cloud & Infrastructure": [
    { name: "Azure", icon: backend },
    { name: "GCP", icon: backend },
    { name: "Kubernetes", icon: docker },
    { name: "Docker", icon: docker },
    { name: "CI/CD", icon: git },
  ],
  "BI & Analytics Tools": [
    { name: "Power BI", icon: pbiIcon },
    { name: "Tableau", icon: tableauIcon },
    { name: "Qlik", icon: pbiIcon },
    { name: "Looker", icon: tableauIcon },
    { name: "Sigma", icon: pbiIcon },
    { name: "Alteryx", icon: pbiIcon },
    { name: "MicroStrategy", icon: pbiIcon },
    { name: "Omniscope", icon: pbiIcon },
    { name: "Custom BI Platform", icon: backend },
  ],
  "AI & ML": [
    { name: "LLM Integration", icon: backend },
    { name: "Semantic Modeling", icon: backend },
    { name: "MLOps", icon: backend },
    { name: "Vector Search", icon: backend },
  ],
};

const experiences = [
  {
    title: "Product Manager / Head of Platform",
    company_name: "Assured Insights",
    icon: tesla,
    iconBg: "#ffffff",
    date: "May 2024 - Present",
    points: [
      "Full product and technical leadership of flagship B2B SaaS platform",
      "Architected and delivered full-stack platform (Django/React/Kubernetes) with AI Semantic Layer, Query Builder, and developer IDE",
      "Rapid delivery of AI-powered features including semantic models, automated anomaly insights, and generative-assisted tooling",
      "Defined roadmap, governance, and internal engineering standards",
      "Designed scalable backend, frontend, APIs, microservices, and Kubernetes infrastructure",
      "Established operating practices for engineering quality, roadmap planning, and technical sustainability",
      "Accelerated delivery by removing organizational blockers, leading to rapid rollout of platform modules",
    ],
  },
  {
    title: "Product Manager - Data & AI Strategy",
    company_name: "Aptitude Software",
    icon: aptitude,
    iconBg: "#ffffff",
    date: "January 2024 - April 2024",
    points: [
      "Led enterprise-wide AI and data strategy across GTM and Professional Services",
      "Developed long-term platform vision and modern data architecture for analytics and ML strategy",
      "Evangelized AI adoption and operational readiness across the organization",
      "Advised senior leadership on AI readiness, MLOps direction, and capability uplift",
      "Facilitated organizational understanding of AI value and risk",
      "Collaborated with GTM, Professional Services, and other departments to build and prioritize product backlog",
    ],
  },
  {
    title: "Data Architect",
    company_name: "Assured Insights",
    icon: tesla,
    iconBg: "#ffffff",
    date: "June 2022 - December 2023",
    points: [
      "Built scalable Snowflake/dbt/Azure data lake integrating 15+ sources—foundation for enterprise reporting and analytics",
      "Created data quality frameworks, optimized pipelines, and established governance",
      "Delivered Power BI analytics and KPI frameworks aligned to organizational OKRs",
      "Partnered with C-suite to create measurable analytics strategy and executive dashboards",
      "Implemented data quality foundations essential for ML/AI scaling",
      "Established processes for ingestion, modelling, governance, and lifecycle management",
    ],
  },
  {
    title: "Head of BI & MI",
    company_name: "Intelling",
    icon: intelling,
    iconBg: "#ffffff",
    date: "March 2021 - June 2022",
    points: [
      "Led 8-person analytics team supporting 1,000+ employees",
      "Modernized data warehouse and operational reporting landscape",
      "Delivered dashboards using Tableau, Alteryx, and custom analytics tooling",
      "Improved insight delivery through strategic reporting and team capability uplift",
      "Streamlined reporting and insights through automation and business area challenge",
      "Collaborated with department heads for data-driven decision-making",
    ],
  },
  {
    title: "Analytics, Data & Insight Manager",
    company_name: "Vodafone Group",
    icon: meta,
    iconBg: "#ffffff",
    date: "January 2019 - April 2020",
    points: [
      "Owned KPI frameworks and analytic tooling across multiple markets",
      "Product Owner for two internal data products influencing commercial strategy and ExCo decisions",
      "Delivered executive-level insights and engaged SLT on agile initiatives",
      "Designed enterprise-wide data visualization standards, saving 9 months of manual reporting annually in one market",
      "Produced commercial and KPI insights for SLT/ExCo, directly shaping pricing and go-to-market strategy",
      "Experienced with predictive analytics and telecoms data types",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jay has transformed our data strategy from a support function into a core product offering. His technical expertise combined with product management skills has been invaluable.",
    name: "Sarah Chen",
    designation: "CTO",
    company: "Aptitude Software",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Jay was transformative for our team. His ability to bridge technical and business needs while maintaining high standards was exceptional.",
    name: "Michael Rodriguez",
    designation: "Head of Engineering",
    company: "Assured Insights",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Full-Stack B2B SaaS Platform",
    description:
      "Solely architected, built, and deployed a production-grade Django/React/Kubernetes platform, including an AI Semantic Layer, custom IDE, Query Builder, and anomaly detection engine. Delivered end-to-end ownership from vision through to delivery, adoption, and continuous iteration.",
    tags: [
      { name: "Django" },
      { name: "React" },
      { name: "Kubernetes" },
      { name: "AI/ML" },
      { name: "Microservices" },
    ],
    challenges: [
      "Building scalable architecture spanning backend, frontend, and infrastructure",
      "Integrating AI capabilities into core product features",
      "Managing technical debt while accelerating delivery",
    ],
    outcomes: [
      "Production-grade platform serving B2B customers",
      "AI-powered features significantly improving product adoption",
      "Established engineering standards and governance",
    ],
  },
  {
    name: "Enterprise Data Lake Platform",
    description:
      "Built a greenfield cloud-scale Snowflake/dbt/Azure data platform integrating 15+ sources. Established governance, data quality frameworks, and KPI alignment with business OKRs. Foundation for enterprise reporting and analytics at scale.",
    tags: [
      { name: "Snowflake" },
      { name: "dbt" },
      { name: "Azure" },
      { name: "Python" },
      { name: "SQL" },
    ],
    challenges: [
      "Integrating 15+ disparate data sources",
      "Establishing data quality and governance frameworks",
      "Aligning technical implementation with business OKRs",
    ],
    outcomes: [
      "Scalable data platform supporting enterprise analytics",
      "Data quality frameworks ensuring trusted reporting",
      "Foundation for ML/AI capabilities",
    ],
  },
  {
    name: "BI Cost Transformation & Custom BI Platform",
    description:
      "Achieved 98%+ cost reduction in BI tooling by rationalizing Qlik licensing from £750K to £13K annually. Built custom BI platform capabilities. Transformed global dashboard adoption from 8 weekly users to 300+ daily users, driving cultural shift toward data-driven decision making.",
    tags: [
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Custom BI" },
      { name: "Strategy" },
    ],
    challenges: [
      "Reducing costs while maintaining functionality",
      "Driving organizational adoption of new tools",
      "Managing stakeholder expectations during transition",
    ],
    outcomes: [
      "£737K annual cost savings (98%+ reduction)",
      "300+ daily users vs 8 weekly users (massive adoption growth)",
      "Cultural transformation toward data-driven decisions",
    ],
  },
  {
    name: "AI Semantic Layer & Anomaly Detection",
    description:
      "Designed and deployed a natural-language-powered semantic model enabling users to query data conversationally with guardrails. Built an AI-driven Snowflake IDE supporting intelligent suggestions, modelling assistance, and query explanation. Implemented data-driven anomaly detection embedded within the platform.",
    tags: [
      { name: "AI/ML" },
      { name: "LLM" },
      { name: "Semantic Layer" },
      { name: "Anomaly Detection" },
    ],
    challenges: [
      "Integrating AI capabilities into existing platform",
      "Ensuring accuracy and guardrails for semantic queries",
      "Building anomaly detection that provides actionable insights",
    ],
    outcomes: [
      "Natural language query interface with guardrails",
      "AI-assisted developer tools improving productivity",
      "Proactive insight surfacing through anomaly detection",
    ],
  },
];

const achievements = [
  {
    metric: "£737K",
    label: "Annual Cost Savings",
    description: "Reduced BI spend from £750K to £13K annually",
  },
  {
    metric: "37x",
    label: "Adoption Growth",
    description: "Dashboard users: 8/week → 300+/day globally",
  },
  {
    metric: "10+",
    label: "Years Experience",
    description: "Delivering data & AI platforms at scale",
  },
];

const leadershipCompetencies = [
  {
    title: "Product Strategy & Vision",
    description: "Defining product vision, shaping strategy, and delivering modern data and AI platforms. Roadmapping, prioritization, and outcome definition.",
  },
  {
    title: "Data & AI Platform Leadership",
    description: "Architecting scalable data platforms, AI-driven products, and modern data ecosystems. Enterprise data strategy and operating model design.",
  },
  {
    title: "Executive Stakeholder Influence",
    description: "Engaging C-suite and SLT on strategic initiatives. Delivering insights influencing ExCo pricing, investment, and go-to-market decisions.",
  },
  {
    title: "Cross-Functional Leadership",
    description: "Leading teams of engineers, data scientists, and stakeholders. Building alignment, governance, and operating practices across functions.",
  },
  {
    title: "Technical Oversight",
    description: "Full-stack engineering capability combined with architectural oversight. Setting standards for quality, scalability, and technical sustainability.",
  },
  {
    title: "Operating Model Design",
    description: "Transforming organizations through data-driven operating models. Establishing governance, processes, and cultural shifts toward measurable outcomes.",
  },
];

export { 
  services, 
  technologies, 
  techCategories,
  experiences, 
  testimonials, 
  projects,
  achievements,
  leadershipCompetencies,
};
