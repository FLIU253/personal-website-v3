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
            link="https://google.com"
            desc="lorem ispum"
          />
          <Link
            title="Western University"
            link="https://google.com"
            desc="lorem ipsum"
          />
        </Section>

        <Section id="projects" title="Projects">
          <Link
            title="Pivalink"
            desc="Tool to create microlanding pages that can be easily updated and customized to fit any brand"
            link="https://google.com"
            project={true}
          />
          <Link
            title="Coursefacts"
            desc="A platform where students can read and write university / college course reviews anonymously"
            project={true}
          />
          <Link
            title="Dev Blog"
            desc="A open source and minimal personal blog template for developers built with Gatsby and React"
            project={true}
          />
        </Section>

        <Section id="skills" title="Skills">
          <Link
            title="Languages & Frameworks"
            desc="JavaScript (ES6+), Python, React, Node.js, Express.js, Ruby on Rails, PHP"
          />
          <Link title="Databases" desc="MongoDB, PostreSQL, MySQL" />
          <Link
            title="Other"
            desc="Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum"
          />
        </Section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
