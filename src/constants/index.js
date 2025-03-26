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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical Product Manager",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Architect",
    icon: backend,
  },
  {
    title: "Data Evangelist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: backend,
  },
  {
    name: "Kubernetes",
    icon: docker,
  },
  {
    name: "Snowflake",
    icon: snowflake,
  },
  {
    name: "dbt",
    icon: dbt,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Product Manager",
    company_name: "Assured Insights",
    icon: tesla,
    iconBg: "#ffffff",
    date: "December 2023 - Present",
    points: [
      "Leading product strategy and roadmap for data-driven solutions",
      "Managing cross-functional teams of engineers and data scientists",
      "Driving product development from conception to launch",
      "Working with stakeholders to define and prioritize features",
      "Ensuring alignment between technical capabilities and business needs",
    ],
  },
  {
    title: "Product Manager - Data & AI",
    company_name: "Aptitude Software",
    icon: meta,
    iconBg: "#ffffff",
    date: "January 2024 - April 2024",
    points: [
      "Building Data & AI strategy for the company and transforming data from a byproduct to a core product offering",
      "Leading data and AI evangelism initiatives across the organization",
      "Architecting the modern data ecosystem to power the data intelligence platform",
      "Leading cross-functional teams of engineers and stakeholders",
      "Developing and maintaining the long-term roadmap for data & AI implementation",
      "Collaborating with GTM, Professional Services, and other departments to build and prioritize the product backlog",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Assured Insights",
    icon: tesla,
    iconBg: "#ffffff",
    date: "June 2022 - December 2023",
    points: [
      "Led full-stack development of new applications using Django and React",
      "Managed Kubernetes infrastructure for application hosting and maintenance",
      "Designed and implemented data models for applications",
      "Launched a greenfield project integrating 15+ data sources into a data lake",
      "Developed Power BI Dashboards and established data quality standards",
      "Managed senior stakeholders and optimized workflows for efficiency",
    ],
  },
  {
    title: "Head of BI & MI",
    company_name: "Intelling",
    icon: intelling,
    iconBg: "#ffffff",
    date: "March 2021 - June 2022",
    points: [
      "Directed a team of 8, handling payroll for 1k+ employees",
      "Streamlined reporting and insights through automation and business area challenge",
      "Led the transformation of the data warehouse and conducted deep dive analysis",
      "Developed complex dashboards using Alteryx, Tableau & Omniscope",
      "Collaborated with department heads for data-driven decision-making",
    ],
  },
  {
    title: "Analytics, Data & Insight Manager",
    company_name: "Vodafone",
    icon: meta,
    iconBg: "#ffffff",
    date: "January 2019 - April 2020",
    points: [
      "Supported team's strategy and agile projects, owning key tools for core metrics",
      "Led data-driven strategies and initiatives, engaging with the Leadership Team",
      "Advocated data-based decision-making and managed data to impact business positively",
      "Experienced with predictive analytics and telecoms data types",
      "Product Owner of two data products",
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
    name: "Data Intelligence Platform",
    description:
      "Led the development of a modern data ecosystem that transformed raw data into actionable insights, featuring real-time analytics and AI-powered recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "kubernetes",
        color: "pink-text-gradient",
      },
      {
        name: "snowflake",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    name: "BI Transformation Initiative",
    description:
      "Spearheaded the transformation of business intelligence capabilities, implementing modern data practices and automated reporting solutions.",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
      {
        name: "powerbi",
        color: "green-text-gradient",
      },
      {
        name: "alteryx",
        color: "pink-text-gradient",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
