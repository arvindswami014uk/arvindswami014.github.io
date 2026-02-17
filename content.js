/**
 * PORTFOLIO DATA v2.0 - Arvind Swami Ganeshan
 * Synchronized with UK CV 2025
 */

const PORTFOLIO_DATA = {
  
  personal: {
    name: "Arvind Swami Ganeshan",
    title: "Data Engineer & Data Governance Specialist",
    email: "arvindswami014@gmail.com",
    phone: "+44 7767 978917",
    location: "Church Stretton, Shropshire, UK",
    linkedin: "linkedin.com/in/arvindswami014",
    github: "github.com/arvindswami014",
    
    rightToWork: "UK Graduate Route (2 years) — No sponsorship required",
    availability: "Immediate",
    relocation: "Open to UK-wide relocation",
    languages: "English (IELTS 8.0), Hindi, Tamil"
  },

  summary: `Data Engineer with over 5 years of experience delivering enterprise data pipelines, ETL workflows, and data governance frameworks for major UK and US clients including LexisNexis and BNP Paribas. Expertise in Python, SQL, Oracle PL/SQL, Apache Airflow, and Azure cloud infrastructure, with proven compliance delivery across GDPR, NIST, and ISO 27001 frameworks. Cranfield University MSc graduate with a strong track record of collaborating with cross-functional EMEA teams across Spanish and UK operations. Currently contributing to UK retail data operations and Generative AI consulting.`,

  skills: {
    dataEngineering: ["Python", "SQL", "PL/SQL", "Apache Spark", "Apache Airflow", "Apache Kafka", "ETL/ELT", "Data Modelling", "Data Warehousing"],
    cloudDevops: ["Microsoft Azure", "Azure Data Factory", "CI/CD", "Jenkins", "Ansible", "Docker", "Linux", "Git"],
    dataGovernance: ["UK GDPR", "ISO 27001", "NIST", "Data Quality Frameworks", "Metadata Management", "File Integrity Monitoring", "Data Lineage"],
    toolsPlatforms: ["Oracle", "Dynatrace", "ServiceNow", "Splunk", "JIRA", "Confluence", "Power BI", "Terraform"]
  },

  experience: [
    {
      role: "Generative AI Specialist & Code Optimisation Consultant",
      company: "Outlier.ai",
      context: "Remote (UK-based)",
      location: "",
      date: "Feb 2025 – Present",
      isCurrent: true,
      summary: "Optimising enterprise codebases and training LLMs on data engineering best practices",
      bullets: [
        "Optimising enterprise Java and Python codebases for global clients, resolving critical compilation errors and improving code efficiency by 30% through AI-assisted refactoring",
        "Training and evaluating large language models on data engineering best practices including ETL design patterns, SQL optimisation, and cloud architecture principles",
        "Recognised with Generalist badge for advanced prompt engineering and AI model evaluation capabilities across multiple technical domains"
      ],
      technologies: ["Java", "Python", "LLM Training", "Prompt Engineering", "ETL Patterns"]
    },
    {
      role: "Retail Data & Operations Analyst",
      company: "Premier Convenience Store",
      context: "Church Stretton, UK",
      location: "",
      date: "Feb 2025 – Present",
      isCurrent: true,
      summary: "Managing end-to-end retail data operations with compliance focus",
      bullets: [
        "Managing end-to-end retail data operations including POS transaction analytics, supplier data pipelines, and automated inventory reconciliation systems ensuring zero-discrepancy financial reporting",
        "Implementing data-driven demand forecasting and stock optimisation algorithms, reducing inventory wastage by 15% and improving supplier order accuracy",
        "Ensuring full compliance with UK financial regulations, HMRC VAT reporting standards, and GDPR data handling requirements"
      ],
      technologies: ["Python", "Analytics", "POS Systems", "GDPR Compliance", "Forecasting"]
    },
    {
      role: "Operations Data Supervisor",
      company: "Muller Dairy UK",
      context: "Shropshire, UK",
      location: "",
      date: "Oct 2024 – Jan 2025",
      isCurrent: false,
      summary: "Production data metrics and quality control in food manufacturing",
      bullets: [
        "Managed real-time production data metrics and quality control logging using Manufacturing Execution Systems (MES), maintaining 99.8% data accuracy",
        "Ensured HACCP compliance and batch traceability data integrity for regulatory audits and food safety reporting",
        "Operated SCADA-adjacent monitoring systems for production scheduling and cold-chain temperature data validation"
      ],
      technologies: ["MES", "SCADA", "HACCP", "Quality Control", "Batch Traceability"]
    },
    {
      role: "Data Operations Engineer",
      company: "BNP Paribas",
      context: "Hybrid — EMEA Operations",
      location: "UK & Spain",
      date: "Oct 2022 – Sep 2023",
      isCurrent: false,
      summary: "Technical liaison for Spanish and UK engineering teams with full compliance",
      bullets: [
        "Served as technical liaison for Spanish and UK engineering teams, coordinating data infrastructure deployments across EMEA time zones with full GDPR and ISO 27001 compliance",
        "Architected the IVELO automation platform using Python and Ansible, reducing deployment time by 85% (8h → 1.5h) and saving 180+ engineering hours quarterly",
        "Managed data infrastructure for 4,000+ servers supporting UK and European banking operations with 50+ Dynatrace monitoring dashboards",
        "Led Global File Integrity Monitoring rollout across APAC, EMEA, and NAR regions for 4,000+ servers, achieving 100% NIST and ISO 27001 compliance within 6-month deadline",
        "Led team of 7 engineers, mentoring junior staff and presenting infrastructure strategy to VP-level stakeholders"
      ],
      technologies: ["Python", "Ansible", "Oracle", "Dynatrace", "Azure", "GDPR", "ISO 27001", "NIST"]
    },
    {
      role: "Systems Engineer (Progressive Roles)",
      company: "Infosys Limited",
      context: "Client: LexisNexis UK & US",
      location: "Pune, India (Remote UK/US)",
      date: "Sep 2018 – Sep 2022",
      isCurrent: false,
      summary: "4-year tenure supporting UK and US legal data platforms with 99.9% SLA",
      bullets: [
        "Resolved 3,000+ data incidents for UK and US legal data platforms maintaining 99.9% SLA compliance",
        "Executed zero-downtime Oracle 10g → 19c migration for critical UK legal databases with 99.9% accuracy through PL/SQL stored procedures",
        "Led emergency Log4j security remediation across 20 Java applications, ensuring UK GDPR and Data Protection Act 2018 compliance",
        "Collaborated directly with London-based product owners on UK legal data standards and regulatory compliance for UK barristers and solicitors",
        "Developed complex PL/SQL ETL procedures for high-volume data extraction serving UK and US legal research platforms",
        "Automated 40% of data validation using Gherkin and TestComplete, reducing post-deployment incidents by 20%"
      ],
      technologies: ["Oracle", "PL/SQL", "Java", "Jenkins", "Git", "Gherkin", "ServiceNow", "ITIL", "GDPR"]
    }
  ],

  projects: [
    {
      name: "IVELO Platform",
      role: "Lead Architect",
      client: "BNP Paribas EMEA",
      description: "Enterprise automation for 30,000+ server deployments across EMEA banking infrastructure using Python, Ansible, and Oracle validation",
      result: "85% deployment time reduction",
      metric: "180+ hours saved quarterly",
      technologies: ["Python", "Ansible", "Oracle", "Azure"],
      link: "github.com/arvindswami014/ivelo",
      featured: true
    },
    {
      name: "UK Legal Migration",
      role: "Database Lead",
      client: "LexisNexis UK",
      description: "Zero-downtime Oracle 10g → 19c migration for critical UK legal databases ensuring Data Protection Act compliance",
      result: "99.9% accuracy achieved",
      metric: "Zero data loss",
      technologies: ["Oracle", "PL/SQL", "Automation", "Validation"],
      featured: true
    },
    {
      name: "Global FIM Rollout",
      role: "Project Lead",
      client: "BNP Paribas",
      description: "File Integrity Monitoring implementation across 4,000+ servers in 3 regions with automated compliance reporting",
      result: "100% ISO 27001 compliance",
      metric: "6-month deadline met",
      technologies: ["Security", "Compliance", "Monitoring", "Ansible"],
      featured: true
    }
  ],

  certifications: [
    {
      name: "IBM Data Engineering & Generative AI",
      issuer: "IBM / Coursera",
      date: "2024–2025",
      status: "In Progress",
      icon: "fa-robot"
    },
    {
      name: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      date: "Sept–Dec 2024",
      status: "Completed",
      icon: "fa-certificate"
    },
    {
      name: "Cybersecurity: Data Governance & GRC",
      issuer: "Industry Certification",
      date: "2024",
      status: "Completed",
      icon: "fa-shield-halved"
    },
    {
      name: "Splunk for Security Analytics",
      issuer: "Splunk",
      date: "2024",
      status: "Completed",
      icon: "fa-chart-line"
    },
    {
      name: "Vulnerability Management",
      issuer: "Industry Certification",
      date: "2024",
      status: "Completed",
      icon: "fa-bug-slash"
    },
    {
      name: "Prompt Engineering for Generative AI",
      issuer: "DeepLearning.AI",
      date: "2024",
      status: "Completed",
      icon: "fa-wand-magic-sparkles"
    }
  ],

  awards: [
    { title: "Generalist Badge", issuer: "Outlier.ai", year: "2025" },
    { title: "Insta Award (2x)", issuer: "Infosys", year: "2019, 2022" },
    { title: "Recognition Award", issuer: "BNP Paribas", year: "2023" }
  ],

  education: [
    {
      degree: "MSc Management & Information Systems",
      school: "Cranfield University",
      location: "UK",
      date: "2023–2024",
      result: "Merit",
      dissertation: "Digital Twin Applications for Cybersecurity using NIST and ISO 27001 Frameworks"
    },
    {
      degree: "BSc Information Technology",
      school: "St. Andrews College",
      location: "Mumbai, India",
      date: "2015–2018",
      result: "First Class Honours"
    }
  ]
};

Object.freeze(PORTFOLIO_DATA);