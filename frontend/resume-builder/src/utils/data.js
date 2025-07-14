export const DUMMY_RESUME_DATA = {
  title: "Full Stack Developer Resume",
  thumbnailLink: "",
  profileInfo: {
    profileImg: null,
    profilePreviewUrl: "",
    fullName: "John Doe",
    designation: "Full Stack Developer",
    summary:
      "Highly skilled Full Stack Developer with 5+ years of experience building scalable web applications using React, Node.js, and MongoDB. Passionate about clean code and continuous learning.",
  },
  template: {
    theme: "modern",
    colorPalette: "blue",
  },
  contactInfo: {
    email: "johndoe@example.com",
    phone: "9876543210",
    location: "New York, USA",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.dev",
  },
  workExperience: [
    {
      company: "Tech Corp",
      role: "Senior Developer",
      startDate: "2020-01",
      endDate: "2023-12",
      description:
        "Developed scalable REST APIs, optimized backend logic, and collaborated closely with frontend teams.",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "XYZ University",
      startDate: "2015-08",
      endDate: "2019-05",
    },
  ],
  skills: [
    { name: "JavaScript", progress: 90 },
    { name: "React.js", progress: 85 },
    { name: "Node.js", progress: 80 },
  ],
  projects: [
    {
      title: "E-Commerce App",
      description:
        "Built a full-stack e-commerce app with payment gateway integration and admin dashboard.",
      github: "https://github.com/johndoe/ecommerce-app",
      liveDemo: "https://ecommerce.johndoe.dev",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2022",
    },
  ],
  languages: [
    { name: "English", progress: 100 },
    { name: "Spanish", progress: 70 },
  ],
  interests: ["Reading Tech Blogs", "Open Source Contributions"],
};

// Define available resume templates (you can map these to component IDs in RenderResume)
export const resumeTemplates = [
  {
    id: "modern",
    label: "Modern",
    description: "A clean and professional layout for all roles.",
    previewImg: "/images/templates/modern.png", // Add proper preview images
  },
  {
    id: "classic",
    label: "Classic",
    description: "A traditional resume layout with strong typography.",
    previewImg: "/images/templates/classic.png",
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Sleek, minimal design with good white space.",
    previewImg: "/images/templates/minimal.png",
  },
];

// Define color palettes per theme or universally
export const themeColorPalette = {
  blue: ["#1e3a8a", "#3b82f6", "#bfdbfe"],
  green: ["#065f46", "#10b981", "#6ee7b7"],
  orange: ["#c2410c", "#f97316", "#fdba74"],
  purple: ["#6b21a8", "#a855f7", "#d8b4fe"],
  gray: ["#374151", "#9ca3af", "#f3f4f6"],
};
