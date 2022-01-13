import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* importing pages from the pages directory*/
import Home from "../../pages/Home/home.page";
import { colors } from "../theme/colors.js";

/*Import the Header component */
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact element={<Home />} path="/" />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
