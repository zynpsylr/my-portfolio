import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const staticSkills = [
    {
      name: 'JavaScript',
      bgColor: '#faeba1ff', // Sarı
      icon: images.javascript,
    },
    {
      name: 'TypeScript',
      bgColor: '#a8cbe6ff', // Açık yeşil
      icon: images.typescript,
    },
    {
      name: 'HTML',
      bgColor: '#ff9d9dff', // Kırmızı ton
      icon: images.html,
    },
    {
      name: 'CSS',
      bgColor: '#a8cbe6ff',
      icon: images.css,
    },
    {
      name: 'React',
      bgColor: '#3c6ea0ff',
      icon: images.react,
    },
    {
      name: 'Python',
      bgColor: '#f6efbaff', // Turuncu
      icon: images.python,
    },
    {
      name: 'Next.js',
      bgColor: '#bebcbcff',
      icon: images.nextjs,
    },
    {
      name: 'Node.js',
      bgColor: '#96da93ff', // Yeşil
      icon: images.node,
    },
    {
      name: 'React Native',
      bgColor: '#3c6ea0ff',
      icon: images.reactnative,
    },
    {
      name: 'C#',
      bgColor: '#d18fe7ff', // Turuncu-kırmızı
      icon: images.csharp,
    },
    {
      name: 'PHP',
      bgColor: '#5c228992', // Açık mavi
      icon: images.php,
    },
    {
      name: 'Git',
      bgColor: '#ff9d9dff', // Pembe
      icon: images.git,
    },
    {
      name: 'Autodesk',
      bgColor: '#bebcbcff',
      icon: images.autodesk,
    },
  ];

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      const combinedSkills = [...staticSkills, ...data];
      setSkills(combinedSkills);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Yeteneklerim</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={typeof skill.icon === 'string' ? skill.icon : urlFor(skill.icon)}
                  alt={skill.name}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
