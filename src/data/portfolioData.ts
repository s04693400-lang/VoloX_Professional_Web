import { VoloXProject, JourneyMilestone, SkillItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: "Sri Hari Hara Sudhan",
  initials: "SH",
  origin: "Tamil Nadu, India",
  headline: "Young Innovator. Future Engineer. Technology Creator.",
  description: "Exploring the future through artificial intelligence, robotics, processor design, and innovative technology.",
  initiative: "VoloX Projects",
  initiativeTagline: "Pioneering concepts in intelligent computing, robotics, and next-generation devices.",
  defaultAvatar: "/images/srihari_profile.jpg",
  email: "s04693400@gmail.com",
  socials: {
    twitter: "https://x.com/Srihari455990",
    twitterHandle: "@Srihari455990",
    linkedInName: "Sri Hari Sri Hari",
    linkedInSearchUrl: "https://www.linkedin.com/search/results/all/?keywords=Sri%20Hari%20Sri%20Hari",
    githubUrl: "https://github.com/s04693400-lang",
    githubPlaceholder: "https://github.com/s04693400-lang",
  },
  vision: "To explore new ideas and create technology that can make a positive difference in people's lives.",
  mission: "To keep learning, experiment with innovative ideas, and develop useful projects in AI, robotics, electronics, and computing."
};

