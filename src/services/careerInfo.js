import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsTerminal } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';

const careerInfo = [
  {
    id: 1,
    icon: <BsTerminal />,
    title: 'Backend Develoment & Others',
    description:
      'My main path, Technologies that I\'ve learned on my journey. Some of them crucial on my day by day, others looking forward to using again.',
    knowledgeList:
      'Java, APIs Restfull, NodeJS, SQL, MongoDB, Git, Terminal, Github, JavaScript, PostgreSQL and much more',
  },
  {
    id: 2,
    icon: <GoBrowser />,
    title: 'Frontend Development',
    description:
      'I like to bring ideas to life in the browser.In a beautiful and visual way!',
    knowledgeList:
      'HTML5, CSS3, Sass, JavaScript, JQuery, ReactJs, Redux, GatsbyJs, Shopify',
  },
  {
    id: 3,
    icon: <AiOutlineMobile />,
    title: 'Mobile Development',
    description:
      'I have come across this trail a couple of times. I have done different proofs of concept and it seems like an interesting world.',
    knowledgeList: 'JavaScript, React Native, Kotlin',
  },

];

export default careerInfo;
