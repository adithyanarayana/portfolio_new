import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Aditya Narayana Tirunagari",
  initials: "",
  url: "https://adityanarayana.com",
  location: "Pensacola, FL",
  locationLink: "https://www.google.com/maps/place/pensacola",
  description:
    "Software Engineer || Tech Enthusiast || Learner & Builder ",
  summary:
    "I'm a passionate software engineer with a knack for building innovative solutions. With a Master's in Information Technology and a strong foundation in Computer Science, I specialize in crafting robust and scalable applications. My expertise spans web development, backend systems, and data management. I'm proficient in Next.js, Python, Java, and cloud technologies (GCP, AWS, Azure). Explore my portfolio to see how I transform ideas into reality.",
  avatarUrl: "",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MySql",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Salesforce",
    "Java",
    "C++",
    "R",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    //{ href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "anplust@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "http://github.com/adithyanarayana",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/adityanarayana",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/aditya__naraya",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: 'mailto:"anplust@gmail.com"',
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Titanium Wireless",
      href: "https://titaniumwireless.com/",
      badges: [],
      location: "Hybrid",
      title: "Software Engineer",
      logoUrl: "/tw_logo.jpg",
      start: "October 2024",
      end: "Present",
      description:
        "Software Engineer responsible for developing and optimizing systems using Salesforce and other platforms, while leading and collaborating on cross-functional projects. Focused on delivering innovative solutions to improve business operations.",
    },
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter_logo.jpg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Led a team in developing over five AI applications and APIs using NextJS, OpenAI, Pinecone, and StripeAPI, achieving a 98% accuracy rate. Constructed and established AI projects utilizing Python and Docker, enhancing machine learning and deployment skills. Participated in hackathons, solving real-world problems through innovative solutions and teamwork. Collaborated with industry professionals from Amazon, Bloomberg, and Capital One, gaining expertise in Agile methodologies, CI/CD, Git, and microservice architectures.",
    },
    {
      company: "University of West Florida",
      badges: [],
      href: "https://uwf.edu/",
      location: "Remote",
      title: "Graduate Assistant",
      logoUrl: "/UWF_logo.png",
      start: "August 2023",
      end: "May 2024",
      description:
        "Working with Librarians and CEPS faculty to complete research projects, creating and updating LibGuides and Implemented Task Automation using Python for data management and other regular tasks and responsible for all aspect of user services, including helping patrons with basic reference and research",
    },
    {
      company: "Automate EM",
      href: "",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/automate_logo.jpg",
      start: "January 2022",
      end: "December 2022",
      description:
        "Enhanced and maintained the AutomateEm website, increasing website traffic and addressed technical issues related to the company's application and resolved bugs also developed and maintained scalable backend applications using C and Java.",
    },
   
  ],
  education: [
    {
      school: "University of West Florida",
      href: "https://uwf.edu/",
      degree: "Master's Degree in Information Technology ",
      logoUrl: "/UWF_logo.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Jawaharlal Nehru Technological University",
      href: "https://www.jntuh.ac.in/",
      degree: "Bachelor's Degree of Computer Science and engineering",
      logoUrl: "/JNTUH_logo.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "ARBookFinder Web Scraper",
      href: "",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Web Scraper for scraping AR level and Lexile scores from ARbookfind for Library database.",
      technologies: [
        "Python",
        "Web Scraping",
      ],
      links: [],
    image: "",
    video: "",
      
    },
    {
      title: "Bitcoin Value Detection & Classification using Unsupervised Learning",
      href: "",
      dates: "March 2022",
      active: true,
      description:
        "An App to Detect and Predict Bitcoin Value and other Cryptocurrencies.",
      technologies: [
        "React.js",
        "Python",
        "Numpy",
        "Pandas",
        "LSTM",
      ],
      
      links: [/** 
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        }, */
      ],
      image: "",
      video: "",

      
    }, 
    {
      title: "Blockchain based Electronic Health Records Platform",
      href: "",
      dates: "April 2024",
      active: true,
      description:
        "Designed interoperable EHR system leveraging blockchain and Ethereum for permissioned data access and sharing",
      technologies: [
        "Next.js",
        "Solidity",
        "Node.js",     
       ],
      links: [
       
      ],
      image: "",
      video: "",
    },
    {
      title: "Live AirTraffic Metrics",
      href: "",
      dates: "April 2023",
      active: true,
      description:
        "Dashboard connnected to OpenSky Network to show Live Airtraffic at any given Location.",
      technologies: [
        "Next.js",
        "Python",
        "OpenSky REST API",
        "Pandas",
        "numpy",
        "Bokeh",
      ],
      links: [
        /**{
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />, 
        }, */
      ],
      image: "",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Microsoft StudentAmbassadors Hackathon ",
      dates: "November 2021",
      location: "Remote",
      description:
        "Collaborated with a team of 5 to develop an innovative solution for crowd management and optimized and streamlined the process.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Local Hack Day 2021",
      dates: "October 2021",
      location: "Remote",
      description:
        "Built a web scrapping application on heroku ",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Xcelero 24",
      dates: "February 15th-16th 2020",
      location: "Hyderabad, India",
      description:
        "Developed a webcam attendance monitoring system",
      icon: "public",
      image:
        "",
      links: [],
    },
    
  ],
} as const;
