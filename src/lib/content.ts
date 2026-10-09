export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  stack: string[];
  repoUrl: string;
  image?: string;
  highlights: string[];
};

export const siteConfig = {
  name: "Sahana Sankanurmath",
  shortName: "Sahana",
  location: "Bengaluru, India",
  avatarUrl: "/sahana.jpeg",
  tagline:
    "AI & ML Graduate | Building with Data & AI | Aspiring Data Analyst",
  bio:
    "AI & Machine Learning Engineering graduate passionate about AI, data analytics, and solving real-world problems through technology. Skilled in Python, SQL, and Power BI, with an interest in building intelligent, data-driven solutions.",
  email: "sankanurmathsahana@gmail.com",
  phone: "+91 - 8073357573",
  resumeUrl:
    "https://drive.google.com/file/d/1N7eCmsuedjIOGq9GGF39aAg2dgFMti49/view?usp=sharing",
  resumeDownloadUrl:
    "https://drive.google.com/uc?export=download&id=1N7eCmsuedjIOGq9GGF39aAg2dgFMti49",
  githubUrl: "https://github.com/sahanassankanurmath",
  linkedinUrl: "https://www.linkedin.com/in/sahana-s-sankanurmath",
  skills: [],
  languages: ["Python", "SQL", "JavaScript", "HTML", "CSS", "C"],
  skillGroups: [
    {
      title: "Agentic AI & LLMs",
      sections: [
        {
          label: "SKILLS",
          items: [
            "LangChain",
            "LangGraph",
            "RAG",
            "Vector Database",
            "Foundational Transformers",
            "Google Gemini API",
            "DeepSeek",
            "n8n (AI Agent workflows)",
            "Prompt Engineering",
            "Agentic Pipelines",
          ],
        },
      ],
    },
    {
      title: "Machine Learning Foundations",
      sections: [
        {
          label: "CORE",
          items: [
            "Neural Networks",
            "Gradient Descent",
            "Backpropagation",
            "Regression",
            "Classification",
            "Loss Functions",
            "Evaluation Metrics",
            "Normalization",
          ],
        },
        {
          label: "TOOLS & LIBRARIES",
          items: [
            "Scikit-learn",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Supervised Learning",
            "Unsupervised Learning",
            "Clustering",
            "Anomaly & Novelty Detection",
            "Visualization & Dimensionality Reduction",
          ],
        },
      ],
    },
    {
      title: "Deep Learning & Computer Vision",
      sections: [
        {
          label: "CORE",
          items: [
            "CNNs",
            "RNN",
            "LSTM",
            "Transformers",
            "LLM",
          ],
        },
        {
          label: "TOOLS & LIBRARIES",
          items: [
            "PyTorch",
            "TensorFlow",
            "Keras",
            "ResNet",
            "VGG16",
            "Word Embeddings",
            "Attention",
            "Context Window",
            "Perceptrons",
            "RLHF",
          ],
        },
      ],
    },
    {
      title: "Full-Stack Development",
      sections: [
        {
          label: "CORE",
          items: ["React", "Next.js", "FastAPI", "Python"],
        },
        {
          label: "TOOLS",
          items: ["Tailwind CSS", "NoSQL", "REST APIs"],
        },
      ],
    },
    {
      title: "Data Analytics",
      sections: [
        {
          label: "CORE",
          items: [
            "Data Cleaning",
            "Exploratory Data Analysis",
            "Data Visualization",
            "Feature Engineering",
            "Dashboards",
            "Data Reconciliation",
            "Data Storytelling",
          ],
        },
        {
          label: "TOOLS",
          items: ["SQL (MySQL)", "Python", "Power BI", "Advanced Excel", "Streamlit", "Tableau"],
        },
      ],
    },
    {
      title: "Developer Tools & Environment",
      sections: [
        {
          label: "CORE",
          items: ["Git", "GitHub", "Linux (Ubuntu)", "Bash", "Docker"],
        },
        {
          label: "TOOLS & LIBRARIES",
          items: ["VS Code", "Jupyter Notebook", "Vercel", "n8n"],
        },
      ],
    },
  ],
  education: [
    {
      title: "Degree",
      institution: "Basaveshwar Engineering College, Bagalkote",
      period: "2022 - 2026",
      detail: "Artificial Intelligence and Machine Learning with 8.49 CGPA",
    },
    {
      title: "Secondary Education",
      institution: "Spandana PU Science College, Ilkal",
      period: "2020 - 2022",
      detail: "Science Stream with 81.5%",
    },
  ],
  experience: [
    {
      company: "Incanto Dynamics",
      companyUrl: "https://www.incantodynamics.com/",
      role: "Digital Maven",
      type: "Agentic AI Intern · Internship",
      period: "Feb 2026 - Jun 2026",
      projectUrl: "https://github.com/sahanassankanurmath/Agentic-RAG-Chatbot",
      bullets: [
        "Automated industrial sensor data reporting by engineering an agentic Python pipeline, saving 20+ hours per week in manual effort.",
        "Created a Streamlit chatbot that translated plain-English queries into data lookups via an LLM, reducing data retrieval time by 75%.",
        "Optimized LLM prompts and retrieval mechanisms for a machine-health chatbot, increasing query-resolution accuracy by 20%.",
      ],
      tags: ["Python", "Excel", "Data Insights", "LLM", "RAG", "Vector Database", "Prompt Engineering"],
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "agentic-rag-chatbot",
    title: "Agentic-RAG Chatbot",
    eyebrow: "Open Knowledge Assistant",
    summary:
      "An Agentic RAG chatbot that lets users upload multiple PDFs and ask natural-language questions. Answers are grounded in the documents, with source citations (PDF name and page number) and a reasoning trace.",
    description:
      "Answers are grounded in uploaded documents, with source citations including PDF name and page number, plus a reasoning trace.",
    stack: ["Python", "LangChain", "FAISS", "SentenceTransformers", "PyPDF2", "Gemini API", "OpenAI API", "DuckDuckGo Search", "RAG", "Vector Search", "Embeddings", "Streamlit"],
    image: "/projects/agentic-rag.png",
    repoUrl:
      "https://github.com/sahanassankanurmath/Agentic-RAG-Chatbot",
    highlights: [
      "Combines retrieval with agentic decision-making for knowledge-grounded responses.",
      "Designed around transparent context retrieval rather than unsupported generation.",
      "Documented the project architecture and setup for reproducibility.",
    ],
  },
  {
    slug: "classroom-attendance",
    title: "Classroom Attendance with Face Recognition System",
    eyebrow: "Face Recognition System",
    summary:
      "A Python system that automates classroom attendance using real-time face detection and recognition with OpenCV. Students are identified from a live camera feed, and attendance is sent out automatically by email.",
    description:
      "A Python system that automates classroom attendance using real-time face detection and recognition with OpenCV. Students are identified from a live camera feed, and attendance is sent out automatically by email.",
    stack: ["Python", "OpenCV", "Haar Cascade", "Face Detection", "Face Recognition", "NumPy", "Pandas", "Yagmail", "Computer Vision"],
    image: "/projects/classroom-attendance.png",
    repoUrl:
      "https://github.com/sahanassankanurmath/-Classroom-Attendance-with-Face-Recognition-System",
    highlights: [
      "Automates attendance marking from a live camera feed.",
      "Uses Haar Cascade for face detection and LBPH for face recognition.",
      "Sends attendance updates automatically by email to reduce manual work.",
    ],
  },
  {
    slug: "adaptive-learning-engine",
    title: "Adaptive Learning Engine",
    eyebrow: "AI-Powered Education",
    summary:
      "An adaptive learning platform where an n8n workflow (Webhook, AI Agent with DeepSeek, custom JavaScript node) generates personalized learning content. The React + Vite frontend uses Tailwind CSS, React Router and Axios to talk to a Node.js/MongoDB backend. It includes PDF export with jsPDF and is deployed on Vercel.",
    description:
      "An n8n workflow using Webhook, an AI Agent with DeepSeek, and a custom JavaScript node generates personalized learning content. The React + Vite frontend uses Tailwind CSS, React Router, and Axios to communicate with a Node.js/MongoDB backend. It includes PDF export with jsPDF and is deployed on Vercel.",
    stack: ["React 19", "Vite", "Tailwind CSS", "React Router", "Axios", "jsPDF", "Node.js", "MongoDB", "n8n", "DeepSeek AI", "AI Agents", "Webhooks", "REST APIs", "Vercel"],
    image: "/projects/adaptive-learning.png",
    repoUrl: "https://github.com/sahanassankanurmath/Project-n8n",
    highlights: [
      "Uses automation to connect learner inputs with personalized next steps.",
      "Focuses on making educational support more responsive and accessible.",
      "Demonstrates practical orchestration beyond a standalone model demo.",
    ],
  },
  {
    slug: "smart-monitoring-drowsiness-detection",
    title: "Smart Monitoring and Safety Assurance System",
    eyebrow: "Drowsiness Detection for Vehicle Drivers",
    summary:
      "A driver-monitoring system that detects fatigue in real time to help prevent road accidents. It uses OpenCV and dlib to track facial landmarks, then calculates eye and mouth aspect ratios (SciPy) to detect eye closure and yawning. When drowsiness is detected, it triggers audio alerts (Pygame) and text warnings.",
    description:
      "A driver-monitoring system that detects fatigue in real time to help prevent road accidents. It uses OpenCV and dlib to track facial landmarks, then calculates eye and mouth aspect ratios (SciPy) to detect eye closure and yawning. When drowsiness is detected, it triggers audio alerts (Pygame) and text warnings.",
    stack: ["Python", "OpenCV", "dlib", "Facial Landmarks", "SciPy", "imutils", "Pygame", "Argparse", "Computer Vision", "Eye Aspect Ratio (EAR)", "Mouth Aspect Ratio (MAR)", "Raspberry Pi"],
    image: "/projects/drowsiness-detection.jpg",
    repoUrl:
      "https://github.com/sahanassankanurmath/Smart-Monitoring-and-Safety-Assurance-System-With-Drowsiness-Detection-for-Vehicle-Drivers",
    highlights: [
      "Designed a real-time monitoring workflow for driver alertness.",
      "Applied computer vision to a practical vehicle-safety problem.",
      "Focused on reducing the risk of fatigue-related driving incidents.",
    ],
  },
];
