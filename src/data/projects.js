const projects = [
  {
    title: "SGUB Admissions Platform",
    type: "Full Stack · Production",
    description:
      "End-to-end admissions platform for Saint George University of Beirut, including applicant portal, scoring workflows, document management, and admin dashboards.",
    stack: ["ASP.NET Core", "SQL Server", "Entity Framework", "React", "IIS"],
    highlight:
      "Handles complex business rules, secured with JWT and role-based access.",
  },
  {
    title: "PGME Residency & Fellowship Applications",
    type: "Enterprise Web App",
    description:
      "Dynamic multi-step application forms with custom validation, document uploads, and stored procedures for residency and fellowship candidates.",
    stack: ["ASP.NET Core MVC", "SQL Server", "Stored Procedures", "jQuery"],
    highlight: "Automated processing pipeline for applications and documents.",
  },
  {
    title: "UNISHELF E-Commerce Platform",
    type: "E-Commerce",
    description:
      "Platform for browsing and comparing sanitary and tile options, including product models, pricing, and filtering.",
    stack: ["ASP.NET Core", "Entity Framework", "React", "AWS S3"],
    highlight: "Built custom product model with image handling and CloudFront.",
  },
  {
    title: "AI Bitcoin Trading System",
    type: "AI & Automation",
    description:
      "Machine learning-based Bitcoin trading bot using Random Forest/XGBoost integrated with Binance API and real-time dashboards.",
    stack: ["Python", "Pandas", "Scikit-learn", "Binance API", "Dash"],
    highlight: "Implements risk management with stop-loss/take-profit logic.",
  },
  {
    title: "Skin Cancer Image Classification",
    type: "Research",
    description:
      "Binary classification model for histologically confirmed skin cancer from 3D TBP crops, optimized for telehealth workflows.",
    stack: ["Python", "TensorFlow/PyTorch", "HDF5", "NumPy"],
    highlight: "Focus on early detection and decision support for clinicians.",
  },
];

export default projects;