export const PROJECTS: VoloXProject[] = [
  {
    id: "volox-ai",
    title: "VoloX AI",
    category: "AI & Software",
    status: "In Development",
    summary: "Intelligent AI assistant platform exploring autonomous task coordination and multimodal reasoning.",
    description: "VoloX AI is an experimental artificial intelligence initiative exploring natural language interaction, dynamic tool orchestration, and personal productivity enhancement. Built as an active research project, it aims to test novel reasoning prompts, context windows, and responsive assistant interfaces.",
    image: "/images/volox_ai_chip_1792995386033.jpg",
    iconName: "BrainCircuit",
    tags: ["Artificial Intelligence", "Language Models", "Autonomous Agents", "System Design"],
    focusAreas: [
      "Natural conversational workflows",
      "Context retention and personal assistant logic",
      "Integration with local device actions",
      "Ethical AI and responsive execution"
    ],
    currentPhase: "Active core logic architecture & prompt engineering evaluation",
    liveUrl: null,
    linkNote: "Project in active development. Verified live link will be added upon public release."
  },
  {
    id: "volox-smartphone",
    title: "VoloX Smartphone",
    category: "Hardware & Devices",
    status: "Coming Soon",
    summary: "Next-generation smartphone hardware and OS concept focused on ergonomic minimalism and ambient intelligence.",
    description: "The VoloX Smartphone is a forward-looking hardware and operating system concept. It explores how next-generation mobile devices can integrate edge AI processing, ultra-efficient power states, advanced titanium chassis engineering, and an intuitive ambient user experience that minimizes digital clutter.",
    image: "/images/volox_smartphone_concept_1792995386230.jpg",
    iconName: "Smartphone",
    tags: ["Hardware Architecture", "Mobile OS Concept", "Industrial Design", "Edge AI"],
    focusAreas: [
      "Ergonomic aerospace chassis modeling",
      "Privacy-first edge neural computation",
      "Minimalist, distraction-free OS interface design",
      "Thermal management and compact component layouts"
    ],
    currentPhase: "Concept modeling, industrial ergonomics, and OS wireframe development",
    liveUrl: null,
    linkNote: "Concept & development initiative. Official technical blueprints coming soon."
  },
  {
    id: "volox-cpu",
    title: "VoloX CPU / Processor Design",
    category: "Hardware & Architecture",
    status: "In Development",
    summary: "Architectural exploration of custom instruction sets, arithmetic logic units, and CPU source simulation.",
    description: "An in-depth technical exploration into computer architecture and silicon design fundamentals. VoloX CPU focuses on drafting microarchitecture diagrams, writing instruction set simulators, understanding pipeline execution (fetch, decode, execute, memory, writeback), and testing hardware description constructs.",
    image: "/images/volox_ai_chip_1792995386033.jpg",
    iconName: "Cpu",
    tags: ["Microarchitecture", "Instruction Set Design", "Digital Logic", "Simulation"],
    focusAreas: [
      "Custom 32/64-bit instruction set architecture (ISA) concepts",
      "ALU arithmetic design and register file planning",
      "Pipeline hazard detection and branching strategies",
      "Software simulator for instruction cycle benchmarking"
    ],
    currentPhase: "Drafting microarchitecture schematics and register-transfer level (RTL) models",
    liveUrl: null,
    linkNote: "In development. Source code repositories will be linked once verified."
  },
  {
    id: "volox-search",
    title: "VoloX Search Engine App",
    category: "AI & Software",
    status: "In Development",
    summary: "Clean, direct search-engine application engineered for structured knowledge retrieval without clutter.",
    description: "The VoloX Search Engine project explores efficient information retrieval, semantic query parsing, and distraction-free web exploration. Designed to prioritize speed, relevance, and high-signal technical documentation, it reimagines how users query and synthesize knowledge.",
    image: null,
    iconName: "Search",
    tags: ["Information Retrieval", "Semantic Indexing", "Web Crawler", "Speed & Privacy"],
    focusAreas: [
      "Semantic keyword indexing algorithms",
      "Ad-free, lightning-fast search ranking heuristics",
      "Direct technical knowledge card generation",
      "Privacy-respecting query processing"
    ],
    currentPhase: "Engine crawler prototype and algorithmic index modeling",
    liveUrl: null,
    linkNote: "In active development. Public demonstration link will be published upon testing completion."
  },
  {
    id: "volox-assistant-car",
    title: "VoloX AI Assistant Car",
    category: "Robotics & Mobility",
    status: "Concept Phase",
    summary: "Conceptual systems design for an autonomous, AI-driven vehicle companion and intelligent cockpit.",
    description: "A visionary transportation concept merging robotics, vehicular telemetry, and proactive artificial intelligence. The VoloX Assistant Car explores how vehicles can anticipate passenger needs, monitor surrounding roadway conditions via sensor fusion, and serve as an intelligent robotic companion on the road.",
    image: "/images/volox_electric_car_1792995388022.jpg",
    iconName: "Car",
    tags: ["Autonomous Mobility", "Vehicle Telemetry", "Cockpit AI", "Sensor Fusion"],
    focusAreas: [
      "Integrated sensor suite layout (LiDAR, ultrasonic, optical)",
      "Real-time situational awareness and spatial mapping",
      "Voice-first assistant interface with vehicular controls",
      "Safety redundancies and energy management models"
    ],
    currentPhase: "Conceptual systems blueprint & sensor communication topology design",
    liveUrl: null,
    linkNote: "Visionary mobility concept. Detailed design whitepaper coming soon."
  },
  {
    id: "srihari-robotics-site",
    title: "Srihari Robotics Website",
    category: "Robotics & Mobility",
    status: "In Development",
    summary: "Dedicated digital portal showcasing hands-on robotics builds, embedded systems, and circuit schematics.",
    description: "The official web platform under development to showcase robotics projects, servo controllers, microcontroller firmware (Arduino/ESP32), circuit schematics, and mechanical assembly logs. Designed to document real-world laboratory experiments and encourage maker education.",
    image: "/images/volox_robotics_arm_1792995387702.jpg",
    iconName: "Bot",
    tags: ["Robotics Portal", "Embedded C++", "Microcontrollers", "Hardware Schematics"],
    focusAreas: [
      "Interactive hardware project showcases",
      "Embedded code repositories and wiring guides",
      "Robotic arm kinematics and motor driver documentation",
      "Community tutorials for aspiring robotics enthusiasts"
    ],
    currentPhase: "Platform design and build documentation compilation",
    liveUrl: null,
    linkNote: "Verified website URL will be added once Sri Hari publishes the domain."
  },
  {
    id: "srihari-karate-site",
    title: "Srihari Karate Website",
    category: "Martial Arts & Community",
    status: "In Development",
    summary: "Online home celebrating traditional karate philosophy, kata techniques, discipline, and training knowledge.",
    description: "A dedicated martial arts digital platform connecting physical discipline with personal growth. This website will document kata forms, stances, conditioning principles, and the mindset of continuous improvement that bridges traditional martial arts discipline with engineering rigor.",
    iconName: "Shield",
    tags: ["Martial Arts", "Traditional Karate", "Physical Conditioning", "Discipline"],
    focusAreas: [
      "Kata techniques and visual training guides",
      "The philosophy of discipline and mental resilience",
      "Training drills and conditioning routines",
      "Personal martial arts journey and dedication"
    ],
    currentPhase: "Curriculum structure, philosophy archive, and website interface design",
    liveUrl: null,
    linkNote: "Verified website URL will be linked once published."
  },
  {
    id: "karate-classes-initiative",
    title: "Karate and Martial Arts Classes",
    category: "Martial Arts & Community",
    status: "Coming Soon",
    summary: "Future teaching initiative to instill discipline, self-defense skills, and confidence in the youth community.",
    description: "An upcoming community-focused initiative by Sri Hari to teach the fundamental principles of Karate. Centered on self-defense, respect, focus, and holistic fitness, these future classes aim to inspire young practitioners to build confidence and strength through disciplined martial arts training.",
    iconName: "Award",
    tags: ["Community Classes", "Youth Empowerment", "Self Defense", "Physical Fitness"],
    focusAreas: [
      "Foundational strikes, blocks, and stances",
      "Confidence building and focus enhancement for youth",
      "Safety, respect, and non-violent conflict resolution",
      "Structured belt progress and physical fitness routines"
    ],
    currentPhase: "Syllabus planning and training facility concept design",
    liveUrl: null,
    linkNote: "Future community initiative. Enrollment details will be announced upon launch."
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "journey-1",
    theme: "Exploring Technology and Engineering",
    subtitle: "The Spark of Curiosity",
    description: "Starting from an early fascination with how mechanical devices, electronic gadgets, and digital systems operate beneath the surface. Constantly asking questions, disassembling mechanisms, and seeking to understand fundamental physical and computational principles.",
    iconName: "Compass",
    learningFocus: ["Mechanical principles", "Introductory electronics", "Scientific inquiry", "Problem solving"]
  },
  {
    id: "journey-2",
    theme: "Learning Software and AI Development",
    subtitle: "Code as a Creative Medium",
    description: "Diving into programming languages, algorithmic problem solving, modern web frameworks, and the possibilities of artificial intelligence. Exploring how software models can learn, synthesize information, and automate complex workflows.",
    iconName: "Code2",
    learningFocus: ["Programming fundamentals", "Machine learning concepts", "Web application logic", "API orchestration"]
  },
  {
    id: "journey-3",
    theme: "Experimenting with Robotics and Electronics",
    subtitle: "Bridging Code into the Physical World",
    description: "Hands-on prototyping with breadboards, microcontrollers, sensors, actuators, and motor drivers. Experimenting with how code interacts with physical actuators to create responsive robots and autonomous electromechanical devices.",
    iconName: "Cpu",
    learningFocus: ["Microcontroller firmware", "Circuit breadboarding", "Sensor calibration", "Motor control kinematics"]
  },
  {
    id: "journey-4",
    theme: "Exploring Processor and Hardware Design",
    subtitle: "Demystifying Silicon Architecture",
    description: "Venturing into the internal architecture of central processing units (CPUs). Learning digital logic gates, registers, memory hierarchies, arithmetic logic units, and how instructions are interpreted and executed at the silicon level.",
    iconName: "Layers",
    learningFocus: ["Digital logic synthesis", "Instruction set architectures", "Pipeline execution", "Hardware description concepts"]
  },
  {
    id: "journey-5",
    theme: "Developing the VoloX Projects Vision",
    subtitle: "Founding an Innovation Ecosystem",
    description: "Synthesizing diverse technical interests into a unified innovation umbrella: VoloX Projects. Creating ambitious concept roadmaps spanning intelligent software, connected mobility, and custom hardware initiatives.",
    iconName: "Rocket",
    learningFocus: ["Product conceptualization", "System integration", "Long-term innovation roadmaps", "Brand ethos"]
  },
  {
    id: "journey-6",
    theme: "Working Toward Future Technology Products",
    subtitle: "From Concepts to Impact",
    description: "The ongoing frontier: iterating through prototypes, deepening engineering mastery, seeking collaborative feedback, and working toward delivering real-world products that make a positive difference in human lives.",
    iconName: "Target",
    learningFocus: ["Rigorous prototyping", "Continuous skill refinement", "Community collaboration", "Impactful execution"]
  }
];

