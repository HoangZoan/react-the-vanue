import "./resources/styles.css";
import { Fragment } from "react";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";

function App() {
  return (
    <Fragment>
      <Header />

      <Fragment>
        <Featured />
      </Fragment>

      <Fragment>
        <VenueNfo />
      </Fragment>

      <Fragment>
        <Highlights />
      </Fragment>

      <Fragment>
        <Pricing />
      </Fragment>

      <Fragment>
        <Location />
      </Fragment>

      <Footer />
    </Fragment>
  );
}

export default App;
