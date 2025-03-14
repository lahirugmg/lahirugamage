import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Lahiru Gamage',
  description: 'Technical blog posts by Lahiru Gamage on API Management, Integration, Architecture, and more.',
};

interface BlogPost {
  title: string;
  date: string;
  description: string;
  url: string;
  source: string;
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "API Gateways for the Modern Enterprise",
      date: "February 24, 2025",
      description: "In today's digital-first world, enterprises rely heavily on Application Programming Interfaces (APIs) to connect applications, services, and data across diverse environments. An API gateway is a key enabler for managing, securing, and optimizing these interactions. However, with the rise of microservices, multi-cloud strategies, and global business requirements, the landscape for API gateways has become more complex. This blog post will explore three main categories of API gateways — External (Edge) Gateways, Internal Gateways, and Egress Gateways — the practical problems each solves, and how they can be combined in modern enterprise and cell-based architectures.",
      url: "https://medium.com/sa-team-blog/api-gateways-for-the-modern-enterprise-5182bcd61b97",
      source: "Medium - WSO2 Solution Architecture Team Blog"
    },
    {
      title: "Essential Architecture Diagrams for WSO2 Implementations",
      date: "January 1, 2025",
      description: "A guide to the most common types of architecture diagrams you might develop when implementing WSO2 solutions, along with details on the depth of information each should include - from business goals to deployment blueprints.",
      url: "https://medium.com/sa-team-blog/essential-architecture-diagrams-for-wso2-implementations-from-business-goals-to-deployment-125ccaa66805",
      source: "Medium - WSO2 Solution Architecture Team Blog"
    },
    {
      title: "Seamless Upgrades: A Comprehensive Guide to Navigating Migrations",
      date: "March 15, 2024",
      description: "A detailed guide to planning and executing successful software migrations and upgrades with minimal disruption, focusing on best practices, common pitfalls, and strategies for ensuring business continuity throughout the transition process.",
      url: "https://medium.com/@lahirugmg/seamless-upgrades-a-comprehensive-guide-to-navigating-migrations-6046803b2be4",
      source: "Medium"
    },
    {
      title: "Agent Authentication in AI Systems",
      date: "February 2, 2025",
      description: "As AI agents become more prevalent and autonomous, secure authentication between agents is crucial for maintaining trust and accountability in digital interactions. This article examines the agent-to-agent authentication mechanism proposed in research on authenticated delegation for AI agents.",
      url: "https://medium.com/@lahirugmg/agent-authentication-in-ai-systems-a67008e47a09",
      source: "Medium"
    },
    {
      title: "Deploy WSO2 APK 1.1.0 and WSO2 APIM 4.3.0 Control Plane in Rancher Desktop",
      date: "January 12, 2024",
      description: "A step-by-step guide to deploying WSO2's API management solutions in a local Rancher Desktop environment, complete with configuration tips and troubleshooting advice.",
      url: "https://medium.com/@lahirugmg/deploy-wso2-apk-1-1-0-and-wso2-apim-4-3-0-control-plane-in-rancher-desktop-a0045e00c87d",
      source: "Medium"
    },
    {
      title: "Computer Science Mind Map v1.0.0",
      date: "November 5, 2023",
      description: "A comprehensive visual map of computer science concepts, theories, and practices, designed to help engineers and students understand the connections between various domains within the field.",
      url: "https://medium.com/@lahirugmg/computer-science-mind-map-v1-0-0-57331ca20c0d",
      source: "Medium"
    },
    {
      title: "Managed WebSocket API for Kafka with WSO2 API Manager",
      date: "August 15, 2023",
      description: "A technical guide on implementing and managing WebSocket APIs connected to Kafka streams using WSO2 API Manager, enabling real-time data processing and event-driven architectures.",
      url: "https://medium.com/@lahirugmg/managed-websocket-api-for-kafka-with-wso2-api-manager-3e17f6e9a121",
      source: "Medium"
    },
    {
      title: "The Open Source ESB WSO2 ESB",
      date: "June 20, 2022",
      description: "An in-depth exploration of WSO2 Enterprise Service Bus capabilities, architecture, and use cases, highlighting its strengths as an open-source integration solution.",
      url: "https://medium.com/@lahirugmg/the-open-source-esb-wso2-esb-feb1796194ee",
      source: "Medium"
    },
    {
      title: "How to Generate SAML 2.0 Assertions with WSO2 Identity Server REST API",
      date: "April 12, 2022",
      description: "A technical tutorial on programmatically generating SAML assertions using WSO2 Identity Server's REST API, with code examples and implementation best practices.",
      url: "https://medium.com/@lahirugmg/how-to-generate-saml-2-0-assertions-with-wso2-identity-server-rest-api-84144a818e80",
      source: "Medium"
    },
    {
      title: "How to Improve OAuth Security with HMAC Validation for WSO2 APIM",
      date: "February 5, 2022",
      description: "A security-focused article on enhancing OAuth implementations with HMAC validation in WSO2 API Manager to prevent token hijacking and replay attacks.",
      url: "https://medium.com/@lahirugmg/how-to-improve-oauth-security-with-hmac-validation-for-wso2-apim-c766b8f04f35",
      source: "Medium"
    },
    {
      title: "Evolution up to Serverless Architecture",
      date: "February 13, 2018",
      description: "A historical overview of software architecture evolution from monoliths to serverless, exploring the technological advancements and paradigm shifts that led to modern cloud-native approaches.",
      url: "https://medium.com/@lahirugmg/evolution-up-to-serverless-architecture-24a0dcc9cac4",
      source: "Medium"
    }
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 mb-10">
            Technical insights, architectural patterns, and integration best practices from my experience in the field.
          </p>
          
          <div className="space-y-10 mt-10">
            {blogPosts.map((post, index) => (
              <article key={index} className="border-b border-gray-200 pb-10">
                <div className="flex items-center gap-x-4 text-xs mb-2">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <div className="text-gray-500">{post.source}</div>
                </div>
                <div className="group">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary">
                    <Link href={post.url} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                  <div className="mt-4">
                    <Link 
                      href={post.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-primary/80 flex items-center"
                    >
                      Read on Medium
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 