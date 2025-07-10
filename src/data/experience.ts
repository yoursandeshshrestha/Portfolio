export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  image: string;
  link: string;
  description: string;
  technologies: string[];
  achievements: string[];
  process?: string[];
  type: "full-time" | "contract" | "freelance" | "internship";
}

export const workExperience: WorkExperience[] = [
  {
    id: "fordel-2024",
    title: "Software Development Engineer",
    company: "Fordel",
    period: "Oct 2024 - Present",
    location: "Onsite",
    image: "/company/fordel.jpg",
    link: "https://fordelstudios.com/",
    type: "full-time",
    description:
      "Started as an intern and put in extreme effort to prove myself - coding 13-14 hours a day. After 3 months of exceptional performance, I was the only one promoted to Associate Developer. Then I got asked to lead a team building a complex project that was a direct competitor to Tira Beauty. I handled everything - client meetings, requirement analysis, scope preparation, project timeline, PR reviews, merges, and deployments. Due to my excellent performance, I got a salary increment too.",
    technologies: [
      "Next.js",
      "React",
      "Redux",
      "MongoDB",
      "SQL",
      "Docker",
      "Nginx",
      "Git",
      "Bitbucket",
      "Tailwind CSS",
      "Node.js",
      "TypeScript",
      "Prisma",
      "Framer Motion",
      "Shadcn/ui",
      "Vercel",
      "AWS",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Stripe",
      "SendGrid",
      "Cloudinary",
      "Firebase",
      "ESLint",
      "Elasticsearch",
      "Swagger",
      "S3",
      "CloudFront",
      "alot of other technologies",
    ],
    achievements: [
      "Put in extreme effort as an intern - coding 13-14 hours daily to prove myself (still coding 10-18 hours a day)",
      "Only one promoted to Associate Developer after 3 months due to exceptional performance",
      "Led a complex project competing directly with Tira Beauty - handled everything from client meetings to deployments",
      "Managed requirement analysis, scope preparation, project timeline, PR reviews, merges, and deployments",
      "Got salary increment due to excellent performance and top talent recognition",
    ],
  },

  {
    id: "bluestock-2024",
    title: "Backend Engineer - Python",
    company: "Bluestock",
    period: "Mar 2024 - Dec 2024",
    location: "Remote",
    image: "/company/bluestock.jpg",
    link: "https://bluestock.in/",
    type: "contract",
    description:
      "I joined Bluestock as a remote intern thinking it would be a great opportunity. But from the very beginning, the tasks we received were extremely unclear. We spent a lot of time just trying to figure out what we were supposed to build. I was part of a team of five, and for most of us, it was our first internship. Despite the confusion and lack of direction, we somehow managed to coordinate with each other and finish what was asked. Over the course of three months, we built the IPO backend for the Bluestock platform using Python. It wasn’t perfect, and it wasn’t easy, but we got it done.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Git",
      "Postman",
    ],
    achievements: [
      "I dont think there was any achievement, but I did learn a lot about backend.",
    ],
  },
  {
    id: "freelance-2023",
    title: "Full-Stack Development & DevOps Engineer - Freelance",
    company: "Freelance",
    period: "Jun 2023 - Dec 2023",
    location: "Remote",
    image: "/blob/blob-4.png",
    link: "#",
    type: "freelance",
    description:
      "I'm the guy clients call when they need a working product that actually works when they click their domain. I handle everything - frontend, backend, deployment, and everything in between. Because let's face it, clients don't care about your tech stack, they care about results. I've completed 6+ freelance projects so far, and every single client has been happy with the final result. Still collecting feedback words from clients - will be updated soon here.",
    technologies: ["Frontend", "Backend", "Deployment", "Client Management"],
    achievements: [
      "Delivered working products on time and within budget (no excuses)",
      "All clients are very happy with the final result (still collecting feedback words from clients - will be updated soon here)",
    ],
    process: [
      "Deep dive into client requirements, vision, and business goals",
      "Provide strategic recommendations and improvement suggestions",
      "Conduct multiple discovery sessions to align on every detail",
      "Create comprehensive scope of work, pricing, and project roadmap",
      "Client approval and contract finalization",
      "20% upfront payment to initiate development",
      "Regular milestone demos (30%, 50%, 70%, 90%) with client feedback",
      "Change requests handled through formal process with additional costs",
      "Final testing, deployment, and client training",
      "Project handover and client satisfaction confirmation",
      "Post-launch support and relationship maintenance",
    ],
  },
];

export const experienceStats = {
  totalYears: 2,
  totalFreelanceProjects: 8,
  totalCompanyProjects: 4,
  totalCodingHours: 8000,
  CodingDate: "(From March 15th 2024 to Present)",
  totalGitHubContributions: 3000,
};
