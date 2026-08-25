export const personalDetails = {
  name: "Nitish Kumar Gupta",
  role: "Full-Stack & AI Engineer | Software Developer | AI/ML Researcher",
  headline: "Building Scalable Web Applications & Intelligent AI/ML Systems.",
  degree: "B.Tech Computer Science & Engineering",
  year: "3rd Year Undergraduate",
  institution: "Top University / College in India",
  cgpa: "9.32",
  sgpa4thSem: "9.80",
  location: "India",
  email: "nitishgupta7700@gmail.com",
  phone: "+91 7352550536",
  profileImage: "/profile.jpg",
  status: "Available for AI Research & Software Engineering Internships",
  bioShort: "Third-year B.Tech CSE student, DST INSPIRE Scholar (Among Top 1%), AI & Drug Discovery Research Intern, and Competitive Programmer with 725+ DSA problems solved.",
  bioStory: `I am a third-year B.Tech Computer Science student, INSPIRE Scholar, and AI Research Intern with a passion for solving meaningful problems through technology. My journey began with a strong curiosity about how software can transform ideas into real-world impact, which led me to explore programming, data structures, algorithms, and full-stack development.

Over time, I developed a deep interest in Artificial Intelligence and its applications in scientific research. Through mentorship research projects supported by the Department of Science and Technology (DST), Government of India, I explored AI-driven approaches for drug discovery, molecular property prediction, and lead optimization. These experiences strengthened my understanding of how emerging technologies can be used to address complex challenges.

Alongside research, I have solved 725+ Data Structures and Algorithms problems across platforms such as LeetCode, Codeforces, CodeChef, and GeeksforGeeks. This consistent practice has sharpened my problem-solving abilities, analytical thinking, and approach to building efficient software systems.

My technical interests span Software Engineering, Artificial Intelligence, Full-Stack Development, and Product Development. I enjoy transforming ideas into practical applications and continuously expanding my knowledge through projects, research, hackathons, and collaborative learning.`,
};

export const resumeLinks = {
  driveView: "https://drive.google.com/file/d/11ZU32tadK43PZgOhTfxL34RkQlJngpN2/view?usp=drive_link",
  drivePreview: "https://drive.google.com/file/d/11ZU32tadK43PZgOhTfxL34RkQlJngpN2/preview",
  directDownload: "https://drive.google.com/uc?export=download&id=11ZU32tadK43PZgOhTfxL34RkQlJngpN2"
};

export const heroStats = [
  { label: "DSA Solved", value: 725, suffix: "+", description: "LeetCode, Codeforces, GFG, CodeChef" },
  { label: "Research Internships", value: 2, suffix: "", description: "DST, Govt. of India Projects" },
  { label: "CGPA", value: 9.32, suffix: "", isDecimal: true, description: "Branch Topper (9.80 SGPA in 4th Sem)" },
  { label: "Technical Certifications", value: 5, suffix: "+", description: "Google Cloud, DST, Industry Credentials" },
];

