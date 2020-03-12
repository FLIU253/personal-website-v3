import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/404";
import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route
          exact
          path="/"
          component={props => (
            <Landing
              {...props}
              isDarkTheme={isDarkTheme}
              toggleTheme={toggleTheme}
            />
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
