import React from "react";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/styles/theme";
import { GlobalStyles } from "../components/styles/GlobalStyles";

const NotFoundPage = () => (
  <ThemeProvider
    theme={localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme}
  >
    <GlobalStyles />
    <Layout>
      <h1>Not Found</h1>
      <p>This route doesn't exist</p>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;
