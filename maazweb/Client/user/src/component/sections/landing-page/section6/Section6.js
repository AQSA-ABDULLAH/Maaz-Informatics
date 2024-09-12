import React from 'react';
import styles from './section6.module.css';
import { WEBSITE_NAME } from '../../../constant/WebsiteConstants';

function Section6() {
  const newsItems = [
    {
      title: "Fast Company",
      description: `Employees are bringing about mental health days, but not because they don’t need them.`,
      link: "#",
    },
    {
      title: "MedCity News",
      description: `Report: Employed Individuals Experience Worse Anxiety, Depression Than National Average`,
      link: "#",
    },
    {
      title: "Travelers",
      description: `Travelers Introduces Mental Health App for Injured Employees`,
      link: "#",
    },
    {
      title: "TechCrunch",
      description: `How to obtain FDA buy-in and unlock non-dilutive funding for your health startup`,
      link: "#",
    },
    {
      title: "CB Insights",
      description: `The Digital Health 150: The most promising digital health companies of 2022`,
      link: "#",
    },
  ];

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>What's New?</h2>
      <div className={styles.newsGrid}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6;

