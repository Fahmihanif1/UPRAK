import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  php,
  html,
  css,
  sql,
  bootstrap,
  java,
  laravel,
  xampp,
  git,
  figma,
  // docker,
  cpp,
  meta,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  githubb,
  tesla,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
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
    name: "PHP",
    icon: php,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "LARAVEL",
    icon: laravel,
  },
  {
    name: "XAMPP",
    icon: xampp,
  },
  {
    name: "Github",
    icon: githubb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Sekolah Dasar",
    company_name: "SD",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2012 - April 2019",
    points: [
      "Sekolah Dasar saya berada di SDN Tanah Baru 03 Beji, Depok .",
      "Di sekolah ini terdapat lebih dari 10 ruangan kelas. Dan mempunyai lebih dari 10 guru dan staff",
      "Di sekolah dasar saya mengikuti ekstrakulikuler taekwondo dan marawis.",
      "Perpisahan kelas 6 kami liburan ke Jungle Land Bogor.",
    ],
  },
  {
    title: "Sekolah Menengah Pertama",
    company_name: "SMP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2022",
    points: [
      "SMP saya di SMP Citra Negara yang berada di Depok.",
      "Di kelas satu itu adalah masa pengenalan dan beradaptasi dengan teman baru.",
      "Di kelas dua tahun dimana muncul wabah corona dan semua kelas belajar di rumah.",
      "Di kelas tiga wabah corona mulai mereda dan sekolah mulai masuk kembali.",
      "Saat lulus sekolah kami mengadakan wisuda di sekolah.",
    ],
  },
  {
    title: "Sekolah Menengah Kejuruan",
    company_name: "SMK",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2025",
    points: [
      "SMK saya di SMK Citra Negara yang berada di Depok.",
      "Di kelas satu saya mencoba adaptasi dengan teman baru lagi.",
      "Dan di kelas satu sekolah kami mengadakan LDKS (Latihan Dasar Kepemimpinan Siswa).",
      "Di kelas dua saya melaksanakan pkl dengan tim saya.",
    ],
  },
  {
    title: "Kata-kata Motivasi",
    company_name: "Motivasi",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Bekerja keraslah dalam menggapai sesuatu dan janganlah pernah ada kata menyerah, walaupun gagal cobalah terus menerus .",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
