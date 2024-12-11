import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hang Li.`,
  description: (
    <>
      <p className="prose-sm text-white sm:prose-base lg:prose-lg style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}">
        I'm a Brussels based <strong className="text-white">Software QA Automation Engineer</strong>, currently working
        as <strong className="text-white">Freelance</strong> helping build a modern, solid, user-friendly testing framework.
      </p>
      <p className="prose-sm text-white sm:prose-base lg:prose-lg drop-shadow-lg">
        In my free time time, you can catch me training in <strong className="text-white">Ski</strong>,
        scuba <strong className="text-white">diving</strong>, or exploring beautiful{' '}
        <strong className="text-white">nature</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a self-motivated Software QA/Automation Engineer with 5 years of experience in SaaS development, specializing in test design, implementation, and maintenance.
  My goal is to increase user satisfaction and reduce the build failure rate through continuous optimization and rigorous quality assurance.
  Aspiring to utilize JavaScript/TypeScript and Playwright expertise to improve user-friendly, visually appealing applications.No work permit required.`,
  aboutItems: [
    {label: 'Location', text: 'Brussels, BE', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Ski, Diving, Camping', Icon: SparklesIcon},
    {label: 'Study', text: 'VUB, NPU, UCSD', Icon: AcademicCapIcon},
    {label: 'EX-Employment', text: 'Sitecore', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Chinese',
        level: 10,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'Automation Tools',
    skills: [
      {
        name: 'Playwright',
        level: 9,
      },
      {
        name: 'Selenium',
        level: 8,
      },
      {
        name: 'Cypress',
        level: 4,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'CI/CD Integration',
        level: 7,
      },
      {
        name: 'Test Management Tools',
        level: 9,
      },
      {
        name: 'Performance Testing',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2020',
    location: 'VUB',
    title: 'Master of Science in Applied Science And Engineering: Applied Computer Science',
    content: <p>Faculty of Engineering</p>,
  },
  {
    date: 'September 2017',
    location: 'NPU',
    title: ' Bachelor of Engineering(Microelectronics)',
    content: <p>School of Software and Microelectronics</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2021 - August 2024',
    location: 'Sitecore',
    title: 'Software QA automation Engineer',
    content: (
      <ul>
        <li>&bull;  Testing in the production and QA environments. Conducting detailed analysis of business and technical requirements.  Creating test plans, test suites, test cases, and bug reports.</li>
        <li>&bull;  A main contributor to GUI automation framework. Using Playwright/JavaScript to automate E2E test cases and is responsible for CI/CD daily report.</li>
        <li>&bull;  Owner of the Content Hub performance testing. Using K6 and artillery and a self-build internal tool for API and browser page performance testing. Documenting and reporting the results regularly.</li>
      </ul>
    ),
  },
  {
    date: 'September 2019 - January 2021',
    location: 'Sitecore',
    title: 'Junior Software QA Engineer',
    content: (
      <ul>
        <li>&bull;  Testing desktop and mobile web application versions in QA environments.</li>
        <li>&bull;  Develop flow-based test cases under test plan and functional requirements.</li>
        <li>&bull;  GUI automation framework contributor. Using Selenium/C# to maintain and to automate E2E test cases.</li>
        <li>&bull;  Maintaining internal team tools and slack bots. Such as a content hub localization tool, and a daily Jira bug/improve report bot.</li>
        <li>&bull;  Reporting bugs and performing bug fix verification testing.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Collaborating with Lee was a pleasure. They have a unique ability to tackle complex challenges with creativity and precision. Their positive attitude and technical skills in [specific area] consistently elevate the quality of our team’s work.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me',
  items: [
    {
      type: ContactType.Email,
      text: 'lh125699@gmail.com',
      href: 'mailto:lh125699@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Brussels, Belgium',
      href: 'https://www.google.com/maps/place/Brussels/@50.8551154,4.3342174,15593m/',
    },
    {
      type: ContactType.Github,
      text: 'Lee',
      href: 'https://github.com/hangli1256',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hangli1256'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hangli033/'},
];
