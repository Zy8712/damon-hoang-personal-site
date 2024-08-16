import React from "react";
import { RiAdminLine } from "react-icons/ri";
import { BsCupHot } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Administrative Assistant",
    location: "Tzu Chi Academy | Toronto, ON",
    description:
      "Established interpersonal relationship skills from parental relationship management. Developed my leadership and management skills by resolving conflicts and navigating students through assigned tasks. De-escalated conflicts to minimize and limit workflow disruption.",
    icon: React.createElement(RiAdminLine),
    date: "Sep 2015 - Apr 2018",
    image: "/experience/eco-cha-tea.jpg",
  },
  {
    title: "Customer Service Representative",
    location: "Eco-Cha Teas | Nantou, Taiwan",
    description:
      "Forward-facing role responsible for customer interaction and promoting Eco-Cha products. Built connections with potential customers through effective communication using code-switching between English and Mandarin. Adapted to impromptu customer interaction with active listening and provided relevant information to explain Eco-Cha’s products effectively.",
    icon: React.createElement(BsCupHot),
    date: "2017",
    image: "/experience/eco-cha-tea.jpg",
  },
  {
    title: "Customer Service Representative",
    location: "P Café | Tamsui District, New Taipei City, Taiwan",
    description:
      "Greeted and served customers in a fast-paced café environment with professionalism, accurately processed orders and payments for dine-in and takeaway, provided product recommendations, maintained cleanliness and organization of the workspace, collaborated with team members for smooth operations, and promptly resolved customer concerns to ensure high service quality.",
    icon: React.createElement(CiCoffeeCup),
    date: "Nov 2022 - Mar 2023",
    image: "/experience/eco-cha-tea.jpg",
  },
] as const;

export const educationData = [
  {
    title: "Bachelors of Communications and Media Studies",
    location: "University of Toronto | Mississauga, ON",
    description: "Gained a strong foundation in media theory, communication strategy, and digital culture. Developed critical thinking, writing, and research skills through coursework and collaborative projects.",
    icon: React.createElement(FaGraduationCap),
    date: "Sep 2018 - Aug 2022",
  },
  {
    title: "Certificate in Digital Communication",
    location: "Sheridan College | Toronto, ON",
    description: "Completed practical training in digital storytelling, social media strategy, and content creation. Gained hands-on experience with industry tools for effective online communication and branding.",
    icon: React.createElement(PiCertificateBold),
    date: "2020 - 2022",
  },
  {
    title: "Masters of Business Administration - MBA",
    location: "Australian Institute of Business",
    description: "Pursuing an industry-focused MBA with coursework in leadership, strategic management, finance, and innovation. Building advanced business acumen and decision-making skills to drive organizational growth and transformation.",
    icon: React.createElement(FaUniversity),
    date: "Sept 2023 - Apr 2025",
  }
] as const;


export const skillsData = [
  "Customer Support",
  "Customer Service",
  "Customer Interaction",
  "Negotiation",
  "Retail",
  "Sales",
  "Rhetoric",
  "Communication",
  "Research",
  "Documentation",
  "Visual Rhetoric",
  "Discourse Analysis",
  "User Personas",
  "Security Awareness",
  "Privacy Protection",
  "Information Security Awareness",
  "Strategic Thinking",
  "Virtual Office",
  "Telecommuting",
  "Time Management",
  "Virtual Work",
  "Team Management",
  "Generational Differences",
  "Project Resourcing",
  "Project Team Management",
  "Project Management",
  "Delegation",
  "Team Leadership",
  "Economics",
  "Administrative Processes",
  "Administrative Assistance",
  "Organization Skills",
  "Self-confidence",
  "Agile Project Management",
  "Agile Methodologies",
  "Digital Marketing",
  "Leadership",
] as const;
