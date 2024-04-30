import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "about_solid", label: "About Solid" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "our_projects ", label: "Our Project " },
  { href: "/", key: "careers", label: "Careers" },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "bg-green-500",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "bg-violet-500",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "bg-blue-500",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "bg-orange-500",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Our Company",
    links: [
      "About Solid",
      "Our Services",
      "Properties",
      "Testmonials",
      "Projects",
    ],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "FAQ",
      "Contact Us",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [faFacebook, faInstagram, faXTwitter, faTiktok],
};

export const CLIENTS = [
  { logoSrc: "/testmonial-logo-1.png", name: "TreGuru" },
  { logoSrc: "/testmonial-logo-1.png", name: "TreGuru" },
  { logoSrc: "/testmonial-logo-1.png", name: "TreGuru" },
  { logoSrc: "/testmonial-logo-1.png", name: "TreGuru" },
  { logoSrc: "/testmonial-logo-1.png", name: "TreGuru" },
  { logoSrc: "/testmonial-logo-1.png", name: "TreGuru" },
  { logoSrc: "/testmonial-logo-1.png", name: "TreGuru" },
];

export const SERVICES = [
  {
    iconSrc: "/general-contracting.svg",
    iconAlt: "General Contracting Icon",
    title: "General Contracting",
    description:
      "SOLID partners with clients, transforming design into reality. We maintain open communication to ensure projects exceed expectations in timeline, budget, and quality.",
  },
  {
    iconSrc: "/infrastructure-networks.svg",
    iconAlt: "Infrastructure Networks Icon",
    title: "Infrastructure Networks",
    description:
      "SOLID tackles large-scale infrastructure: roads, transit, utilities, and communication networks. Our expertise guarantees successful execution.",
  },
  {
    iconSrc: "/turnkey-projects.svg",
    iconAlt: "Turnkey Projects Icon",
    title: "Turnkey Projects",
    description:
      "SOLID streamlines construction with turnkey project management. We handle everything, from planning to delivery, for a stress-free experience.",
  },
  {
    iconSrc: "/electro-mechanical-works.svg",
    iconAlt: "Electro-Mechanical Works Icon",
    title: "Electro-Mechanical Works",
    description:
      "From homes to factories, SOLID provides complete electrical & mechanical design/build services. We cover heating, cooling, power, lighting, and controls.",
  },
];

export const PROJECTS_COUNTS = [
  { count: "6+", label: "Commercial & Mixed Use" },
  { count: "2+", label: "Education" },
  { count: "3+", label: "Hospitality" },
  { count: "2+", label: "Intrastructure & Industrial" },
  { count: "3+", label: "Recreational" },
  { count: "9+", label: "Residental" },
];

export const HOW_IT_WORKS_SNIPPETS = [
  {
    iconAlt: "Plan Together Icon",
    iconSrc: "/plan.svg",
    title: "Plan Together",
    description:
      "We collaborate on your vision, crafting a detailed plan to bring your dream to reality.",
  },
  {
    iconAlt: "Build with Expertise Icon",
    iconSrc: "/build.svg",
    title: "Build with Expertise",
    description:
      "Our experienced team takes the reins, ensuring exceptional quality and adherence to timelines.",
  },
  {
    iconAlt: "Seamless Handover Icon",
    iconSrc: "/handover.svg",
    title: "Seamless Handover",
    description:
      "We deliver your completed project, ready for you to enjoy. Your new space awaits!",
  },
];

export const PROJECTS = [
  {
    title: "ICity New Cairo",
    description:
      "The ICity project developed by Mountain View is located in New Cairo. The residential complex is served by modern facilities to decrease congestion and align with the government's vision to expand residential projects in new cities. Solid’s scope of work includes the construction of 3 podiums with 21 buildings (B + G + 5 typical floors) for a total built-up area 114,000 sqm.",
    imageAlt: "ICity New Cairo Image",
    image: "/featured-project-one.png",
    space: "114K SQM",
    rate: "4.9",
    location: "New Cairo",
  },
  {
    title: "MidTown Solo",
    description:
      "Midtown Solo is a gated community developed by Better Home that is directly located on Bin Zayed Road at the New Capital. Solid’s scope of work includes the construction of 131 villas on a core and shell basis with a total built-up area of 10,600 sqm.",
    imageAlt: "MidTown Solo Image",
    image: "/featured-project-two.jpg",
    space: "10.6K SQM",
    rate: "4.4",
    location: "New Capital",
  },
  {
    title: "Royal Villas",
    description:
      "Royal Villa is a Hyde Park project located at the heart of New Cairo. Solid’s scope of work includes the construction of 78 core and shell villas including infrastructure with total a built-up area of 27,000 sqm.",
    imageAlt: "Royal Villas Image",
    image: "/featured-project-three.jpg",
    space: "72K SQM",
    rate: "4.6",
    location: "New Cairo",
  },
  {
    title: "MidTown Sky",
    description:
      "Midtown Sky is a gated community developed by Better Home offering views from the highest hill at the New Capital. It is located on the New Capital’s ring road across from Expo City and near the Sokhna Highway.",
    imageAlt: "MidTown Sky Image",
    image: "/featured-project-four.jpg",
    space: "48K SQM",
    rate: "4.9",
    location: "New Capital",
  },
  {
    title: "Hacienda White Units",
    description:
      "Hacienda White Villas: Luxurious North Coast living by Palm Hills. Relax in style at this stunning development featuring 29,800 sq.m. of opulent space designed by ABCG consultants.",
    imageAlt: "Hacienda White Units Image",
    image: "/featured-project-five.png",
    space: "29.8K SQM",
    rate: "4.1",
    location: "North Coast",
  },
];
