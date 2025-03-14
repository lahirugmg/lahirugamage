"use client";

import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const ExperienceTimeline = () => {
  const workExperience = [
    {
      title: "Senior Technical Lead",
      organization: "WSO2",
      period: "December 2011 - Present",
      description: [
        "Led development and solution architecture of customer projects end to end adopting best practices that cut maintenance costs by 25% on average.",
        "Reduced development costs by 25% by simplifying the solution architecture.",
        "Mentored six new hires for the customer solutions development team and prepared them to successfully provide solutions.",
        "From 2013 to 2022, participated in 15 engagements totaling 6 years onsite.",
        "R&D: As a senior contributor to the WSO2 Private PaaS product, owned the overall security lead and the autoscaling component.",
        "Received WSO2 Recognition of Outstanding Contribution Award (2017) and Spotlight Recognition Award (2020) from a Fortune 500 customer."
      ],
      icon: BriefcaseIcon,
      type: "work"
    },
    {
      title: "Mentor",
      organization: "Google Summer of Code",
      period: "March 2014 - September 2015",
      description: [
        "Led the autoscaling team in the Apache Stratos project.",
        "Mentored GSoC 2014 - Improvements to Auto-scaling in Apache Stratos.",
        "Mentored GSoC 2015 - Introducing \"curve fitting\" for stat prediction algorithms in Autoscaler."
      ],
      icon: CheckBadgeIcon,
      type: "work"
    },
    {
      title: "Trainee Software Engineer",
      organization: "AtLink",
      period: "March 2010 - September 2010",
      description: [
        "Network Monitoring System: By automating the monitoring system, the program reduced the costs and effort of monitoring by 50%."
      ],
      icon: BriefcaseIcon,
      type: "work"
    }
  ];

  const education = [
    {
      title: "M.Sc. in Computer Science - Big Data (Reading)",
      organization: "Arizona State University",
      period: "August 2022 - Present",
      description: [
        "Foundations of Algorithms: A-",
        "Artificial Intelligence: A",
        "Statistical Machine Learning: A",
        "Software Verif/Validation/Test: B",
        "Data Processing at Scale: A+",
        "Engineering Blockchain Applications: A+"
      ],
      icon: AcademicCapIcon,
      type: "education"
    },
    {
      title: "B.Sc. (Eng) in Computer Science and Engineering",
      organization: "University of Moratuwa",
      period: "March 2007 - December 2011",
      description: [
        "Includes a Dean's list award"
      ],
      icon: AcademicCapIcon,
      type: "education"
    },
    {
      title: "Machine Learning",
      organization: "Stanford University, on Coursera",
      period: "March 2016 - June 2016",
      description: [
        "Certificate ID: LFZVVXVVEQQF"
      ],
      icon: AcademicCapIcon,
      type: "education"
    },
    {
      title: "Deep Learning specialization",
      organization: "deeplearning.ai on Coursera",
      period: "December 2019 - February 2020",
      description: [
        "Certificate ID: U55WCFN6WV5D"
      ],
      icon: AcademicCapIcon,
      type: "education"
    }
  ];

  // Combine and sort experience by date (most recent first)
  const allExperience = [...workExperience, ...education].sort((a, b) => {
    const dateA = new Date(a.period.split(' - ')[0]);
    const dateB = new Date(b.period.split(' - ')[0]);
    return dateB.getTime() - dateA.getTime();
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A timeline of my professional journey, education, and career milestones.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {allExperience.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`mb-12 relative ${
                index % 2 === 0 
                  ? 'sm:mr-auto sm:ml-0 sm:pr-12 sm:pl-0 sm:text-right' 
                  : 'sm:ml-auto sm:mr-0 sm:pl-12 sm:pr-0 sm:text-left'
              } w-full sm:w-[46%]`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 sm:left-auto ${
                index % 2 === 0 ? 'sm:right-0 sm:translate-x-1/2' : 'sm:left-0 sm:-translate-x-1/2'
              } top-6 transform bg-white p-1 rounded-full border-4 ${
                exp.type === 'work' ? 'border-primary' : 'border-blue-500'
              }`}>
                <exp.icon className={`w-5 h-5 ${
                  exp.type === 'work' ? 'text-primary' : 'text-blue-500'
                }`} />
              </div>
              
              {/* Content */}
              <div className={`pl-10 sm:pl-0 ${
                exp.type === 'work' 
                  ? 'border-l-4 sm:border-l-0 sm:border-r-4 border-primary' 
                  : 'border-l-4 sm:border-l-0 sm:border-r-4 border-blue-500'
              } ${
                index % 2 === 0 
                  ? 'sm:pr-6' 
                  : 'sm:pl-6 sm:border-l-4 sm:border-r-0'
              } p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                <div className="mb-1 text-sm font-semibold text-primary">{exp.period}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                <h4 className="text-lg font-medium text-gray-700 mb-4">{exp.organization}</h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline; 