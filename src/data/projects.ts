export const projects = [
  {
    image: "/project/images/devops/devops.png",
    date: "Jan 2025 – Present",
    title: "Multi-Environment DevOps Automation",
    difficulty: "Beginner",
    slug: "devops-project",
    tags: ["devops", "backend"],
    stack:
      "Docker, GitHub Actions, PM2, NGINX, Node.js, Bash, Linux (Ubuntu), DigitalOcean VPS, SSL/TLS, SSH",
    link: {
      sourcecode: "https://github.com/yourusername/devops-starter-template",
    },
    description:
      "A practical DevOps project demonstrating multi-environment containerization, automated CI/CD pipelines, and production-grade deployment automation. Features include Docker containerization across dev/staging/prod environments, GitHub Actions workflows with SSH deployment, NGINX reverse proxy configuration with domain mapping, PM2 process management with clustering, and automated deployment scripts. Built with real-world DevOps practices and tools.",
  },
  {
    image: "/project/images/formula/main.png",
    video: "/project/video/formula-video.mp4",
    date: "Oct 2024 – Present",
    title: "Formula",
    difficulty: "Advanced",
    slug: "formula",
    tags: ["frontend", "backend"],
    stack:
      "Next.js, React, TailwindCSS, Shiprocket, Razorpay, Custom Magento, Deployment - CI/CD",
    link: {
      demo: "https://formula.yellowchalk.dev",
      sourcecode: "https://github.com/wordimpactnetwork/wordimpactnetwork",
    },
    description:
      "A full-scale, advanced e-commerce platform built as a direct competitor to Tira Beauty. Architected and developed end-to-end (frontend, backend, database, deployment) with 70,000+ lines of code. Features include real-time order tracking, personalized recommendations, routine builder, and seamless integrations with Shiprocket, Razorpay, and a custom Magento backend. Designed for scalability, maintainability, and a luxury-brand user experience.",
  },
  {
    image: "/project/images/win/backend.png",
    date: "April 2025 – Present",
    difficulty: "Intermediate",
    title: "Word Impact Network Backend",
    slug: "word-impact-network-backend",
    tags: ["backend", "devops"],
    stack:
      "Node.js, Express.js, TypeScript, Prisma ORM, PostgreSQL, Redis, Zod, Docker, Swagger, Socket.io, Cloudinary, Winston",
    link: {
      sourcecode:
        "https://github.com/wordimpactnetwork/wordimpactnetwork-backend",
    },
    description:
      "A production-grade Learning Management System (LMS) backend with 88+ API endpoints, featuring dual authentication (Admin/Student), course management, progress tracking, assessment systems, real-time analytics, and third-party integrations. Built with Node.js, Express.js, TypeScript, Prisma ORM (PostgreSQL), Redis, Zod, and Docker. Includes real-time messaging (Socket.io), file uploads (Cloudinary), robust logging (Winston), automated testing (Jest), and CI/CD-ready Docker workflows.",
  },
];
