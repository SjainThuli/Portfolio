import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ecommerce,
  plantcare,
  paylesotho,
  threejs,
  paymentgateway,
  CodTech,
  outsourced,
  nerdyjoy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const profile = [
  {
    name: "Tholoana",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fls.linkedin.com%2Fin%2Ftholoana-sejane-976447187&psig=AOvVaw3xZZQ5Gv8GzAlXZCBTS-XP&ust=1747742369672000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjiwoG-r40DFQAAAAAdAAAAABAE"
  }
]

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Scientist Intern",
    company_name: "CodTech IT Solutions PVT.Ltd",
    icon: CodTech,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Participated in a 16-week intensive data science program with hands-on machine learning tasks.",
      "Analyzed real-world datasets to develop and refine predictive models using Python and TensorFlow.",
      "Conducted exploratory data analysis and data visualization to support business insights.",
      "Collaborated with mentors to iterate on model performance and solution delivery.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Pay Lesotho",
    icon: paylesotho,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Designed and deployed fintech applications for cross-border payments and utilities using React Native and Node.js.",
      "Integrated secure APIs for major enterprises like KFC and fuel retailers to enable seamless digital transactions.",
      "Handled real-time data validation and backend integration to ensure robust financial service delivery.",
      "Built mobile-first tools to empower street vendors and promote financial inclusion.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Outsourced Software Development (Pty)Ltd.",
    icon: outsourced,
    iconBg: "#383E56",
    date: "Oct 2021 - Nov 2021",
    points: [
      "Created responsive web interfaces using HTML, CSS, and JavaScript.",
      "Focused on cross-browser optimization and front-end performance enhancements.",
      "Delivered client-ready web pages that adhered to modern design principles.",
      "Collaborated with developers on layout structure and UI/UX feedback.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Nerdy Joy",
    icon: nerdyjoy,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Oct 2021",
    points: [
      "Developed interactive mobile apps using React Native in a startup environment.",
      "Converted UI/UX prototypes into fully functional screens with performance optimizations.",
      "Engaged in daily stand-ups and product iterations with design and dev teams.",
      "Ensured app consistency across different devices and platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Thulz proved me wrong.",
    name: "Ms. Isabella",
    designation: "Case Specialist",
    company: "Individual",
    image: "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tholoana does.",
    name: "Mr Masupha",
    designation: "CEO",
    company: "Pay Lesotho",
    image: "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "After Tholoana optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mr Ntsane",
    designation: "Team Lead",
    company: "Pay Lesotho",
    image: "https://mir-s3-cdn-cf.behance.net/user/276/978e818476285.550a92f8c501c.png",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "A fully functional modern e-commerce web application built with Next.js, Sanity.io (headless CMS), and Stripe for secure payments. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://sjainstore.vercel.app/",
  },
  {
    name: "PlantCare App",
    description:
      "A React Native mobile application that helps users detect plant diseases and receive care recommendations using AI-powered image recognition.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flaskapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: plantcare,
    source_code_link: "https://github.com/SjainThuli/PlantCare",
  },
  {
    name: "PayLesotho Website",
    description:
      "Developed the fully functional PayLesotho website for the PayLesotho fintech platform, enabling secure digital payments, mobile money integration, and merchant services across Lesotho.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: paylesotho,
    source_code_link: "https://www.paylesotho.co.ls/",
  },
  {
    name: "Payment GateWay",
    description:
      "A secure and scalable payment gateway enabling seamless online and in-app transactions through M-Pesa and EcoCash, allowing merchants to accept mobile money payments instantly across Lesotho.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: paymentgateway,
    source_code_link: "https://payments.paylesotho.co.ls/",
  },
];

export { services, technologies, experiences, testimonials, projects };
