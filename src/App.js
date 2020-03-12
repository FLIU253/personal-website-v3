import React, { useState } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Section from "./components/section/Section";
import Link from "./components/link/Link";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { GlobalStyles } from "./components/styles/GlobalStyles";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const toggleTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkTheme(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Layout>
        <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        <Section id="about" title="About Me">
          <p>
            I'm an aspiring full-stack engineer who is currently a fourth year
            software engineering student at Western University
          </p>
          <p>
            I'm passionate about web development and have experience building
            web applications and services in various tech stacks
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <Link
            title="Autodata Solutions"
            link="https://www.autodatasolutions.com/"
            desc="Quality Assurance Automation Analyst Intern, May 2019 - August 2020"
            tasks={[
              "Automated, modified, executed, debugged and analyzed test results using Cucumber and SerenityBDD to uncover defects in software applications.",
              "Tracked, identified and logged bugs using Jira, and worked with developers to ensure bugs are fixed, as well as being responsible for automation of features.",
              "Communicated with product management, development and business analysts in the process of preparation and approval of all test related documents."
            ]}
          />
          <Link
            title="Western University"
            link="https://www.itrc.uwo.ca/"
            desc="Instructional Technology Resource Centre Consultant, May 2018 - April 2018"
            tasks={[
              "Assisted professors and faculty members by explaining and teaching them how to use different technologies, including Western's learning management system.",
              "Created and edited CSS and HTML files for faculty members’ course websites to enhance the students’ learning experience.",
              "Collaborated with colleagues and faculty members to produce instructional videos using Adobe Photoshop and Adobe Premiere Pro",
              "Performed administrative duties, including managing incoming calls, booking appointments, and directing clients to the appropriate technical staff for assistance."
            ]}
          />
        </Section>

        <Section id="projects" title="Projects">
          <Link
            title="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            link="https://google.com"
            project={true}
          />
          <Link
            title="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            project={true}
          />
          <Link
            title="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            project={true}
          />
        </Section>

        <Section id="skills" title="Skills">
          <Link
            title="Languages & Frameworks"
            desc="JavaScript (ES6+), Python, React, Node.js, Express.js, Vue, Angular, Java, Cucumber, SerenityBDD,C++"
          />
          <Link title="Databases" desc="MongoDB, PostreSQL, MySQL" />
          <Link title="Others" desc="BDD testing, API design, Agile / Scrum" />
        </Section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
