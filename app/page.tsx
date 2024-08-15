import { About, Intro, Experience, Education, Skills, Contact, SectionDivider } from "@/utils/pageComponents";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </main>
  );
}