export const SKILL_CARDS: SkillItem[] = [
  {
    id: "skill-ai",
    name: "AI & Machine Learning Exploration",
    category: "Software & Intelligence",
    description: "Actively studying machine learning foundations, large language model integration, semantic parsing, and autonomous reasoning workflows.",
    iconName: "Sparkles",
    topics: ["Language Model Prompts", "Context Management", "Autonomous Agents", "Intelligent Assistants"]
  },
  {
    id: "skill-web-app",
    name: "Web & Application Development",
    category: "Software Engineering",
    description: "Building responsive, modern user interfaces with clean architecture, modern component frameworks, and responsive UX design.",
    iconName: "Layout",
    topics: ["React & TypeScript", "Tailwind CSS", "Responsive Design", "Component Systems"]
  },
  {
    id: "skill-robotics",
    name: "Robotics & Embedded Systems",
    category: "Hardware & Mechatronics",
    description: "Working with microcontrollers, servo motors, sensory feedback loops, and embedded logic to bring physical machines to life.",
    iconName: "Bot",
    topics: ["Microcontrollers", "Servo Kinematics", "Sensor Integration", "Embedded Logic"]
  },
  {
    id: "skill-electronics",
    name: "Electronics & Hardware Experimentation",
    category: "Hardware Engineering",
    description: "Prototyping breadboard circuits, analyzing voltage currents, experimenting with electronic components, and designing basic schematics.",
    iconName: "Zap",
    topics: ["Circuit Prototyping", "Component Analysis", "Power Distribution", "Hardware Schematics"]
  },
  {
    id: "skill-cpu",
    name: "CPU Architecture & Digital Design",
    category: "Computer Engineering",
    description: "Investigating the fundamental building blocks of computing: ALU design, instruction fetch/decode/execute cycles, and logic gate architectures.",
    iconName: "Cpu",
    topics: ["Instruction Set Architecture", "ALU Design", "Pipeline Basics", "Digital Logic Gates"]
  },
  {
    id: "skill-product",
    name: "Product Concepts & Innovation",
    category: "Entrepreneurship",
    description: "Translating bold ideas into cohesive product blueprints, technical roadmaps, visual mockups, and strategic innovation initiatives.",
    iconName: "Lightbulb",
    topics: ["System Architecture", "Concept Ideation", "User Ergonomics", "Product Roadmapping"]
  },
  {
    id: "skill-karate",
    name: "Karate & Martial Arts",
    category: "Discipline & Wellness",
    description: "Practicing traditional karate for mental focus, physical conditioning, perseverance, self-defense, and unwavering discipline in every challenge.",
    iconName: "Shield",
    topics: ["Kata Precision", "Physical Conditioning", "Self-Discipline", "Mindfulness & Focus"]
  }
];

export const INITIAL_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Founded VoloX Projects Initiative",
    category: "Entrepreneurship & Innovation",
    dateOrStage: "Active Milestone",
    description: "Established the VoloX Projects innovation banner to unite multi-disciplinary explorations across AI, processor architecture, robotics, and consumer devices.",
    verified: true
  },
  {
    id: "ach-2",
    title: "VoloX Concept Portfolio Launch",
    category: "Engineering Architecture",
    dateOrStage: "Active Milestone",
    description: "Published official technical architectural blueprints and development roadmaps for 8 core technological and community initiatives.",
    verified: true
  },
  {
    id: "ach-3",
    title: "Martial Arts Dedication & Practice",
    category: "Personal Discipline",
    dateOrStage: "Ongoing Discipline",
    description: "Consistent training in traditional karate, fostering the mental resilience, respect, and endurance that directly informs engineering pursuits.",
    verified: true
  }
];
