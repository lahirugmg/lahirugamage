"use client";

import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    {
      category: 'Enterprise Software Architecture',
      items: ['API Management', 'Integration', 'ESB', 'Microservices', 'WSO2']
    },
    {
      category: 'Cloud Native',
      items: ['Kubernetes', 'Docker', 'Service Mesh', 'Serverless', 'CI/CD']
    },
    {
      category: 'Software Development',
      items: ['Java', 'Python', 'JavaScript/TypeScript', 'React', 'Node.js']
    },
    {
      category: 'Platform Security',
      items: ['Identity Management', 'OAuth/OIDC', 'SAML', 'Zero Trust', 'Security Automation']
    },
    {
      category: 'Leadership',
      items: ['Team Mentoring', 'Project Management', 'Agile Methodologies', 'Solution Design']
    },
    {
      category: 'Platform Monitoring',
      items: ['Observability', 'Metrics Collection', 'Log Analysis', 'Performance Optimization']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            With 13 years of experience in the tech industry, I specialize in solving complex business problems
            through software architecture and engineering. I bring a holistic approach to each project,
            considering technical requirements, business objectives, and user needs.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Expertise
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Approach</h3>
          <p className="text-gray-700 mb-4">
            I believe in maximizing outcomes from all aspects of the process—from people to market presentation. 
            My track record with Fortune 500 organizations demonstrates my ability to drive development excellence 
            in collaborative, forward-thinking environments.
          </p>
          <p className="text-gray-700">
            Throughout my career at WSO2, I've led development and solution architecture for customer projects end-to-end, 
            adopting best practices that cut maintenance costs by 25% on average and reduced development costs by 25% 
            through simplified solution architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 