export const skillsData = {
  programmingWeb: [
    { name: "C++" },
    { name: "C" },
    { name: "Python" },
    { name: "TypeScript" },
    { name: "SQL" },
    { name: "HTML5 / CSS3" },
    { name: "JavaScript (ES6+)" },
    { name: "ReactJS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "EJS" },
  ],
  aiMlResearch: [
    { name: "Artificial Intelligence Fundamentals" },
    { name: "Graph Neural Networks (GCNs)" },
    { name: "Transformers & Attention" },
    { name: "Recurrent Neural Networks (RNNs)" },
    { name: "Reinforcement Learning (RL)" },
    { name: "PyTorch / TensorFlow" },
    { name: "Molecular Fingerprints (RDKit)" },
    { name: "Molecular Lead Optimization" },
  ],
  databasesCloud: [
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "AWS" },
    { name: "Postman" },
    { name: "REST API Testing" },
  ],
  analyticsTools: [
    { name: "Power BI" },
    { name: "Tableau" },
    { name: "Microsoft Excel" },
    { name: "Looker Studio" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Canva" },
    { name: "Codex" },
    { name: "Claude Code" },
  ],
  coreConcepts: [
    { name: "Data Structures & Algorithms" },
    { name: "Object-Oriented Programming (OOP)" },
    { name: "Database Management Systems (DBMS)" },
    { name: "Software Engineering Fundamentals" },
    { name: "Operating Systems" },
    { name: "Computer Networks" },
  ]
};

export const academicTimeline = [
  {
    id: "btech-cse",
    period: "Aug 2024 – Present",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Gautam Buddha University, Greater Noida",
    cgpa: "9.32 CGPA",
    sgpaGrid: [
      { sem: "Semester 1", sgpa: "9.36 SGPA", topper: false },
      { sem: "Semester 2", sgpa: "9.40 SGPA", topper: true },
      { sem: "Semester 3", sgpa: "8.72 SGPA", topper: false },
      { sem: "Semester 4", sgpa: "9.80 SGPA", topper: true }
    ],
    description: "Pursuing Computer Science & Engineering with a strong focus on Software Engineering, Data Structures & Algorithms, Artificial Intelligence, and Full-Stack Development. Maintaining strong academic performance while actively participating in research and competitive programming.",
    badges: [
      { text: "Branch Topper – Semester 2", type: "gold" },
      { text: "Branch Topper – Semester 4", type: "gold" },
      { text: "AI Research Intern (DST Mentorship Program)", type: "cyan" },
      { text: "725+ DSA Problems Solved", type: "purple" }
    ]
  },
  {
    id: "bsc-math",
    period: "Aug 2022 – Apr 2024",
    title: "B.Sc Mathematics (Honours)",
    institution: "Bhuwaneshwari Dayal (B.D.) College, Patna",
    scores: [
      { label: "First Year", val: "85%" },
      { label: "Second Year", val: "87%" }
    ],
    description: "Built a strong foundation in Mathematics, Logical Reasoning, and Analytical Thinking. Developed quantitative and problem-solving skills that later supported Competitive Programming, Software Development, and Artificial Intelligence studies.",
    badges: [
      { text: "Strong Mathematical Foundation", type: "standard" },
      { text: "Analytical Thinking", type: "standard" },
      { text: "Problem Solving Skills", type: "standard" }
    ]
  },
  {
    id: "class-12",
    period: "Completed 2022",
    title: "Higher Secondary (Class XII – PCM)",
    institution: "Bihar School Examination Board",
    score: "84%",
    description: "Completed Higher Secondary education with Physics, Chemistry, and Mathematics (PCM), developing strong fundamentals in mathematics and scientific reasoning.",
    badges: [
      { 
        text: "INSPIRE Scholar — Recognized among the Top 1% students in India by the Department of Science and Technology (DST), Government of India.",
        type: "inspire"
      }
    ]
  }
];

export const researchMetrics = [
  { label: "Research Project", value: "1+" },
  { label: "DST Approved", value: "Approved" },
  { label: "DSA Problems", value: "725+" },
  { label: "INSPIRE Scholar", value: "Top 1% in India" }
];

export const experienceData = [
  {
    id: "dst-lead-opt",
    role: "AI Research Intern – Drug Discovery & Lead Optimization",
    organization: "Department of Science & Technology (DST), Government of India",
    program: "Mentorship Research Project",
    period: "Jan 2026 – Mar 2026",
    topic: "Improving the Efficiency and Accuracy of Lead Optimization in Drug Discovery Using Artificial Intelligence and Machine Learning",
    description: "Working on AI/ML applications in drug discovery and lead optimization, with a focus on predicting molecular properties, ADME, and toxicity. The research involves studying SMILES, molecular fingerprints, graph-based representations, GCNs, RNNs, Transformers, and reinforcement learning to understand how AI can support molecular analysis and improve the optimization of potential drug candidates.",
    keyContributions: [
      "Studied AI and Machine Learning approaches for molecular property prediction.",
      "Explored computational techniques used in modern drug discovery pipelines.",
      "Analyzed molecular datasets and chemical representations for predictive modeling.",
      "Conducted literature reviews on emerging AI applications in healthcare and life sciences.",
      "Collaborated with mentors to understand research methodologies and experimental design."
    ],
    badges: [
      { text: "DST Approved Research Project", type: "cyan" },
      { text: "Artificial Intelligence Research", type: "purple" },
      { text: "Drug Discovery & Lead Optimization", type: "amber" },
      { text: "Scientific Literature Analysis", type: "emerald" },
      { text: "Machine Learning Applications", type: "indigo" }
    ],
    evidenceCard: {
      title: "DST Mentorship Research Project",
      status: "Approved",
      authority: "Department of Science & Technology (Government of India)",
      researchArea: "AI for Drug Discovery",
      approvalImage: "/dst_approval.png",
      coverImage: "/dst_project_cover.png",
      driveLink: "https://drive.google.com/file/d/1YBZSb-Y-jrOlDsiWwzCVKaCPWbVCi-es/view?usp=drive_link",
      drivePreview: "https://drive.google.com/file/d/1YBZSb-Y-jrOlDsiWwzCVKaCPWbVCi-es/preview"
    }
  },
  {
    id: "dst-ai-drug-discovery",
    role: "Research Intern – AI in Drug Discovery",
    organization: "Department of Science & Technology (DST), Government of India",
    program: "Mentorship Research Project",
    period: "Dec 2024 – Feb 2025",
    topic: "Applications of Artificial Intelligence in Drug Discovery",
    description: "Engaged in foundational research on artificial intelligence and machine learning applications in drug discovery, focusing on molecular analysis, predictive modeling, and early-stage drug development methodologies.",
    keyContributions: [
      "Studied AI and machine learning techniques for drug discovery, including molecular analysis and prediction.",
      "Explored hit identification and lead optimization through literature review on AI-based early-stage drug discovery."
    ],
    badges: [
      { text: "DST Approved Research Project", type: "cyan" },
      { text: "Artificial Intelligence Research", type: "purple" },
      { text: "Molecular Analysis", type: "amber" },
      { text: "Scientific Literature Review", type: "emerald" }
    ],
    evidenceCard: {
      title: "DST Mentorship Research Project",
      status: "Approved",
      authority: "Department of Science & Technology (Government of India)",
      researchArea: "AI in Drug Discovery",
      driveLink: "https://drive.google.com/file/d/1RJ4YAtvPqdndNq8cdNSZoaasmRkrUNOT/view?usp=drive_link"
    }
  }
];

export const resultsData = {
  academics: [
    { title: "Overall CGPA", value: "9.32", subtitle: "Consistent Top Academic Rank", icon: "GraduationCap" },
    { title: "Branch Position", value: "Rank 1", subtitle: "Branch Topper in CSE", icon: "Award" },
    { title: "4th Sem SGPA", value: "9.80", subtitle: "Peak Semester Performance", icon: "TrendingUp" }
  ],
  competitiveProgramming: [
    { title: "Total Solved", value: "725+", subtitle: "Across all major platforms", icon: "Code2" },
    { title: "LeetCode", value: "Active", subtitle: "Complex Algorithmic Solutions", icon: "Terminal" },
    { title: "Codeforces", value: "Active", subtitle: "Speed & Problem Solving contests", icon: "Zap" },
    { title: "GeeksforGeeks", value: "Active", subtitle: "Advanced DSA Practice", icon: "BookOpen" },
    { title: "CodeChef", value: "Active", subtitle: "Monthly Rated Contests", icon: "Trophy" }
  ],
  recognitions: [
    {
      title: "INSPIRE Scholar",
      issuer: "DST, Government of India",
      description: "Recognized among the Top 1% of science & technology students in India by the Department of Science and Technology.",
      badge: "National Honor"
    },
    {
      title: "Adobe University Hackathon",
      issuer: "Adobe India",
      description: "Successfully cleared Round 1 and advanced to Round 2 (Case Study on Brand Visibility) of the Adobe University Hackathon 2026.",
      badge: "Round 2 Selected"
    },
    {
      title: "Flipkart GRiD 8.0 Qualifier",
      issuer: "Flipkart",
      description: "Successfully cleared Round 1 of the national-level Flipkart GRiD 8.0 Software Development Challenge.",
      badge: "National Hackathon"
    },
    {
      title: "Google Student Ambassador",
      issuer: "Google",
      description: "Selected participant representing student developer activities, technical initiatives, and AI advocacy.",
      badge: "Google Ambassador"
    }
  ]
};

export const projectsData = [
  {
    id: "placementforge-revisetrack",
    title: "PlacementForge",
    tagline: "Full-Stack DSA Revision & Spaced Repetition Engine",
    statusBadge: "Full-Stack Web & Mobile App",
    description: "A comprehensive full-stack developer platform designed to track Data Structures & Algorithms revision, analyze topic weaknesses, manage contest prep, and implement an automated spaced-repetition memory engine.",
    features: [
      "Spaced Repetition Engine: Intelligent scheduling system categorizing problems across 5 retention levels (from 12-hour quick reinforcement to 7-day mastery intervals).",
      "Progress Analytics & Streak Tracking: Visual charts analyzing weak topics, daily problem volume, study hours, and contest rating progression.",
      "Smart Revision Queue: Automated daily task allocation targeting unrevised concepts and mistake vaults.",
      "Cross-Platform Architecture: Web frontend built with React/Next.js paired with a companion Flutter mobile application codebase."
    ],
    techStack: ["React / Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Flutter", "Tailwind CSS", "Chart.js"],
    category: "Featured Project",
    featured: true,
    github: "https://github.com/NITISH735-GUPTA/revisetrack",
    demo: "https://revisetrack-frontend-prod.vercel.app/",
    metrics: "Spaced Repetition & Analytics"
  },
  {
    id: "prti-platform",
    title: "PRTI Platform",
    tagline: "Pharmaceutical Research & Training Institute (PRTI)",
    statusBadge: "Under Development",
    description: "A premier technical training and educational platform bridging academic theory with real-world laboratory execution, CADD software simulations, and industrial pharmaceutical workflows.",
    features: [
      "Academic Catalog & Course Filtering: Dynamic filtering system across 22 specialized short-term certificate courses, research modules, and 1-year flagship diplomas.",
      "Admissions & Circulars Management: Real-time application countdown timers, live announcements, merit scholarship circulars, and verified student testimonial integrations.",
      "Interactive Workflow & UI: Built with responsive layout components, structured fee tables (Online vs. Offline), and streamlined enrollment pathways."
    ],
    techStack: ["React.js / Next.js", "Node.js", "Tailwind CSS", "REST APIs", "Git"],
    category: "Full-Web Platform & EdTech",
    featured: true,
    github: "https://github.com/NITISH735-GUPTA/prti-website",
    demo: "https://drive.google.com/file/d/1bddSZbHjwQQ5r12H_4baW4UYR5L0HukO/view?usp=drive_link",
    demoLabel: "Video Walkthrough",
    isVideoDemo: true,
    metrics: "EdTech & Research Hub"
  },
  {
    id: "pharmasetu-ai",
    title: "PharmaSetuAI",
    tagline: "AI-Driven Educational Platform for Next-Gen Drug Discovery",
    description: "An innovative, full-stack AI-integrated platform created to educate students, researchers, and biotech enthusiasts on molecular analysis, hit identification, and drug lead optimization.",
    features: [
      "Interactive learning modules for molecular structure visualization and property predictions.",
      "Integrated AI models simulating ligand binding affinity and lead optimization.",
      "User dashboard with structured learning paths, quizzes, and molecular graph analysis tools.",
      "Robust backend handling relational databases for chemical compound datasets."
    ],
    techStack: ["ReactJS", "Node.js", "Express.js", "MySQL", "AI/ML Integration", "Tailwind CSS", "REST APIs"],
    category: "Full-Stack + AI",
    featured: true,
    guidanceNote: "The architecture and modules of this platform are under development under the guidance of Dr. Rajesh Kumar Gupta, Drug Development Laboratory Group (DDLG), School of Vocational Studies and Applied Science, Gautam Buddha University, Greater Noida, UP, INDIA. (Past Affiliation: All India Institute of Medical Sciences, New Delhi).",
    metrics: "AI-Powered Drug Analysis"
  }
];

export const certificationsData = [
  {
    id: "inspire-scholar",
    title: "INSPIRE Scholarship Award",
    issuer: "Department of Science & Technology (DST), Govt. of India",
    date: "2023 - Present",
    status: "Active National Scholar",
    category: "National Honor",
    description: "Awarded prestigious scholarship for ranking in the top 1% of students in India in Higher Secondary examinations.",
    credentialUrl: "https://drive.google.com/file/d/1Fis6xyGderfdDGEDPszpWgDygTP66E7l/view?usp=drive_link",
    verified: true,
    badgeText: "Top 1% India"
  },
  {
    id: "google-cloud-analytics",
    title: "Google Cloud Career Launchpad – Data Analytics",
    issuer: "Google Cloud",
    date: "2024",
    status: "Completed",
    category: "Cloud & Analytics",
    description: "Comprehensive track covering BigQuery, cloud data pipelines, SQL analytics, data visualization, and ML integration.",
    credentialUrl: "https://drive.google.com/file/d/1yYl8iYNEBk1HgK30druTzoOpJKQuYapN/view?usp=drive_link",
    verified: true,
    badgeText: "Google Cloud Certified"
  },
  {
    id: "nielit-python-beginners",
    title: "Python for Beginners",
    issuer: "NIELIT Calicut (MeitY, Govt. of India)",
    date: "March 2025",
    status: "Completed",
    category: "Programming & Development",
    description: "Successfully completed a structured certification course covering fundamental Python programming, syntax, logic building, and problem-solving methodologies organized by NIELIT Calicut.",
    credentialUrl: "https://drive.google.com/file/d/1eg4oucPu5L7gqy2xjNpkxY9iTHjgsS8u/view?usp=drive_link",
    verified: true,
    badgeText: "NIELIT Certified"
  },
  {
    id: "google-student-ambassador",
    title: "Google Student Ambassador Program",
    issuer: "Google",
    date: "2024",
    status: "Participant",
    category: "Leadership & Community",
    description: "Engaged in Google-led technical workshops, AI developer advocate sessions, and peer developer mentorship.",
    credentialUrl: "https://drive.google.com/file/d/1LOQY-gVA167CQjmdtE0QMQT_nYiWLHGl/view?usp=drive_link",
    verified: true,
    badgeText: "Google Ambassador"
  },
  {
    id: "flipkart-grid",
    title: "Flipkart GRiD 8.0 – Round 1 Qualifier",
    issuer: "Flipkart",
    date: "2024 / 2025",
    status: "Round 1 Qualified",
    category: "Hackathon",
    description: "Cleared Round 1 of Flipkart's flagship national engineering challenge competing with top Indian engineering talent.",
    credentialUrl: "https://drive.google.com/file/d/1xDP2WgGKI0qXzYMYpYj7hJpVymrEn3rR/view?usp=drive_link",
    verified: true,
    badgeText: "Round 1 Qualifier"
  },
  {
    id: "adobe-hackathon-2026",
    title: "Adobe India Hackathon 2026",
    issuer: "Adobe India",
    date: "2026 (Ongoing)",
    status: "Round 2 Selected (Ongoing)",
    category: "Hackathon",
    description: "Selected for Round 2 in Adobe's national hackathon for engineering innovation and problem solving.",
    credentialUrl: "https://drive.google.com/file/d/11E9if2m6U6k2o5YTWTecPmYTMwYgF70D/view?usp=drive_link",
    verified: true,
    badgeText: "Round 2 Selected"
  },
  {
    id: "ncc-c-certificate",
    title: "NCC 'C' Certificate",
    issuer: "National Cadet Corps (NCC), India",
    date: "2024 – Present",
    status: "In Progress",
    category: "Leadership & Discipline",
    description: "Undergoing advanced cadet training demonstrating leadership, discipline, national service, and team coordination under the 37 UP Battalion NCC.",
    credentialUrl: "https://drive.google.com/file/d/1ERTS0eeX7AZFj6SlbJ-RXzthypEYQL85/view?usp=drive_link",
    verified: true,
    badgeText: "In Progress",
    credentialBtnText: "View Camp Certificate"
  }
];

export const socialLinks = [
  { name: "LeetCode", url: "https://leetcode.com/u/nitish735-gupta/", icon: "Code", color: "#ffa116" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/nitishguf5fl?tab=activity", icon: "BookOpen", color: "#2f9d51" },
  { name: "CodeChef", url: "https://www.codechef.com/users/nitish_best_51", icon: "Trophy", color: "#5b4638" },
  { name: "Codeforces", url: "https://codeforces.com/profile/Nitish_Solve_problem_51", icon: "Terminal", color: "#1f8acb" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nitish-kumar-gupta-15680b312/", icon: "Linkedin", color: "#0a66c2" },
  { name: "GitHub", url: "https://github.com/NITISH735-GUPTA", icon: "Github", color: "#f0f6fc" }
];
