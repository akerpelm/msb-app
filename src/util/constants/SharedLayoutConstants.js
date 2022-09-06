import {
  FaFeather,
  FaUserAstronaut,
  FaDochub,
  FaTelegram,
  FaRegCheckCircle
} from 'react-icons/fa';

export const featureConstants = [
  {
    title: 'Question Creation',
    text: "Creating questions has never been easier. Whether it's multiple choice, long-answer, or anything in between, we have you covered. Text, math, code, images, we have it all."
  },
  {
    title: 'Question Bank',
    text: 'Create, edit, delete, and view all of the questions you have ever created for a specific course. A centralized, easy to navigate location makes the world of difference.'
  },
  {
    title: 'Assignment Creation',
    text: 'Creating assignments in a way that makes sense. Once questions have been created, they can be reused and refined, making creation of assignments a quick, painless process.'
  },
  {
    title: 'Gradebook',
    text: "The gradebook gives in depth analysis into each student's performance relative to others, and provides insight into areas in which a student may require further learning and reinforcement."
  },
  {
    title: 'Grade Weighting',
    text: 'Customize your grading with our easy to use weighting tools. Remove lowest scores, increase the weight of a certain assignment category, or simply use our recommended grade weightings. The opportunities are endless.'
  },
  {
    title: 'Class Content',
    text: 'Add content for student access. Existing content on the web, file uploads for student access, and plenty more. A great place to upload a syllabus, PowerPoint slides, and much more.'
  },
  {
    title: 'Customize Student Experience',
    text: 'Choose when assignments open, how long students have to complete them, and determine when correct answers and grades are visible.'
  },
  {
    title: 'More features',
    text: 'Choose when assignments open, how long students have to complete them, and determine when correct answers and grades are visible.'
  }
];

export const navLinks = [
  {
    ref: 'features',
    display: 'Features'
    // icon: <FaFeather />
  },
  {
    ref: '/about',
    display: 'About Us'
    // icon: <FaUserAstronaut />
  },
  {
    ref: '/docs',
    display: 'Documentation'
    // icon: <FaDochub />
  },
  {
    ref: '/contact',
    display: 'Contact Us'
    // icon: <FaTelegram />
  },
  {
    ref: '/register',
    display: 'Sign Up'
    // icon: <FaRegCheckCircle />
  }
];

export const landingCarouselData = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Professor of Zoology, UCSD',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.'
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Co-Founder of DELKA',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
    featured: true
  },
  {
    id: 3,
    name: 'Jane Doe',
    title: 'CEO of ALBI',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem'
  }
];

export const FAQs = [
  {
    className: 'faqs',
    header: 'How does the 14 day trial work?',
    body: 'Upon registration to MyStudyBook, you have 14 days before you are charged anything. to explore the platform, use it, familiarize yourself with it. If withint 14 dasy you are not satisfied, you may cancel your subscription.'
  },
  {
    className: 'faqs',
    header: 'Test',
    body: 'Foo'
  }
];
