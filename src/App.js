import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/main/home/Home";
import Services from "./component/main/servives/Services";
import Project from "./component/main/project/Project";
import TrustedBy from "./component/main/trustedBy/TrustedBy";
import Blog from "./component/main/Blog/Blog";
import Experince from "./component/main/Experience/Experience";
import Testimonial from "./component/main/Testimonial/Testimonial";
import FAQ from "./component/main/FAQ/FAQ";
import Footer from "./component/Footer/Footer";
import Designer from "./component/main/designer/Designer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <TrustedBy />
      <Services />
      <Project />
      <Blog />
      <Designer />
      <Experince />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
