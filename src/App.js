import "./resources/styles.css";
import { Fragment } from "react";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";

function App() {
  return (
    <Fragment>
      <Header />

      <Fragment>
        <Featured />
      </Fragment>
      <div style={{ backgroundColor: "red", height: "800px" }} />
      <div style={{ backgroundColor: "blue", height: "800px" }} />
      <div style={{ backgroundColor: "green", height: "800px" }} />
      <div style={{ backgroundColor: "yellow", height: "800px" }} />

      <Footer />
    </Fragment>
  );
}

export default App;
