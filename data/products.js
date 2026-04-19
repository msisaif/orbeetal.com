import { slugify } from "@/lib/utils";

/** From `ProductSection.jsx` + internal “Orbeetal Origins” product */
const raw = [
  {
    id: 1,
    title: "Note Sharing App",
    description:
      "A powerful note-sharing platform that helps teams collaborate efficiently. Share, edit, and organize notes seamlessly with real-time sync.",
    longDescription:
      "Built for distributed teams, the app emphasizes fast capture, shared notebooks, and permissions that mirror how real organizations work—not just single-user note taking. We designed it as a reference implementation of real-time collaboration patterns we reuse in client work.",
    features: [
      "Award Winning",
      "24/7 Support",
      "Professional Staff",
      "Fair Prices",
    ],
    image: "/images/note.png",
    imageScreen: "/images/notess2.png",
  },
  {
    id: 2,
    title: "Task Manager Pro",
    description:
      "Stay organized and productive with Task Manager Pro. Assign tasks, track deadlines, and boost productivity effortlessly.",
    longDescription:
      "Task Manager Pro demonstrates how we structure workflows, ownership, and notifications in operational software. It is a good fit for teams outgrowing spreadsheets who still need something lightweight compared to full enterprise PM suites.",
    features: [
      "Cross-Platform",
      "Secure Data",
      "Customizable Dashboard",
      "Cloud Backup",
    ],
    image: "/images/task.png",
    imageScreen: "/images/taskss.png",
  },
  {
    id: 3,
    title: "E-Learning Hub",
    description:
      "An intuitive e-learning solution for schools and businesses. Create, manage, and deliver courses with ease.",
    longDescription:
      "E-Learning Hub packages course authoring, learner progress, and assessment in one place—patterns we also apply when building custom training portals for clients. It highlights our strength in content-heavy, role-based web applications.",
    features: [
      "HD Video Classes",
      "Gamified Learning",
      "Certificate Issuing",
      "Scalable Solution",
    ],
    image: "/images/learning.jpg",
    imageScreen: "/images/learningss.png",
    featured: true,
  },
  {
    id: 4,
    title: "Finance Tracker",
    description:
      "Track expenses, set budgets, and visualize your financial health. Finance Tracker makes money management simple.",
    longDescription:
      "This product showcases dashboards, categorization rules, and gentle alerting—UX patterns that matter in fintech and internal finance tools. It is intentionally approachable for individuals and small teams before they graduate to heavier accounting systems.",
    features: [
      "Expense Tracking",
      "Budget Alerts",
      "AI Insights",
      "Multi-Currency Support",
    ],
    image: "/images/finance.jpg",
    imageScreen: "/images/financess.png",
  },
  {
    id: 5,
    title: "Education System Software",
    description:
      "Full school management suite for students, teachers, exams, and administration.",
    longDescription:
      "The suite mirrors the same modules we ship in our Orbeetal Origins portfolio entry: academics, staff, exams, and class operations in one system. It reflects how we think about multi-tenant education data, roles, and reporting for institutions that cannot afford brittle one-off spreadsheets.",
    features: [
      "Student Management",
      "Teacher Management",
      "Administration Management",
      "Exam Management",
      "Class Management",
    ],
    image: "/images/mockups/education.png",
    imageScreen: "/images/mockups/education.png",
  },
];

export const products = raw.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
