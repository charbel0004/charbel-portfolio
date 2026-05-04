const projects = [
  {
    title: "SGUB Undergraduate Admissions Platform",
    slug: "sgub-undergraduate-admissions",
    client: "Saint George University of Beirut",
    type: "Application Platform",
    category: "Higher Education",
    period: "2024 - Present",
    status: "Live",
    featured: true,
    summary:
      "Production admissions system that supports applicant submission, document intake, internal review, scoring workflows, and decision support for SGUB teams.",
    stack: ["ASP.NET Core", "React", "SQL Server", "Entity Framework", "IIS"],
    attention:
      "Production admissions platform supporting applicant submission, document review, scoring workflows, and administrative decision support at SGUB.",
    scope: [
      "Built and maintained applicant and admin workflows across the full submission lifecycle.",
      "Implemented validation rules, document handling, role-based actions, and operational status changes.",
      "Supported production deployment, issue resolution, and day-to-day platform reliability.",
    ],
    outcomes: [
      "Centralized admissions work that would otherwise stay fragmented across teams and manual follow-up.",
      "Improved review clarity for staff by bringing submission data, scoring, and progress states into one system.",
    ],
  },
  {
    title: "PGME Residency and Fellowship Applications",
    slug: "pgme-residency-fellowship-applications",
    client: "Saint George University of Beirut",
    type: "Workflow System",
    category: "Higher Education",
    period: "2025 - Present",
    status: "Live",
    featured: true,
    summary:
      "Multi-step application experience for residency and fellowship candidates with deep form logic, document workflows, reviewer coordination, and SQL-backed processing.",
    stack: ["ASP.NET Core MVC", "SQL Server", "Stored Procedures", "JavaScript"],
    attention:
      "Multi-step PGME application workflow built for document-heavy submissions, structured validation, reviewer coordination, and reliable processing.",
    scope: [
      "Designed form flows with conditional logic, autosave-aware behavior, and large document requirements.",
      "Integrated reviewer-facing workflow, scoring support, and application tracking states.",
      "Optimized heavier data operations through stored procedures and tighter backend handling.",
    ],
    outcomes: [
      "Improved consistency of candidate submissions before review starts.",
      "Lowered operational pressure on PGME teams managing document-heavy intake cycles.",
    ],
  },
  {
    title: "Admissions Recommendation and Evaluation Suite",
    slug: "admissions-recommendation-evaluation-suite",
    client: "Saint George University of Beirut",
    type: "Internal Operations Suite",
    category: "Higher Education",
    period: "2025 - Present",
    status: "In Use",
    featured: true,
    summary:
      "Internal tools for recommendation handling, evaluator coordination, review visibility, and decision-support workflows across admissions operations.",
    stack: ["ASP.NET Core", "SQL Server", "JavaScript", "Bootstrap"],
    attention:
      "Internal admissions tooling for recommendation handling, evaluator workflows, review visibility, and structured decision support.",
    scope: [
      "Built staff-facing and evaluator-facing interfaces for structured admissions review.",
      "Digitized recommendation and evaluation steps that previously depended on manual coordination.",
      "Aligned business rules with institutional review processes and permission boundaries.",
    ],
    outcomes: [
      "Improved auditability and visibility across reviewer activity.",
      "Created a cleaner operational path from intake to evaluation and final decision support.",
    ],
  },
  {
    title: "Scoring, Interview, and Admin Dashboard APIs",
    slug: "scoring-interview-admin-dashboard-apis",
    client: "Saint George University of Beirut",
    type: "Backend Delivery",
    category: "Higher Education",
    period: "2024 - Present",
    status: "Active",
    featured: false,
    summary:
      "Secure ASP.NET Core APIs and backend services supporting dashboards, interview handling, scoring logic, and administrative visibility inside SGUB systems.",
    stack: ["ASP.NET Core", "REST APIs", "SQL Server", "Service Layers"],
    attention:
      "Backend services and APIs supporting dashboards, scoring logic, interview workflows, and administrative visibility across SGUB systems.",
    scope: [
      "Built backend services for scoring, dashboard views, and operational workflows.",
      "Handled secure identifiers, validation, and sensitive institutional data paths.",
      "Worked across frontend, backend, and database layers when debugging production issues.",
    ],
    outcomes: [
      "Improved internal visibility for staff using SGUB systems daily.",
      "Strengthened system maintainability by structuring core workflow logic behind reusable services.",
    ],
  },
  {
    title: "Lebanese Red Cross Youth Hub",
    slug: "lebanese-red-cross-youth-hub",
    client: "Lebanese Red Cross Youth Sector",
    type: "Internal Coordination Platform",
    category: "Mission-Driven Platforms",
    period: "2025",
    status: "Delivered",
    featured: true,
    summary:
      "Internal web platform used to manage presenter assignments, topic distribution, access control, and coordination workflows for Lebanese Red Cross Youth activities.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    attention:
      "Internal coordination platform for Lebanese Red Cross Youth with role-based workflows, topic distribution, access control, and deployment ownership.",
    scope: [
      "Designed and developed role-based workflow screens for coordinators and contributors.",
      "Implemented automated assignment logic to distribute topics and reduce manual handling.",
      "Managed deployment and full-stack delivery from product structure to production readiness.",
    ],
    outcomes: [
      "Reduced coordination friction around presentations and assignment handling.",
      "Delivered a more structured internal experience for a large volunteer-driven organization.",
    ],
  },
  {
    title: "Lebanese Red Cross Website",
    slug: "lebanese-red-cross-website",
    client: "Lebanese Red Cross",
    type: "Public Website",
    category: "Mission-Driven Platforms",
    period: "2025",
    status: "Delivered",
    featured: true,
    summary:
      "Public-facing website experience focused on presenting services, organizational information, and trusted digital content in a cleaner and more accessible format.",
    stack: ["React", "JavaScript", "CSS", "Responsive Design"],
    attention:
      "Public-facing website delivery focused on service visibility, trusted information access, and a cleaner digital experience for a high-visibility organization.",
    scope: [
      "Built responsive front-end views for broad public access across devices.",
      "Structured information hierarchy for clarity, trust, and easier navigation.",
      "Supported a more polished digital presence for an established institution.",
    ],
    outcomes: [
      "Improved how visitors access services and information online.",
      "Delivered a more professional and accessible digital presentation layer.",
    ],
  },
  {
    title: "Budget Tracking and Inventory System",
    slug: "budget-tracking-inventory-system",
    client: "Lebanese Red Cross Youth Sector",
    type: "Desktop Operations Tool",
    category: "Mission-Driven Platforms",
    period: "2025",
    status: "Delivered",
    featured: false,
    summary:
      "Desktop-based operational tool for real-time budget tracking and inventory management, built to support tighter control over internal resources.",
    stack: ["C#", ".NET", "SQL Server", "Desktop UI"],
    attention:
      "Desktop operations system for budget tracking, inventory management, and internal resource visibility.",
    scope: [
      "Developed internal tracking workflows for budgets, inventory, and operational records.",
      "Backed the application with SQL Server for persistent reporting and data reliability.",
      "Focused on usability for daily internal administrative use.",
    ],
    outcomes: [
      "Improved visibility into resource usage and inventory movement.",
      "Reduced reliance on scattered manual records for operational tracking.",
    ],
  },
  {
    title: "UNISHELF Commerce Experience",
    slug: "unishelf-commerce-experience",
    client: "UNISHELF",
    type: "Commercial Platform",
    category: "Commercial Delivery",
    period: "2025",
    status: "Delivered",
    featured: true,
    summary:
      "Product discovery and comparison platform for sanitary and tile products with custom filtering, structured catalog modeling, and cloud-hosted media delivery.",
    stack: ["ASP.NET Core", "React", "Entity Framework", "AWS S3", "CloudFront"],
    attention:
      "Commercial product platform combining structured catalog modeling, customer-facing filtering, and cloud-hosted media delivery.",
    scope: [
      "Built product data structures, filtering behavior, and category-specific browsing flows.",
      "Integrated cloud storage and media delivery for image-heavy product content.",
      "Supported content management patterns that scale beyond static catalog pages.",
    ],
    outcomes: [
      "Improved product discovery and comparison for customer-facing browsing.",
      "Created a cleaner workflow for managing and delivering large product media sets.",
    ],
  },
  {
    title: "Birthday Messaging Automation Platform",
    slug: "birthday-messaging-automation-platform",
    client: "Independent Build",
    type: "Automation Product",
    category: "Automation",
    period: "2025",
    status: "Delivered",
    featured: false,
    summary:
      "Web-based automation platform for recurring birthday communication, with centralized contact management, scheduling, and message workflow control.",
    stack: ["Node.js", "Express", "MongoDB", "React"],
    attention:
      "Automation platform for recurring birthday communication with centralized scheduling, contact management, and message workflow control.",
    scope: [
      "Built contact management, scheduling, and message workflow interfaces.",
      "Implemented recurring automation logic for repeat outreach tasks.",
      "Designed the application for simple oversight rather than manual repetition.",
    ],
    outcomes: [
      "Reduced repetitive communication work.",
      "Improved consistency and control over recurring outreach.",
    ],
  },
  {
    title: "AI Bitcoin Trading Research System",
    slug: "ai-bitcoin-trading-research-system",
    client: "Independent R and D",
    type: "Applied AI",
    category: "AI and Research",
    period: "2024 - 2025",
    status: "R and D",
    featured: false,
    summary:
      "Experimental system for testing model-driven trading ideas with feature engineering, risk controls, exchange integrations, and monitoring dashboards.",
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Binance API", "Dash"],
    attention:
      "Applied AI trading research system combining model experimentation, exchange integrations, risk controls, and monitoring dashboards.",
    scope: [
      "Built prediction and signal-generation workflows for strategy experiments.",
      "Integrated stop-loss, take-profit, and trade-monitoring logic.",
      "Created dashboards to review behavior, decisions, and performance patterns.",
    ],
    outcomes: [
      "Improved speed of experimentation for trading strategy evaluation.",
      "Created a practical research base for model-informed trading analysis.",
    ],
  },
  {
    title: "Skin Cancer Image Classification Research",
    slug: "skin-cancer-image-classification-research",
    client: "Academic Research",
    type: "Medical AI",
    category: "AI and Research",
    period: "2024 - 2025",
    status: "Research",
    featured: false,
    summary:
      "Image classification research around histologically confirmed skin cancer imagery, oriented toward decision-support and more accessible screening scenarios.",
    stack: ["Python", "PyTorch", "TensorFlow", "NumPy", "HDF5"],
    attention:
      "Medical AI research focused on image classification workflows for clinically relevant screening and decision-support scenarios.",
    scope: [
      "Prepared image data pipelines and model evaluation workflows.",
      "Tested classification approaches for binary clinical prediction scenarios.",
      "Considered practical deployment use cases alongside model performance.",
    ],
    outcomes: [
      "Expanded experience in applied machine learning beyond coursework.",
      "Explored how AI can support earlier and more accessible screening workflows.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = [
  ...new Set(projects.map((project) => project.category)),
];

export default projects;
