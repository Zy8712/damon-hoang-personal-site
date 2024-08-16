"use client";

import React from "react";
import SectionHeading from "../reused-components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div ref={ref}>
        <SectionHeading>Quick Introduction</SectionHeading>
      </div>

      <p className="mb-3">
        Welcome to my professional space! I'm Damon, a Communications and Digital Marketing Specialist with a strong foundation in crafting compelling narratives and strategies that resonate with audiences. I hold a Bachelor’s degree in Communications and Media Studies from the University of Toronto Mississauga, complemented by a Certificate in Digital Communication from Sheridan College.
      </p>

      <p className="mb-3">
        Currently, I am advancing my business expertise by pursuing an MBA at the Australian Institute of Business, with a focus on leadership, strategic management, and innovation. With hands-on experience in content creation, social media management, and digital strategy, I am passionate about leveraging the power of digital platforms to build meaningful connections and drive engagement.
      </p>

      <p>
        I thrive in dynamic environments and am always eager to learn and adapt to the ever-evolving digital landscape. Feel free to explore my work and connect with me to discuss how we can collaborate to create impactful digital experiences.
      </p>


      <Image
        src="/about/undraw_profile_d7qw.svg"
        alt=""
        width={500}
        height={500}
        className="w-full max-w-2xl mt-12"
      />
    </motion.section>
  );
}
