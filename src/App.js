import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Flex from "./Styles/styledComponent/Flex"; // Assuming Flex component is exported from this file
import globalStyle from "./Styles/globalCss"; // Assuming globalStyle is a function to apply global CSS
import Nav from "./components/nav";
import Main from "./components/main";
import Register from "./pages/Register/Register";
import Signin from "./pages/Signin/Signin";
import VolunteerExplorerPage from "./components/vol"; // Assuming vol.js represents the Volunteer Explorer Page

function App() {
  globalStyle(); // Apply global styles

  return (
    <Router>
      <Flex
        id="wrapper"
        data-testid="app"
        css={{
          position: "relative",
          padding: " $2 $10",
          "@bp1": {
            padding: " $2 $3",
          },
          "@bp2": {
            padding: " $2 $5",
          },
          "@bp5": {
            padding: " $2 $3",
          },
        }}
      >
        {/* Placeholder for background elements */}
        <Flex css={{ imgBg: "" }}></Flex>
        <Flex css={{ meshBg: "" }}></Flex>

        {/* Nav component is always rendered */}
        <Nav />

        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/volunteer" element={<VolunteerExplorerPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />

          {/* Add more routes for other components/pages */}
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
