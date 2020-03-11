import React, { useState } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
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
      </Layout>
    </ThemeProvider>
  );
}

export default App;
