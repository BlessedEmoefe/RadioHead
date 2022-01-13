import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* importing pages from the pages directory*/
import Home from "../../pages/Home/home.page";
import About from "../../pages/About/about.page";
import Services from "../../pages/Services/services.page";
import Contact from "../../pages/Contact/contact.page";
import Footer from "../../components/footer/footer.component";

/*Import the Header component */
import Header from "../../components/header/header.component";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Services />} path="/services" />
        <Route index element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
