import React, { useState } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Section from "./components/section/Section";
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
      </Layout>
    </ThemeProvider>
  );
}

export default App;
