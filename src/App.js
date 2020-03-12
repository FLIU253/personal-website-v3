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
            software engineering student at Western University.
          </p>
          <p>
            Also, I'm passionate about web development and have experience
            building web applications and services in various tech stacks
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
              "Collaborated with colleagues and faculty members to produce instructional videos using Adobe Photoshop and Adobe Premiere Pro.",
              "Performed administrative duties, including managing incoming calls, booking appointments, and directing clients to the appropriate technical staff for assistance."
            ]}
          />
        </Section>

        <Section id="projects" title="Projects">
          <Link
            title="🥃 JAMS: Job Application Management System"
            desc="A job management system that allows users to track all of their job application date including: places to apply, places applied to, upcoming interviews, rejections, and offered positions."
            link="https://jam-system.herokuapp.com/"
            github="https://github.com/FLIU253/Job-application-management-system"
            project={true}
          />
          <Link
            title="👖 Clothing Store"
            desc="A clothing store like application built to learn how to use redux with react. This application uses Firebase and Stripe API to simulate logins and payments respectively."
            link="https://clothing-store-app.herokuapp.com/"
            github="https://github.com/FLIU253/clothing-store-application"
            project={true}
          />
          <Link
            title="💬 React Slack Clone"
            desc="A clone of Slack built with Firebase and React with that allows users to message one another in real time. Some of the features include: uploading images, creating channels, and searching for messages."
            link="https://react-slack-clone-5239b.firebaseapp.com/"
            github="https://github.com/FLIU253/react-slack-clone"
            project={true}
          />
          <Link
            title="🧷 Geo Pins"
            desc="GeoPin is a real time application that reads the user's current location and allows the user to drop pins on a map and write a message about the location for other users to see. APIs used include Google login and Mapbox."
            link="https://geopins.fliu253.now.sh/"
            github="https://github.com/FLIU253/geo-pins"
            project={true}
          />
          <Link
            title="🎞️ React IMDB"
            desc="An application inspired by IMDB that allows users to search for movies and check details about movies including details such as: Runnig time, plot and IMDB rating. "
            link="https://react-imdb-12312.netlify.com/"
            github="https://github.com/FLIU253/react-imdb"
            project={true}
          />
          <Link
            title="🎲 Random Anime Generator"
            desc="A fun web application that generates the user a random anime when a button is clicked. It also allows users to enter their myanimelist username to generate a tier list based on their own ratings from myanimelist."
            link="https://ani-generate.herokuapp.com/"
            github="https://github.com/FLIU253/random-anime-generator"
            project={true}
          />
        </Section>

        <Section id="skills" title="Skills">
          <Link
            title="Languages & Frameworks"
            desc="JavaScript, Python, React, Node.js, Express.js, Vue, Angular, Java, Cucumber, SerenityBDD,C++"
          />
          <Link title="Databases" desc="MongoDB, PostreSQL, MySQL" />
          <Link title="Others" desc="BDD testing, API design, Agile / Scrum" />
        </Section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
