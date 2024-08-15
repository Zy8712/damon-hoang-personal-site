"use client";

import React from "react";
import SectionHeading from "../reused-components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../submit-btn";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28 flex flex-col items-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div ref={ref}>
        <SectionHeading>Contact me</SectionHeading>
      </div>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:damon.h9752@gmail.com">
          damon.h9752@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="w-full mt-10 flex flex-col items-center dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="borderBlack h-14 w-full rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 w-full rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
      <Image
        src="/contact/undraw_personal-text_090t.svg"
        alt=""
        width={500}
        height={500}
        className="w-full max-w-2xl mt-12"
      />
    </motion.section>
  );
}
