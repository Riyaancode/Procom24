import { IconType } from "react-icons";
import {
  FaAward,
  FaBusinessTime,
  FaCalendarWeek,
  FaComputer,
  FaCubesStacked,
  FaLaptopCode,
  FaPalette,
  FaSearchengin,
} from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { SiGoogledocs } from "react-icons/si";

export const COURSES: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Web Application Development",
    href: "/",
    description:
      "Learn to build dynamic and responsive web applications using cutting-edge technologies.",
  },
  {
    title: "Computer Information Technology",
    href: "/",
    description:
      "Explore the fundamentals of computer systems, networks, and information technology infrastructure.",
  },
  {
    title: "Graphic Design",
    href: "/",
    description:
      "Unleash your creativity through graphic design, mastering the tools and principles of visual communication.",
  },
  {
    title: "Digital Marketing",
    href: "/",
    description:
      "Dive into the world of online marketing strategies, including social media, content creation, and analytics.",
  },
  {
    title: "MS Office",
    href: "/",
    description:
      "Enhance your productivity with in-depth knowledge of Microsoft Office tools for efficient document creation and data management.",
  },
  {
    title: "SEO",
    href: "/",
    description:
      "Boost website visibility and traffic by mastering the essentials of search engine optimization techniques.",
  },
];

export const HOME_WHYCHOOSEUS: {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}[] = [
  {
    title: "Flexible Timings",
    description:
      "We offer flexible schedules for our students, allowing them to effectively manage their studies alongside other commitments.",
    // icon: <FaBusinessTime size={24} color="#ffff" />,
    icon: FaBusinessTime,
    color: "bg-cyan-400",
  },
  {
    title: "Weekend Classes",
    description:
      "Our weekend classes cater to working professionals, offering flexibility without disrupting weekday schedules.",
    icon: FaCalendarWeek,
    color: "bg-purple-400",
  },
  {
    title: "Oraganized Modules",
    description:
      "Our courses feature well-organized modules, enhancing the learning experience for students.",
    icon: FaCubesStacked,
    color: "bg-rose-400",
  },
  {
    title: "Certification",
    description:
      "We provide certification upon completion of our courses. This recognition validates the skills acquired by students",
    icon: FaAward,
    color: "bg-yellow-400",
  },
];

export const HOME_COURSES: {
  title: string;
  description: string;
  icon: IconType;
  image: string;
}[] = [
  {
    title: "Web Application Development",
    description:
      "Learn to build dynamic and responsive web applications using cutting-edge technologies.",
    icon: FaLaptopCode,
    image: "/assets/demo.jpg",
  },
  {
    title: "Computer Information Technology",
    description:
      "Explore the fundamentals of computer systems, networks, and information technology infrastructure.",
    icon: FaComputer,
    image: "/assets/demo.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "Unleash your creativity through graphic design, mastering the tools and principles of visual communication.",
    icon: FaPalette,
    image: "/assets/demo.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Dive into the world of online marketing strategies, including social media, content creation, and analytics.",
    icon: HiSpeakerphone,
    image: "/assets/demo.jpg",
  },
  {
    title: "MS Office",
    description:
      "Enhance your productivity with in-depth knowledge of Microsoft Office tools for efficient document creation and data management.",
    icon: SiGoogledocs,
    image: "/assets/demo.jpg",
  },
  {
    title: "SEO",
    description:
      "Boost website visibility and traffic by mastering the essentials of search engine optimization techniques.",
    icon: FaSearchengin,
    image: "/assets/demo.jpg",
  },
];

export const HOME_TESTIMONIALS: {
  id: number;
  name: string;
  image: string;
  description: string;
}[] = [
  {
    id: 1,
    name: "John Doe",
    image: "/assets/Burhan-Khan.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem nostrum quo repellendus",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "/assets/Burhan-Khan.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem nostrum quo repellendus",
  },
  {
    id: 3,
    name: "John Doe",
    image: "/assets/Burhan-Khan.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem nostrum quo repellendus",
  },
  {
    id: 4,
    name: "Jane Doe",
    image: "/assets/Burhan-Khan.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem nostrum quo repellendus",
  },
];
