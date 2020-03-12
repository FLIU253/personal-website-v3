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
